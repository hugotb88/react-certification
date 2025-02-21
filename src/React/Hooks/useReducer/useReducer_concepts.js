/*
    useReducer(<reducer>, <initialState>)

    - The useReducer Hook is similar to the useState Hook.
    - It allows for custom state logic.
    - If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

    SYNTAX
    useReducer(<reducer>, <initialState>)

    The reducer function contains your custom state logic and the initialState can be a simple value but generally will contain an object.
    The useReducer Hook returns the current stateand a dispatchmethod.  

    --------------------------------------------------------------------------
    
    useReducer is a React Hook that lets you add a reducer to your component.

    --------------------------------------------------------------------------

    The useReducer hook is an alternative to the 'useState' hook 
    that is preferred when you have complex state logic. 
    It is useful when the state transitions depend on previous state values 
    or when you need to handle actions that can update the state differently.

    const [state, dispatch] = useReducer(reducer, initialState);

    reducer: A function that defines how the state should be updated based on the action. It takes two parameters: the current state and the action.
    initialState: The initial value of the state.
    State: The current state returned from the useReducer hook.
    dispatch: A function used to send an action to the reducer to update the state.
*/

// This is just the logic to keep track of the todo complete status.
// All of the logic to add, delete, and complete a todo could be contained within a single useReducer Hook by adding more actions.
import { useReducer } from "react";
import ReactDOM from "react-dom/client";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}