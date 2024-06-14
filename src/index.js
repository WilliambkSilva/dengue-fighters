import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Login from './routes/Login';
import SignUp from './routes/Singup';
import Home from './routes/Home'
import isAuthenticated from './auth'
import CreateEventPage from './routes/CreateEventPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={isAuthenticated() ? <Navigate to="/home" replace/> : <Login/>}/>
        <Route path='/singup' element={isAuthenticated() ? <Navigate to="/home" replace/> :<SignUp/>}/>
        <Route path='/home' element={isAuthenticated() ? <Home/> : <Navigate to="/" replace />} />
        <Route path='/create-event' element={isAuthenticated() ? <CreateEventPage/> : <Navigate to="/" replace />} />
        {/* <Route path='/*' element={<Navigate to="/"/>}/> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


