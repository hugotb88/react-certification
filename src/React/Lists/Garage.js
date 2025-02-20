import Car from './Car'
/*
    Component used for List Example
*/
function Garage() {
    const cars = ['Ford', 'BMW', 'Mercedes'];

    return (
        <>
            <h1>What cars live in my garage?</h1>
            <ul>
                {cars.map( (car) => <Car brand={car} />)}
            </ul>
        </>
    );
}

export default Garage;