const Header = () => (
    <header style={{ backgroundColor: "#282c34", color: "white", padding: "2rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        {/* Text Left Side */}
        <div style={{ flex: 1, minWidth: "250px", textAlign: "center" }}>
          <h1>Shashank Reddy Vazrala</h1>
          <p>Software Developer | React | Python | Full-Stack | C# | .NET</p>
          <p>
            <a
              href="https://github.com/sreddyvazrala"
              style={{ color: "#61dafb", textDecoration: "none" }}
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href="mailto:shashankvazrala@gmail.com"
              style={{ color: "#61dafb", textDecoration: "none" }}
            >
              Email
            </a>{" "}
            |{" "}
            <a
              href="https://www.linkedin.com/in/shashank-reddy-8692931a2/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#61dafb", textDecoration: "none" }}
            >
              LinkedIn
            </a>
          </p>
          <p style={{ marginTop: "1rem" }}>
            <a
              href="/resume.pdf"
              download
              style={{
                backgroundColor: "#61dafb",
                color: "#000",
                padding: "10px 20px",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "bold"
              }}
            >
              ⬇️ Download Resume
            </a>
          </p>
        </div>
  
        {/* Profile Image Right Side */}
        <div style={{ marginLeft: "-40px", marginRight: "20px" }}>
          <img
            src="/profile.jpg"
            alt="Profile"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #61dafb"
            }}
          />
        </div>
      </div>
    </header>
  );
  
  export default Header;
  