import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [isClicked, toggle] = useState(false);

  return (
    <div id="main">
      <button id="click" onClick={() => toggle(!isClicked)}>
        Add Paragraph
      </button>
      {isClicked ? (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      ) : null}
    </div>
  );
}

export default App;
