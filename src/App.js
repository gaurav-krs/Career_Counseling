import React from 'react'
import { Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Routes>
        <Route path = '/about' element={<About/>}/>
        <Route path = '/contact' element={<Contact/>}/>
      </Routes>
      {console.log(About)}
    </div>
  );
}

export default App