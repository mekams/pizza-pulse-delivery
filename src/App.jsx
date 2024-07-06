import Layout from './components/Layout.jsx';
import React, { useState, useEffect } from 'react';
import Loader from './components/Loader.jsx';



function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or any async operation
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);  // Adjust the timeout as needed
  }, []);
  return (
    <>
    <div className="App">
      {isLoading ? <Loader/> :<Layout/>}
    </div> 
    </>
  
  )
  ;
}

export default App;
