import React from 'react';
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Content from './Content/Content'
import NavBar from './nav/Nav'
import Footer from './nav/Footer'
import {Container} from 'reactstrap'

function App() {
  return (
    <div className='App'>
      <Router>
        <header className="headerImage">
          <NavBar />
        </header>
        <main>
          <Content />
      </main>
      {/* <footer className="footer">
        <Footer />
      </footer> */}
    </Router>
    </div>
  );
}

export default App;
