import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <>
        <Navbar />
        <Main />
        <Section />
        <Footer />
      </>
    </div>
  );
}

export default App;
