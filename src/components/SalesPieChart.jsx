import { Pie } from "react-chartjs-2";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

const SalesPieChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "sales"), (snapshot) => {
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
            data: values,
            backgroundColor: [
              "#6366f1",
              "#22c55e",
              "#f97316",
              "#ef4444",
              "#14b8a6",
              "#947cca",
            ],
          },
        ],
      });
    });

    return () => unsubscribe();
  }, []);

  return <Pie data={chartData} />;
};

export default SalesPieChart;
