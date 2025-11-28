import React from "react";
import { observer } from "mobx-react-lite";

const Counter = observer(() => {
  return (
    <div>
      <h1>Count: {counterStore.count}</h1>
      <button onClick={counterStore.increment}>Increment</button>
      <button onClick={counterStore.decrement}>Decrement</button>
      <button onClick={counterStore.reset}>Reset</button>
    </div>
  );
});

export default Counter;
