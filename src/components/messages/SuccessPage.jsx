// src/components/SuccessPage.jsx
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function SuccessPage() {
  const location = useLocation();
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    // Stripe Checkout adds the session_id to the URL as a query parameter
    const params = new URLSearchParams(location.search);
    const id = params.get("session_id");
    if (id) {
      setSessionId(id);
      // In a production environment, you should make a backend call here to:
      // 1. Verify the payment status using the sessionId with the Stripe API
      // 2. Mark the order as paid in your database
      // This is crucial for security and reliability in production.
      console.log("Stripe Session ID:", id);
    }
  }, [location]);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        maxWidth: "80%",
        margin: "50px auto",
      }}
    >
      <h2
        className="section-title mb-40 mb-sm-30"
        style={{ color: "rgb(47, 58, 89)", marginBottom: "20px" }}
      >
        Payment Successful!
      </h2>
      <p style={{ fontSize: "1.1em", lineHeight: "1.6" }}>
        Thank you for your purchase. Your payment has been processed
        successfully.
      </p>
      <p style={{ fontSize: "1.1em", lineHeight: "1.6" }}>
        You will receive a confirmation email shortly with your order details.
      </p>
      {sessionId && (
        <p style={{ fontSize: "0.9em", color: "#666" }}>
          Transaction Reference: <strong>{sessionId}</strong>
        </p>
      )}
      <div style={{ marginTop: "30px" }}>
        <Link
          className="btn btn-mod btn-medium btn-circle text-nowrap"
          to="/"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            color: "white",
            transition: "background-color 0.3s ease",
            backgroundColor: "rgb(47, 58, 89)",
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
