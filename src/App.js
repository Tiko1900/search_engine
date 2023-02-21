import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home';
import Results from './components/Results';

const App = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route exact path="/" element={<Home />} />
        {['/search', '/images', '/news', '/videos'].map((path) => (
          <Route key={path} path={path} element={<Results />} />
        ))}
      </Routes>
    </div>
  )
}

export default App;