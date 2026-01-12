function App() {
  const phoneNumber = "+237600000000"; // CHANGE to your real number

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "30px", maxWidth: "700px", margin: "auto" }}>
      <h1 style={{ color: "#0f172a" }}>Heavy Cash 💰</h1>

      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        Heavy Cash is a modern business focused on smart financial opportunities,
        digital services, and value-driven solutions. We help individuals and
        businesses grow through reliable, transparent, and innovative approaches.
      </p>

      <p style={{ fontSize: "16px", color: "#475569" }}>
        We believe in trust, speed, and results. Contact us today and let’s build
        something profitable together.
      </p>

      <div style={{ marginTop: "30px", display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {/* WhatsApp */}
        <a
          href={`https://wa.me/${phoneNumber.replace("+", "")}`}
          target="_blank"
          rel="noreferrer"
          style={buttonStyle("#25D366")}
        >
          WhatsApp
        </a>

        {/* Call */}
        <a
          href={`tel:${phoneNumber}`}
          style={buttonStyle("#2563eb")}
        >
          Call
        </a>

        {/* Contact */}
        <a
          href={`mailto:contact@heavycash.com`}
          style={buttonStyle("#0f172a")}
        >
          Contact
        </a>
      </div>
    </div>
  );
}

function buttonStyle(color) {
  return {
    backgroundColor: color,
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold"
  };
}

export default App;
