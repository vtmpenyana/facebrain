import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import ImageLinkInput from './components/ImageLinkInput/ImageLinkInput';
import Particles from 'react-particles-js';

const params={
                particles: {
                  line_linked: {
                    shadow: {
                      enable: true,
                      color: "#3CA9D1"
                    }
                  },
                  "number": {
              "value": 90
                },
                "size": {
                    "value": 3
                }
                },
                "interactivity": {
                  "events": {
                      "onhover": {
                          "enable": true,
                          "mode": "repulse"
                      }
                  }
              }
              }
function App() {
  return (
    <div className="App">
      <Particles className='particles' params={params} />
      <Navigation />
      <Rank />
      <ImageLinkInput />
      {/*      <Detection />*/}
    </div>
  );
}

export default App;
