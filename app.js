const SOUNDS = [
  { letter:"Q", id:"clunk", source:"https://www.myinstants.com/media/sounds/snare.mp3"},
  { letter:"W", id:"clunk2", source:"https://www.dropbox.com/s/ccdiydfiyo3n0wh/Garage%20Foley%20-%2029.wav"},
  { letter:"E", id:"clunk3", source:"https://www.dropbox.com/s/gp2cm3bjj6r7syo/Garage%20Foley%20-%2030.wav"},
  { letter:"A", id:"clunk4", source:"https://www.dropbox.com/s/va95q3ym0mw0kdp/Garage%20Foley%20-%2031.wav"},
  { letter:"S", id:"clunk5", source:"https://www.dropbox.com/s/hmiyfh9rb290qzc/Garage%20Foley%20-%2032.wav"},
  { letter:"D", id:"clunk6", source:"https://www.dropbox.com/s/5fvq9kk5wg9l20g/Garage%20Foley%20-%2033.wav"},
  { letter:"Z", id:"clunk7", source:"https://www.dropbox.com/s/gsgcr8s0ctbp3mb/Garage%20Foley%20-%2034.wav"},
  { letter:"X", id:"clunk8", source:"https://www.dropbox.com/s/u65rj99fnk1b2ot/Garage%20Foley%20-%2035.wav"},
  { letter:"C", id:"clunk9", source:"https://www.dropbox.com/s/ua29jqxv4oazo4f/Garage%20Foley%20-%2071.wav"}
]

class Drum extends React.Component {
  
  componentDidMount() {
    console.log("did mount")
    document.addEventListener('keydown', this.handleKeyDown)
    window.focus()
  }  
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }
  
  handleKeyDown = e => {
    if(e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
  }
  
  handleClick = () => {
    this.audio.play();
    this.audio.currentTime = 0;
    this.props.handleDisplay(this.props.id)
  }
  
  render() {
    return(
      <div 
        className="drum-pad" 
        id={this.props.id}
        onClick={this.handleClick}
      >
        <h1>{this.props.letter}</h1>
        <audio
          id={this.props.letter}
          className="clip"
          src={this.props.source}
          ref={ref => this.audio = ref}
        ></audio>             
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: "Click/Press key to play garage sound."
    }
  }
  
  handleDisplay = display => this.setState({ display })
  
  render() {
    return(
      <div id="drum-machine">
        <div id="display">{this.state.display}</div>
        <div id="drums">{SOUNDS.map(s => (
            <Drum
              key={s.id}
              id={s.id}
              letter={s.letter}
              src={s.source}
              handleDisplay={this.handleDisplay}
              />
          ))}
        </div>  
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

