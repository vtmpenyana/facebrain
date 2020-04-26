import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import ImageLinkInput from './components/ImageLinkInput/ImageLinkInput';
import Signin from './components/Signin/Signin';
import FaceDetection from './components/FaceDetection/FaceDetection';
import Register from './components/Register/Register';
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
      urlImage: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        email: '',
        joined: '',
        count: '',
        name: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      email: data.email,
      joined: data.joined,
      count: data.count,
      name: data.name
    }})
  }

  onInputChange = (event) =>{
    this.setState({linkInput: event.target.value})
  }

  calculateFaceLocation = (data) => {
    const ClarifaiBox = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.querySelector("#linkImage")
    const imageWidth = Number(image.width);
    const imageHeight = Number(image.height);
    return {
      top: ClarifaiBox.top_row * imageHeight,
      left: ClarifaiBox.left_col * imageWidth,
      right: imageWidth - (ClarifaiBox.right_col * imageWidth),
      bottom: imageHeight - (ClarifaiBox.bottom_row * imageHeight) 
    }
  }

  drawBox = (box) => {
    this.setState({box});
  }


  routeChange = (route) => {
    this.setState({route})
    route === 'home' ? (this.setState({isSignedIn: true})) : (this.setState({isSignedIn: false}));
  }

  onImageSubmit = () => {
    this.setState({urlImage: this.state.linkInput});
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.linkInput)
    .then(response => {
      this.drawBox(this.calculateFaceLocation(response));
      if(response){
        fetch('http://localhost:3000/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
        .then(resp => resp.json())
        .then(data => {
          if(data){
            this.setState({user: Object.assign(this.state.user, {count: data})});
          }
        });
      }
    })
    .catch(err => console.log(err));
  }

  render(){
    return (
      <div className="App">
        <Particles className='particles' params={params} />
        <Navigation routeChange={this.routeChange} isSignedIn={this.state.isSignedIn}/>
        {
          this.state.route === 'signin' ?
          <Signin loadUser={this.loadUser} routeChange={this.routeChange}/> :
          <div>
            {
              this.state.route === 'register' ?
             <Register
             loadUser = {this.loadUser} 
             routeChange = {this.routeChange}/> 
             :
            <div>
              <Rank count={this.state.user.count} name={this.state.user.name}/>
              <ImageLinkInput onImageSubmit={this.onImageSubmit} onInputChange={this.onInputChange} />
              <FaceDetection box={this.state.box} urlImage={this.state.urlImage}/>
            </div>
            }
          </div>  
        }
      </div>
    );
  }
}

export default App;
