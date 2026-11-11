import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaBox,
  FaUsers,
  FaChartBar,
  FaFileAlt,
  FaCog,
  FaBell,
  FaHeadset,
  FaBars,
} from "react-icons/fa";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768
  );

  const menuItems = [
    { name: "Dashboard", path: "/", icon: <FaHome /> },
    { name: "Products", path: "/products", icon: <FaBox /> },
    { name: "Users", path: "/users", icon: <FaUsers /> },
    { name: "Analytics", path: "/analytics", icon: <FaChartBar /> },
    { name: "Reports", path: "/reports", icon: <FaFileAlt /> },
    { name: "Notifications", path: "/notifications", icon: <FaBell /> },
    { name: "Settings", path: "/settings", icon: <FaCog /> },
    { name: "Support", path: "/support", icon: <FaHeadset /> },
  ];

  return (
    <motion.div
      animate={{ width: collapsed ? 80 : 240 }}
      className="sidebar"
    >
      <div className="sidebar-top">
        <button onClick={() => setCollapsed(!collapsed)} className="collapse-btn">
          <FaBars />
        </button>
        {!collapsed && <h2 className="logo">Admin Dashboard</h2>}
      </div>

      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "active nav-item" : "nav-item"
              }
            >
              <span className="icon">{item.icon}</span>
              {!collapsed && <span>{item.name}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Sidebar;
