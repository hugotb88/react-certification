/*
    CSS with a JavaScript Object example
*/
const CSSJavaScriptObject = () => {
    const myStyle = {
        color: "white",
        backgroundColor:"DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
    };

    return (
        <>
            <h1 style={ myStyle }> Header with CSS as JavaScript Object </h1>
            <p> Add a little Style! </p>
        </>
    );
}

export {CSSJavaScriptObject};