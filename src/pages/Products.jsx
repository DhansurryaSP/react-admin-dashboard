import React from "react";
import { motion } from "framer-motion";

function Products() {
  return (
    <div className="page-container">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        📦 Products Management
      </motion.h1>

      <div className="page-card">
        <p>Here you can manage all products.</p>
      </div>
    </div>
  );
}

export default Products;
