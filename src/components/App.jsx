import React from "react";

function App() {
  let [count, setcount] = React.useState(0);

  function increase() {
    setcount(count * 142);
  }

  function decease() {
    setcount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decease}>-</button>
    </div>
  );
}

export default App;
