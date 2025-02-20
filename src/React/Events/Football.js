/*
    Example of Event in React
    Passing arguments to an event handler using an arrow function

    The Event object
*/
function Football(){
    const shoot = (a, b) => {
        alert(b.type);
        /*
            'b' represents the React event that triggered the funciton.
            In this case the 'click' event
        */
    }

    return (
        <button onClick={(event) => shoot("Gol perros, goooool", event)}> Take the shoot </button>
    );
}

export default Football;
