// src/App.js
import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics';
import NotFound from './components/NotFound';
import './App.css'; 

const App = () => {
    return (
        <div>
            <nav>
                <NavLink to="/" exact activeClassName="active">Home</NavLink>
                <NavLink to="/browse" activeClassName="active">Browse Characters</NavLink>
                <NavLink to="/comics" activeClassName="active">Comics</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/browse" element={<BrowseCharacters />} />
                <Route path="/character/:id" element={<CharacterDetails />} />
                <Route path="/comics" element={<Comics />} />
                <Route path="*" element={<NotFound />} /> 
            </Routes>
        </div>
    );
};

export default App;