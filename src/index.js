import React from 'react'
import ReactDOM from 'react-dom'


if (module.hot) {
    module.hot.accept();
  }

  
const App = () =>{
    // Getting User GEO Location using Bellow CallBack
    window.navigator.geolocation.getCurrentPosition((position) => console.log(position), (err) => console.log(err));

    return (
        <div>Latitude: </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
