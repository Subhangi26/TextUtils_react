//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import Alert from './components/Alert';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const[mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const removebg = ()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-secondary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
  }
  const toggleMode = (cls)=>{
    removebg();
    document.body.classList.add('bg-'+cls);
    // document.body.className=''
    // document.body.classList.add('bg-'+cls)
    // if(id == "one"){
    // setMode("primary");
    // //document.body.style.backgroundColor = "#042743";
    // showAlert(": Primary Mode has been enables", "Primary");
    // }else if(id == "two"){
    //   setMode("secondary");
    //   //document.body.style.backgroundColor = "#042743";
    //   showAlert(": Secondary Mode has been enables", "Secondary");
    // }else if(id == "three"){
    //   setMode("success");
    //   //document.body.style.backgroundColor = "#042743";
    //   showAlert(": success Mode has been enables", "success");
    // }else if(id == "four"){
    //   setMode("info");
    //   //document.body.style.backgroundColor = "#042743";
    //   showAlert(": info Mode has been enables", "info");
    // }else if(id == "five"){
    //   setMode("warning");
    //   //document.body.style.backgroundColor = "#042743";
    //   showAlert(": warning Mode has been enables", "warning");
    // }else if(id == "six"){
    //   setMode("danger");
    //   //document.body.style.backgroundColor = "#042743";
    //   showAlert(": danger Mode has been enables", "danger");
    // }else if(id == "seven"){
    //   setMode("light");
    //   //document.body.style.backgroundColor = "#042743";
    //   showAlert(": light Mode has been enables", "light");
    // }else if(id == "eight"){
    //   setMode("dark");
    //   //document.body.style.backgroundColor = "#042743";
    //   showAlert(": light Mode has been enables", "light");
    // }
    if(mode ==='light'){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert(": Dark Mode has been enables", "success");
      document.title = "TextUtils - Dark Mode";
    }else if (mode ==='dark'){
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert(": Light Mode has been enables", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" nav1="Home" link="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert1={alert}/>
      <div className="container my-3">
          <Routes>
              <Route exact path="/" element= {<TextBox showAlert={showAlert} heading="Try TextUtils" mode={mode}/>} />
              <Route exact path="/about" element={<About mode={mode}/>} /> 
          </Routes> 
           {/* <TextBox showAlert={showAlert} heading="Drop message" mode={mode}/> */}
      </div>
      </Router>
    </> 
  );
}

export default App;