/*
    Just like HTML DOM events, React can perform actions based on user events.
    React has the same events as HTML: click, change, mouseover etc.

    - Events are written in Camel Case sintax
        'onClick' instead of 'onclick'
    
    - Event Handlers are written inside curly braces
        'onClick = {shoot}' instead of ' onclick = "shoot()" '

*/

// ======= Adding Events ======== //

// React
<button onClick={shoot}> Take the shoot </button>

// Same in HTML
<button onclick="shoot()"> Take the shoot </button>


