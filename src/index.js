import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const Footer = () => (
  <footer className="footer">
    <p class="footer-heart">
      Made with{" "}
      <g-emoji
        class="g-emoji"
        alias="heart"
        fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"
      >
        <img
          class="emoji"
          alt="heart"
          height="20"
          width="20"
          src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"
        />
      </g-emoji>{" "}
      by{" "}
      <a
        href="https://www.linkedin.com/in/pagarwal660/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pratham
      </a>
    </p>
  </footer>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer></Footer>
  </React.StrictMode>,
  document.getElementById("root")
);
