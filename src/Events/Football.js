/*
    Example of Event in React
*/
function Football(){
    const shoot = () => {
        alert("Al angulo no vale papaw");
    }

    return (
        <button onClick={shoot}> Take the shoot </button>
    );
}

export default Football;
