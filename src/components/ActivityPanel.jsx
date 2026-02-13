import { motion } from "framer-motion";

function ActivityPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "12px",
        color: "white",
      }}
    >
      <h3>Recent Activity</h3>
      <ul style={{ lineHeight: "2" }}>
        <li>🛒 New order placed</li>
        <li>👤 New user registered</li>
        <li>📦 Product updated</li>
        <li>💰 Payment received</li>
      </ul>
    </motion.div>
  );
}

export default ActivityPanel;
