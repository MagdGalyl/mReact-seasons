import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

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
    state = { lat: null, errorMsg: '' };
    
    componentDidMount(){
        // Getting User GEO Location using Bellow CallBack
        window.navigator.geolocation.getCurrentPosition ( (position) => { 
            // console.log(position)
            // We Called setState
            // we ALWAYS call this.setState when we want to call/manipulate state after intialisation
            this.setState ({ lat: position.coords.latitude}) 
        
            // We didNOT call
            // this.state.lat = position.coords.latitude
        } , (err) => { 
            this.setState({errorMsg: err.message});
         });
    }

    //  componentDidUpdate(){
    //     console.log('My cmponent just updated - it ReRendered')
    // }

    // Helper Function
    renderContent(){
        //     Refrence STATE
        if (this.state.errorMsg && !this.state.lat) {
            return <div> Error: {this.state.errorMsg} </div>
        };

        if (!this.state.errorMsg && this.state.lat) {
            return <SeasonDisplay lat = {this.state.lat}/>
        };

        return (
            <div>
                <Spinner message="Please accept location request"/>
            </div>);
    
    };

    // React Require that we DEFINE render() method thats Retun JSX
    render(){
        return (
            <div> 
                {/*We call the helper function*/}
                {this.renderContent()};
            </div>
        );
    };
};

ReactDOM.render(<App />, document.querySelector("#root"));