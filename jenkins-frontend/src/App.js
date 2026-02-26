import React from "react";

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>
          Hello Jenkins
        </h1>
        <h2 style={styles.subheading}>
          from Allu Pranathi
        </h2>
        <p style={styles.roll}>
          2023BCD0065
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2, #ff6a00)",
    backgroundSize: "400% 400%",
    animation: "gradientAnimation 8s ease infinite",
    fontFamily: "Arial, sans-serif"
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "40px 60px",
    borderRadius: "20px",
    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
    textAlign: "center"
  },
  heading: {
    color: "#d33833",
    fontSize: "3rem",
    marginBottom: "10px"
  },
  subheading: {
    color: "#333",
    fontSize: "2rem",
    marginBottom: "5px"
  },
  roll: {
    fontSize: "1.2rem",
    color: "#555"
  }
};

export default App;