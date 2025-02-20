import CarKeyExample from './CarKeyExample'

/*
    Component used for React Key value example
*/
function Garage() {
    const cars = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Mercedes'},
    ];

    return(
        <>
            <h1>What cars are in the Garage?</h1>
            <ul>
                { cars.map( (car) => <CarKeyExample key={car.id} brand={car.brand} />) }
            </ul>
        </>
    )
}

export default Garage;