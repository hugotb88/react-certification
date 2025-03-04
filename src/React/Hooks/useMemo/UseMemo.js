/* 
    PROBLEM ->  
    A poor performing function. The 'expensiveCalculation' function runs on every render

    SOLUTION -> 
    To fix this performance issue, we can use the useMemo Hook to memoize the expensiveCalculation function. This will cause the function to only run when needed.
    We can wrap the expensive function call with useMemo.
    The useMemoHook accepts a second parameter to declare dependencies. The expensive function will only run when its dependencies have changed.
    In the following example, the expensive function will only run when count is changed and not when todo's are added.
*/
import { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]); // Here is the fix using useMemo

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default UseMemo;