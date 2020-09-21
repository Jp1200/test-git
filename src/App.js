import React from "react";
import AsyncHooks from "./asyncLoad";
import "./App.css";

function App() {
  return (
    <div className="info">
      <h1>
        <i className="fab fa-twitter twitter-icon"></i>Tweet Source Fact Check
        Helper
      </h1>
      <header>
        Copy and paste Tweets in the Search Bar to find related articles
      </header>
      <header>Press Enter to Search</header>
      <AsyncHooks />
    </div>
  );
}

export default App;
