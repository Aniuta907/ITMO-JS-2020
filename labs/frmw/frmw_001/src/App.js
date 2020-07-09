import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const updateTextValue = e => setText(e.target.value);
  return (
    <div className="App">
      <input value={text} onChange={updateTextValue}/>
      <input value={text} onChange={updateTextValue}/>
    </div>
  );
}

export default App;
