import React from 'react'
import ReactDOM from 'react-dom'


if (module.hot) {
    module.hot.accept();
  }

// const App = () =>{
//     // Getting User GEO Location using Bellow CallBack
//     window.navigator.geolocation.getCurrentPosition((position) => console.log(position), (err) => console.log(err));

//     return (
//         <div>Latitude: </div>
//     );
// };


class App extends React.Component {
    // JS Requirement not React 
    // we use it to intialise state when our component is first created
    // As its THE FIRST function that will be run in the class b4 anything else
    constructor(props){
        // super must be called to Refrence React.Component else we get an error because we overide React.Component
        super(props);

        // Intialising State
        // This is the ONLY TIME we do direct assignment
        // to this.state
        this.state = { lat: null };

        // Getting User GEO Location using Bellow CallBack
        window.navigator.geolocation.getCurrentPosition ( (position) => { 
            // console.log(position)
            // We Called setState
            // we ALWAYS call this.setState when we want to call/manipulate state after intialisation
            this.setState ({ lat: position.coords.latitude}) 
        
            // We didNOT call
            // this.state.lat = position.coords.latitude
        } , (err) => console.log(err));
    }

    // React Require that we DEFINE render() method thats Retun JSX
    render(){


        return (
            // Refrence STATE
            <div>Latitude: {this.state.lat} </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
