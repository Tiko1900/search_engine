import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import './main.css';
import App from './App';
import Footer from './components/Footer';
import { ResultContextProvider } from './contexts/ResultContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ResultContextProvider>
        <Router>
            <App />
            <Footer />
        </Router>
    </ResultContextProvider>
)
