/*
        Lifecycle of Components

    - Three main phases are: 
        Mounting 
        Updating
        Unmounting
*/

// ---------- Mounting ------------ //
/* 
Mounting means putting elements into the DOM.

React has four built-in methods that gets called, in this order, when mounting a component:

    constructor()                  
        - Method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values

    getDerivedStateFromProps()
        - The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.
        - This is the natural place to set the state object based on the initial props.
        - It takes state as an argument, and returns an object with changes to the state.

    render()
        - The render() method is required, and is the method that actually outputs the HTML to the DOM.

    componentDidMount()
        - The componentDidMount() method is called after the component is rendered.
        - This is where you run statements that requires that the component is already placed in the DOM.

The render() method is required and will always be called, the others are optional and will be called if you define them.
*/


// Examples
class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    render() {
      return (
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      );
    }
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Header />);


  // ------------------------------------------------------ //

  class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    static getDerivedStateFromProps(props, state) {  // Here, this happens just before we render
      return {favoritecolor: props.favcol };
    }
    render() {
      return (
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      );
    }
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Header favcol="yellow"/>);

  // ------------------------------------------------------ //

  class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({favoritecolor: "yellow"}) // Here, this happens after we render
      }, 1000)
    }
    render() {
      return (
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      );
    }
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Header />);
  
  