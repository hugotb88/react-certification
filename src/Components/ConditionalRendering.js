/*
    If - else
    
    Having
    function MissedGoal() {
        return <h1>MISSED!</h1>;
    }

    function MadeGoal() {
        return <h1>Goal!</h1>;
    } 
*/
function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
        return <MadeGoal />;
    }
    return <MissedGoal />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);



// Logical && Operator
// If cars.length > 0 is equates to true, the expression after && will render.
function Garage(props) {
    const cars = props.cars;
    return (
        <>
            <h1>Garage</h1>
            {cars.length > 0 &&
                <h2>
                    You have {cars.length} cars in your garage.
                </h2>
            }
        </>
    );
}

const cars = ['Ford', 'BMW', 'Audi'];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage cars={cars} />);


// Ternary Operator
function Goal(props) {
    const isGoal = props.isGoal;
    return (
        <>
            {isGoal ? <MadeGoal /> : <MissedGoal />}
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);