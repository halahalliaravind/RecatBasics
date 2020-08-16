import React, { useState, useEffect } from "react";

function HookCounterInDoc() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect -Changes");
    document.title = `you clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        // placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>
        Click me to Show on Document title of no of times clicked is {count}.
      </button>
    </div>
  );
}

export default HookCounterInDoc;
