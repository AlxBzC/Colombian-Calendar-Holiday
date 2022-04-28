import React from 'react';
import Home from './components/Home';
import Calend from './components/Calend';
import Holy from './components/Holy';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBarEx from './layouts/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBarEx />}>
            <Route index element={<Home />} />
            <Route path='Calend' element={<Calend />} />
            <Route path='Holy' element={<Holy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
