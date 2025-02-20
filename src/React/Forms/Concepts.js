/*
    Just like in HTML, React uses forms to allow users to interact with the web page.
*/
function MyForm() {
    return (
      <form>
        <label>Enter your name:
          <input type="text" />
        </label>
      </form>
    )
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<MyForm />);

// This will work as normal, the form will submit and the page will refresh.
// But this is generally not what we want to happen in React.
// We want to prevent this default behavior and let React control the form.

// ============================================================================== //

// ============================= Handling Forms ==================================//
/*
    Handling forms is about how you handle the data when it changes value or gets submitted.
    In HTML, form data is usually handled by the DOM.

    IN REACT, FORM DATA IS USUALLY HANDLED BY THE COMPONENTS.
    WHEN THE DATA IS HANDLED BY THE COMPONENTS, ALL THE DATA IS STORED IN THE COMPONENT STATE.

    You can control changes by adding event handlers in the onChange attribute.
    We can use the useState Hook to keep track of each inputs value and provide a "single source of truth" for the entire application.
*/

