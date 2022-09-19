import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css'
import { Home, Dashboard, SignIn } from './components';
import reportWebVitals from './reportWebVitals';
import { format } from 'path';

const root = ReactDom.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path='/' element={<Home title={'Pokemon_inventory'}/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/signin' element={<SignIn/>}/>
            </Routes>
        </Router>
    </React.StrictMode>
);


reportWebVitals()