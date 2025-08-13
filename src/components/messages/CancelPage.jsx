// src/components/CancelPage.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function CancelPage() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        maxWidth: "600px",
        margin: "50px auto",
      }}
    >
      <h2 style={{ color: "#dc3545", marginBottom: "20px" }}>
        Payment Canceled 😔
      </h2>
      <p style={{ fontSize: "1.1em", lineHeight: "1.6" }}>
        Your payment was not completed.
      </p>
      <p style={{ fontSize: "1.1em", lineHeight: "1.6" }}>
        If you wish to complete the purchase, please try again.
      </p>
      <div style={{ marginTop: "30px" }}>
        <Link
          to="/"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#6c757d",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            transition: "background-color 0.3s ease",
          }}
        >
          Back to Product Page
        </Link>
      </div>
    </div>
  );
}
