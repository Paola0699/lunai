// SignalButton.jsx
import React from "react";

// SVG del logo de Signal
const SignalLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M12 0C5.373 0 0 4.93 0 11c0 3.064 1.564 5.828 4 7.688V24l4.5-2c.876.25 1.804.375 2.5.375 6.627 0 12-4.93 12-11S18.627 0 12 0zm0 19.125c-.689 0-1.425-.125-2.125-.375l-.375-.125-2.875 1.25.688-2.5-.25-.375c-2.125-1.438-3.375-3.5-3.375-5.5 0-4.062 4.687-7.375 10.375-7.375 5.688 0 10.375 3.313 10.375 7.375s-4.687 7.375-10.375 7.375z" />
  </svg>
);

const SignalButton = ({ phoneNumber }) => {
  const handleClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // En móviles, intenta abrir la app de Signal con un mensaje
      const message = encodeURIComponent("Hola desde mi app");
      window.location.href = `sgnl://send?text=${message}`;
    } else {
      // En escritorio, abre Signal Web directo al número
      window.open(`https://signal.me/#p=${phoneNumber}`, "_blank");
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#3A76F0",
        border: "none",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        zIndex: 1000,
      }}
    >
      <SignalLogo />
    </button>
  );
};

export default SignalButton;
