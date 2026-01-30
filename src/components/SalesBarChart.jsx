import { Bar } from "react-chartjs-2";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

const SalesBarChart = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "sales"), (snapshot) => {
      const labels = [];
      const values = [];

      snapshot.forEach((doc) => {
        labels.push(doc.data().month);
        values.push(doc.data().amount);
      });

      setData({
        labels,
        datasets: [
          {
            label: "Sales",
            data: values,
            backgroundColor: "#22c55e",
          },
        ],
      });
    });

    return () => unsub();
  }, []);

  return <Bar data={data} />;
};

export default SalesBarChart;
