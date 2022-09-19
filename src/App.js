// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React,{useState} from 'react';

function App() {
  const [alert,setAlert]=useState(null);

  const showAlert= (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode =()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor ='#171542';
      document.body.style.color ='white';
      showAlert('Dark mode enabled','success')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      document.body.style.color ='black';
      showAlert('Light mode enabled','success')
    }
  }
  const [mode, setMode] = useState('light');
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <TextForm heading="Enter Your Text Below" mode={mode} showAlert={showAlert}/>
    </>
  );
}
export default App;
