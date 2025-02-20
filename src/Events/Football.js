/*
    Example of Event in React
    Passing arguments to an event handler using an arrow function
*/
function Football(){
    const shoot = (a) => {
        alert(a);
    }

    return (
        <button onClick={() => shoot("Gol perros, goooool")}> Take the shoot </button>
    );
}

export default Football;
