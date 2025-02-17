import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Home from './crudcomponents/Home';
import Create from './crudcomponents/Create';
import Edit from './crudcomponents/Edit';
import {ToastContainer} from "react-toastify";
const App = () => {
  return (
    <BrowserRouter>
    <ToastContainer/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/edit/:userId' element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App