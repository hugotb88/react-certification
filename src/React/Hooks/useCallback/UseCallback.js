import { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  /* Error 
     Try running this and click the count increment button.
     You will notice that the Todos component re-renders even when the todos do not change.
  */
  // const addTodo = () => {
  //   setTodos((t) => [...t, "New Todo"]);
  // };

  //Solution with Callback to prevent the re-render when addTodo
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

export default UseCallback;