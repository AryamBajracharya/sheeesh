import React from 'react';
import Navbar from './Navbar';  
import './App.css';  

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home" className="section">
        <h2>Home</h2>
        <p>Welcome to the Home section.</p>
      </section>
      <section id="about" className="section">
        <h2>About</h2>
        <p>Welcome to the About section.</p>
      </section>
      <section id="services" className="section">
        <h2>Services</h2>
        <p>Welcome to the Services section.</p>
      </section>
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Welcome to the Contact section.</p>
      </section>
    </div>
  );
}

export default App;
