import SalesLineChart from "./SalesLineChart";
import SalesBarChart from "./SalesBarChart";
import SalesPieChart from "./SalesPieChart";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1> Firebase Dashboard</h1>

      <div className="grid">
        <div className="card large">
          <SalesLineChart />
        </div>

        <div className="card">
          <SalesBarChart />
        </div>

        <div className="card">
          <SalesPieChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
