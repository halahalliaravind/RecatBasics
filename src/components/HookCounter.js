import React, { useState } from "react";

function HookCounter() {
  //Hooks to handle state in functional components
  let initialCount = 0;
  const [counter, setCounter] = useState(initialCount)

  //   increment by five everytime logic
  const incrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCounter((prevCount) => prevCount + 1);
    }
  }

  //   User view code
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => setCounter(initialCount)}>Reset</button>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={incrementByFive}>IncrementByFive</button>
    </div>
  );
}

export default HookCounter;
