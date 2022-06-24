import './css/App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Shop from './views/Shop';
import Home from './views/Home';
import Protoss from './views/Protoss'
import Cart from './views/Cart';




function App() {
const[students,setStudents]=useState(['Sven','Donovan','Tyler','Craig','Kristen','Nadia'])

const shuffleStudents = ()=> {
  console.log('shuffling...')
  let tempStudents=[...students]
  tempStudents.sort(()=> Math.random() -0.5);
  setStudents(tempStudents);
}
return (
    <React.Fragment>
      <Navbar />
      
      <Routes>
        <Route children path='/' element={<Home students={students} shuffleStudents={shuffleStudents} />} />
        <Route children path='/shop' element={<Shop />} />
        <Route children path='/protoss' element={<Protoss />} />
        <Route children path='/cart' element={<Cart />} />

      </Routes>
    </React.Fragment>
  );
}

export default App;
