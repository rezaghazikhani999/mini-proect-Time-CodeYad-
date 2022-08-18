import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

class Timer extends React.Component {
constructor(){
 super();
 this.state={
  time : new Date().toLocaleTimeString()
 } 
}
  render() {

    
    setInterval(() =>{
     this.setState({
      time:new Date().toLocaleTimeString()
     })
    },1000)


    return (
      <div>
        <h3 className="timer">it is{this.state.time}</h3>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <h1>My Timer</h1>
        <Timer />
      </div>
    );
  }
}
// const tick = () => {
  const elem = root.render(
    <div>
      <App />
    </div>
  );
// };

// setInterval(() => {
//   tick();
// }, 1000);
