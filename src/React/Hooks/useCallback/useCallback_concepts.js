/*

    Returns a memoized callback function
        - 'Think of memoization as caching a value so that it does not need to be recalculated.'

    This allows us to isolate resource intensive functions so that they will not automatically run on every render.
    The useCallback Hook only runs when one of its dependencies update.
    This can improve performance.

    The 'useCallback' and useMemo Hooks are similar. 
    The main difference is that 'useMemo' returns a memoized VALUE and useCallback returns a memoized FUNCTION. 
    You can learn more about useMemo in the useMemo chapter.

    One reason to use 'useCallback' is to prevent a component from re-rendering UNLESS ITS PROPS HAVE CHANGED.

*/

// ============= Example ================ //
// In this example, you might think that the Todos component will not re-render unless the todos change 
// index.js
import { useState } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// Todos.js
import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);

/*

    You will notice that the Todos component re-renders even when the todos do not change.
    Why does this not work? We are using memo, so the Todos component should not re-render since neither the todos state nor the 'addTodo' function are changing when the count is incremented.
    This is because of something called "referential equality".
    Every time a component re-renders, its functions get recreated. Because of this, the 'addTodo' function has actually changed.

*/

// ========= Solution with useCallback ============== //
// To fix this, we can use the useCallback hook to prevent the function from being recreated unless necessary.
// Use the useCallback Hook to prevent the Todos component from re-rendering needlessly

// index.js
import { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//Todos.js
import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);