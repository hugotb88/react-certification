/*
    useReducer example 

    ToDos list, just handling the status of the ToDo list
*/
import { useReducer } from "react";
import ReactDOM from "react-dom/client";

//Initial state of the ToDo list
const initialTodos = [
    {
        id:1,
        title:"To Do 1",
        complete: false
    },
    {
        id:2,
        title:"To Do 2",
        complete: false
    }
];

//reducer function that contains the state logic
const reducer = (state, action) => {
    switch(action.type) {
        case "COMPLETE":
            return state.map( (todo) => {
                if(todo.id === action.id){
                    return {...todo, complete: !todo.complete};
                }else{
                    return todo;
                }
            });
        default:
            return state;
    }
}

function UseReducer(){
    //reducer as custom logic function, initialTodos as initial values of todos list
    //The useReducer Hook returns the current state (todos) and a dispatch (dispatch) method.
    const[todos, dispatch] = useReducer(reducer, initialTodos); 

    // This function is triggered when we check or uncheck the box 
    //  executes the dispath method sending COMPLETE in the type field that will be taken by the reducer and the todo id 
    const handleComplete = (todo) => {
        dispatch({ type: "COMPLETE", id: todo.id});
    };

    return(
        <>
            {todos.map( (todo) => (
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
    )
}

export default UseReducer;