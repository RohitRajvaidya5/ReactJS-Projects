import logo from './logo.svg';
import './App.css';
import './webfont folder/font.css';

function functionClock(){

  let newDate = new Date();
  let dHour = newDate.getHours();
  let dMinute = newDate.getMinutes();
  let dSecond = newDate.getSeconds();

  // select class hour to add hour digits 
  document.getElementById("hour").innerHTML=(dHour);

   // select class minute to add minute digits
  document.getElementById("minute").innerHTML=(dMinute);

   // select class second to add second digits
  document.getElementById("second").innerHTML=("" + dSecond + "");

  if (dHour > 12){
      document.getElementById("am").innerHTML = ("pm");
  }
  else{
      document.getElementById("am").innerHTML = ("am");
  }
}
setInterval(functionClock,1000);

function App() {
  return (
    <>
    <h1>Digital Clock</h1>

    <div className="container">
      <span className="clock1" id="hour"></span><span className="clock1" id="minute"></span><span className="clock1" id="second"></span><span className="clock2" id="am"></span>
    </div>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Hello World
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
