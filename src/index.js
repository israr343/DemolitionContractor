import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Top_bar from './common/Top-bar';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './components/Home';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Top_bar />
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
