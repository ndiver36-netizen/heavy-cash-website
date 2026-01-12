function App() {
  const phoneNumber = "+237651037128"; // CHANGE this

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>Heavy Cash 💰</h1>

        <p style={textStyle}>
          Heavy Cash is a modern business focused on smart financial opportunities,
          digital services, and value-driven solutions. We help individuals and
          businesses grow through reliable, transparent, and innovative approaches.
        </p>

        <p style={subTextStyle}>
          Trust. Speed. Results.
        </p>

        <div style={buttonContainer}>
          <a
            href={`https://wa.me/${phoneNumber.replace("+", "")}`}
            target="_blank"
            rel="noreferrer"
            style={{ ...buttonStyle, backgroundColor: "#25D366" }}
          >
            📱 WhatsApp
          <651037128>

          <a
            href={`tel:${phoneNumber}`}
            style={{ ...buttonStyle, backgroundColor: "#2563eb" }}
          >
            📞 Call
          <651037128>

          <a
            href="mailto:contact@heavycash.com"
            style={{ ...buttonStyle, backgroundColor: "#0f172a" }}
          >
            ✉️ Email
          </a>
        </div>
      </div>
    </div>
  );
}

/* Styles */
const pageStyle = {
  minHeight: "100vh",
  backgroundColor: "#f1f5f9",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px"
};

const cardStyle = {
  backgroundColor: "#ffffff",
  padding: "30px",
  borderRadius: "16px",
  maxWidth: "600px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  textAlign: "center"
};

const titleStyle = {
  fontSize: "32px",
  marginBottom: "15px",
  color: "#0f172a"
};

const textStyle = {
  fontSize: "17px",
  lineHeight: "1.6",
  marginBottom: "10px"
};

const subTextStyle = {
  fontSize: "15px",
  color: "#64748b",
  marginBottom: "25px"
};

const buttonContainer = {
  display: "flex",
  gap: "12px",
  justifyContent: "center",
  flexWrap: "wrap"
};

const buttonStyle = {
  color: "#ffffff",
  padding: "12px 18px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "15px"
};

export default App;
