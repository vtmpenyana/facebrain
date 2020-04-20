import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import ImageLinkInput from './components/ImageLinkInput/ImageLinkInput';
import FaceDetection from './components/FaceDetection/FaceDetection';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


const app = new Clarifai.App({
  apiKey: 'fdf8d94335e84e229b8e2fefea5d5cbb'
});

const params={
                particles: {
                  line_linked: {
                    shadow: {
                      enable: true,
                      color: "#3CA9D1"
                    }
                  },
                  "number": {
              "value": 50
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
class App extends React.Component {

  constructor(){
    super();
    this.state = {
      linkInput: '',
      urlImage: ''
    }
  }

  onInputChange = (event) =>{
    this.setState({linkInput: event.target.value})
  }

  onImageSubmit = () => {
    this.setState({urlImage: this.state.linkInput});
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.linkInput).then(
    function(response) {
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      this.setState({urlImage: this.state.linkInput});
    },
    function(err) {
      // there was an error
    }
  );
  }

  render(){
    return (
      <div className="App">
        <Particles className='particles' params={params} />
        <Navigation />
        <Rank />
        <ImageLinkInput onImageSubmit={this.onImageSubmit} onInputChange={this.onInputChange} />
        <FaceDetection urlImage={this.state.urlImage}/>
      </div>
    );
  }
}

export default App;
