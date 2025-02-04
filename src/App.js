
import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Sidebar1 from './Sidebar1'
import Sidebar2 from './Sidebar2'
import Footer from './Footer'
const App = () => {

 return (
    <div className="App">
      <Navbar/>
      <Main/>
      <div className="sidebar">
        <Sidebar1/>
        <Sidebar2/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
