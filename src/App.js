import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Forum from './pages/Forum'
import HolidayRequest from './pages/HolidayRequest'


const App = () => {
  return (
   <BrowserRouter>
   <Sidebar>
   <Routes>
   <Route path="/" element={<Dashboard />} />
    <Route path="/dashboard"element={<Dashboard/>}/>
    <Route path="/about"element={<About/>}/>
    <Route path="/forum"element={<Forum/>}/>
    <Route path="/holidayrequest"element={<HolidayRequest/>}/>
   </Routes>
   </Sidebar>
   </BrowserRouter>
  );
};

export default App;