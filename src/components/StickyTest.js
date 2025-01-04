// src/components/StickyTest.js
import React from "react";

const StickyTest = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px",
        backgroundColor: "#34b7f1",
        color: "#fff",
        borderRadius: "50%",
        zIndex: 9999,
      }}
    >
      Test Button
    </div>
  );
};

export default StickyTest;
