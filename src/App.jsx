import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");
  const phoneNumber = "+237651037128"; // CHANGE THIS

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        {/* Navigation */}
        <nav style={navStyle}>
          <button onClick={() => setPage("home")} style={navBtn}>Home</button>
          <button onClick={() => setPage("services")} style={navBtn}>Services</button>
          <button onClick={() => setPage("contact")} style={navBtn}>Contact</button>
        </nav>

        {page === "home" && (
          <>
            <h1 style={titleStyle}>Heavy Cash 💰</h1>
            <p style={textStyle}>
              Heavy Cash is a modern business focused on smart financial opportunities,
              digital services, and value-driven solutions.
            </p>

            <div style={buttonContainer}>
              <a
                href={`https://wa.me/${phoneNumber.replace("+", "")}`}
                target="_blank"
                rel="noreferrer"
                style={{ ...buttonStyle, backgroundColor: "#25D366" }}
              >
                📱 WhatsApp
              </a>

              <a
                href={`tel:${phoneNumber}`}
                style={{ ...buttonStyle, backgroundColor: "#2563eb" }}
              >
                📞 Call
              <651037128>
            </div>
          </>
        )}

        {page === "services" && (
          <>
            <h2>Our Services</h2>
            <ul style={listStyle}>
              <li>💼 Financial Consulting</li>
              <li>📊 Investment Guidance</li>
              <li>💻 Digital Business Solutions</li>
              <li>🤝 Business Partnerships</li>
            </ul>
          </>
        )}

        {page === "contact" && (
          <>
            <h2>Contact Us</h2>
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              style={formStyle}
            >
              <input name="name" placeholder="Your Name" required style={inputStyle} />
              <input name="email" type="email" placeholder="Your Email" required style={inputStyle} />
              <textarea name="message" rows="4" placeholder="Message" required style={inputStyle}></textarea>
              <button type="submit" style={submitStyle}>Send Message</button>
            </form>
          </>
        )}
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
  backgroundColor: "#fff",
  padding: "30px",
  borderRadius: "16px",
  maxWidth: "650px",
  width: "100%",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  textAlign: "center"
};

const navStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  marginBottom: "20px"
};

const navBtn = {
  border: "none",
  background: "#e2e8f0",
  padding: "8px 14px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold"
};

const titleStyle = {
  fontSize: "32px",
  marginBottom: "15px"
};

const textStyle = {
  fontSize: "16px",
  marginBottom: "20px"
};

const buttonContainer = {
  display: "flex",
  gap: "12px",
  justifyContent: "center"
};

const buttonStyle = {
  color: "#fff",
  padding: "12px 18px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "bold"
};

const listStyle = {
  textAlign: "left",
  marginTop: "15px"
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px"
};

const inputStyle = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #cbd5f5"
};

const submitStyle = {
  padding: "12px",
  backgroundColor: "#0f172a",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold"
};

export default App;
