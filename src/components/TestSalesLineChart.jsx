import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const FetchSales = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "sales"));
      const salesData = snapshot.docs.map(doc => doc.data());
      setSales(salesData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h3>Sales Data from Firebase</h3>
      <pre>{JSON.stringify(sales, null, 2)}</pre>
    </div>
  );
};

export default FetchSales;
