import { Line } from "react-chartjs-2";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

const SalesLineChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "sales"), (snapshot) => {
      const labels = [];
      const values = [];

      snapshot.forEach((doc) => {
        const { month, amount } = doc.data();
        labels.push(month);
        values.push(amount);
      });

      setChartData({
        labels,
        datasets: [
          {
            label: "Monthly Sales",
            data: values,
            borderColor: "#6366f1",
            backgroundColor: "rgba(99,102,241,0.2)",
            tension: 0.4,
          },
        ],
      });
    });

    return () => unsub();
  }, []);

  return <Line data={chartData} />;
};

export default SalesLineChart;
