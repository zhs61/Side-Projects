import React from "react";
import Header from "./Header/Header.js";
import ThoughtTracker from "./Thought-tracker/Thought_tracker";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="ThoughtTracker">
        <ThoughtTracker />
      </div>
    </div>
  );
}

export default App;
