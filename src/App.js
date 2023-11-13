import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';


function App() {
  const [loader, setLoader] = useState(true);

 useEffect(()=>{
  setTimeout(()=>{
    <p>Hello Moto</p>
    setLoader(false);
  },2000)
 });

  return (
   <>
  
  {
    !loader && 
    <div>
      <Header></Header>
   <Navbar></Navbar>

    </div>
  }
  {
    loader &&
    <div>
      Sex sex sex
    </div>
  }
   
   </>
  );
}

export default App;
