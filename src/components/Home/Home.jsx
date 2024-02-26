import React from "react";
import "./Home.css";
import heroBg from "../../assets/heroBackground.png";

function Home() {
  return (
    <div className="hero-container" id="home">
      <img src={heroBg} alt="heroBg" />
      <div className="hero-text">
        <h1>What we Do</h1>
        <p>
          CodeChef ADGITM is a close-knit community of diligent coders who come
          together and share best practices, new coding accomplishments, and
          plenty of resources to become the best problem solvers.
        </p>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default Home;
