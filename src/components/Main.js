import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from '../redux/store';
import Home from './Home';
import Login from './Login';

function Main() {
  return (
    <Provider store={Store}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Provider>
  );
}

export default Main;
