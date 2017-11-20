import React, { Component } from 'react';
import './App.css';

// components
import GalleryView from './gallery/GalleryView.container'

class App extends Component {
  render() {
    return (
        <div>
          <div className="header"></div>
          <div className="body">
            <GalleryView/>
          </div>
        </div>
    );
  }
}

export default App;
