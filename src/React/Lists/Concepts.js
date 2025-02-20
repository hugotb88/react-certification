/*
        Lists

    In React, you will render lists with some type of loop.
    The JavaScript map() array method is generally the preferred method.
    'map' method is used commonly.

*/

function Car(props) {
    return <li>I am a {props.brand}</li>;
}

function Garage() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <ul>
                {cars.map((car) => <Car brand={car} />)}
            </ul>
        </>
    );
}


/*

    Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.
    Keys need to be unique to each sibling. But they can be duplicated globally.
    Generally, the key should be a unique ID assigned to each item. As a last resort, you can use the array index as a key.
    
*/