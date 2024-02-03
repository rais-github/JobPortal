import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#212121",
        color: "#ffffff",
        padding: "20px 0",
        position: "relative",
        bottom: 0,
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "1rem",
        }}
      >
        <div style={{ flex: 1 }}>
          <p>
            &copy; {new Date().getFullYear()} Job Portal. All rights reserved.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <p style={{ marginRight: "10px" }}>Connect with us:</p>
          <div style={{ marginLeft: "10px" }}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <GitHubIcon></GitHubIcon>{" "}
            </a>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
