import { motion } from "framer-motion";

function StatCard({ title, value, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "12px",
        flex: 1,
        color: "white",
        boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
      }}
    >
      <div style={{ fontSize: "22px" }}>{icon}</div>
      <h2>{value}</h2>
      <p style={{ opacity: 0.7 }}>{title}</p>
    </motion.div>
  );
}


export default StatCard;
