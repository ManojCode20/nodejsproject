import React, { Component } from 'react';
import Header from './shared/header';
import Footer from './shared/footer';
import Container from './components/container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* Header component */}
        <Header />
        <div className="container">
          <div className="row mt-4">
            {/* Main content and controller of burger */}
            <Container/>
          </div>
        </div>
        {/* Footer component */}
        <Footer />
      </div>
    );
  }
}

export default App;
