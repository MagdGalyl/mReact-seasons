
class Clock extends React.Component {
    // state = { time: '' };
    // Can add start time instead of starting blank
    state = { time: new Date().toLocaleTimeString() };

 componentDidMount(){
     const tim = new Date().toLocaleTimeString()

     setInterval(()=> { 
         this.setState ({time : tim}) 
     }, 1000)
 }

 render(){
     return (
         <div className = "time"> 
             The Time is: {this.state.time}
         </div>
     );
 };
};