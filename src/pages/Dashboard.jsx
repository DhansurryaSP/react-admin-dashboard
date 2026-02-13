import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Header from "../components/Header";
import "./Dashboard.css";


function Dashboard() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [profileOpen, setProfileOpen] = useState(false);
  const [search, setSearch] = useState("");

  // Stats Data
  const stats = [
    { title: "Total Revenue", value: "48,320", change: "+12%" },
    { title: "Total Orders", value: "1,245", change: "+8%" },
    { title: "Active Users", value: "3,890", change: "+18%" },
    { title: "Conversion Rate", value: "4.8%", change: "+2%" },
  ];

  // Revenue Data
  const revenueData = [
    { name: "Jan", revenue: 4000 },
    { name: "Feb", revenue: 3000 },
    { name: "Mar", revenue: 5000 },
    { name: "Apr", revenue: 4780 },
    { name: "May", revenue: 5890 },
    { name: "Jun", revenue: 6390 },
    { name: "Jul", revenue: 7490 },
  ];

  // Orders Data
  const orderData = [
    { name: "Mon", orders: 120 },
    { name: "Tue", orders: 98 },
    { name: "Wed", orders: 150 },
    { name: "Thu", orders: 130 },
    { name: "Fri", orders: 170 },
    { name: "Sat", orders: 200 },
    { name: "Sun", orders: 160 },
  ];

  // Best Selling Products
  const products = [
    { name: "Smart Watch", sales: 1200 },
    { name: "Wireless Headphones", sales: 980 },
    { name: "Gaming Mouse", sales: 850 },
    { name: "Bluetooth Speaker", sales: 720 },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // Download Report
  const downloadReport = () => {
    const report = `
PRODUCT DASHBOARD REPORT
------------------------
Revenue: $48,320
Orders: 1,245
Users: 3,890
Conversion: 4.8%
`;
    const blob = new Blob([report], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "dashboard-report.txt";
    link.click();
  };

  return (
<div className={`dashboard ${theme}`}>
  <Header 
  toggleTheme={toggleTheme} 
  downloadReport={downloadReport} 
/>


      {/* STATS */}
      <div className="stats-grid">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="stat-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{item.title}</h3>
            <h2>{item.value}</h2>
            <p className="change">{item.change} this month</p>
          </motion.div>
        ))}
      </div>

      {/* CHARTS */}
      <div className="charts-container">

        <div className="chart-section">
          <h2>Revenue Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#6366f1"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-section">
          <h2>Weekly Orders</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={orderData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orders" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* BEST SELLING PRODUCTS */}
{/* BEST SELLING PRODUCTS */}
<div className="bottom-section">

  <div className="best-products">
    <h2>🔥 Best Selling Products</h2>

    {filteredProducts.map((item, index) => (
      <motion.div
        key={index}
        className="product-row"
        whileHover={{ scale: 1.02 }}
      >
        <div className="product-info">
          <span className="rank">#{index + 1}</span>
          <div>
            <h4>{item.name}</h4>
            <p>{item.sales} Sales</p>
          </div>
        </div>

        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${item.sales / 15}%` }}
          ></div>
        </div>
      </motion.div>
    ))}
  </div>


      {/* RECENT ACTIVITY */}
  <div className="activity-section">
    <h2>📌 Recent Activity</h2>

    <div className="activity-item">
      <span className="dot success"></span>
      <div>
        <p><strong>John</strong> placed a new order</p>
        <span>2 mins ago</span>
      </div>
    </div>

    <div className="activity-item">
      <span className="dot info"></span>
      <div>
        <p><strong>Sarah</strong> upgraded to Premium</p>
        <span>10 mins ago</span>
      </div>
    </div>

    <div className="activity-item">
      <span className="dot warning"></span>
      <div>
        <p>Product updated successfully</p>
        <span>1 hour ago</span>
      </div>
    </div>

    <div className="activity-item">
      <span className="dot primary"></span>
      <div>
        <p>New customer registered</p>
        <span>Today</span>
      </div>
    </div>

  </div>

    </div>  {/* bottom-section end */}

    </div>
  );
}

export default Dashboard;
