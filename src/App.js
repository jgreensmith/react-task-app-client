import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from "./components/Auth";
import Home from './components/Home';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
