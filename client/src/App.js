import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header'
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
import Profile from './pages/Profile';


function App() {
  return (
     <BrowserRouter>
     <Header />
     <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/about' element={< About />} />
          <Route path='/sign-in' element={< SignIn />} />
          <Route path='/sign-out' element={< SignOut />} />
          <Route path='/profile' element={< Profile />} />
     </Routes>
     
     </BrowserRouter>
  );
}

export default App;
