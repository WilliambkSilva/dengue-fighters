import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './routes/Singin';
import SignUp from './routes/Singup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/singup' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


