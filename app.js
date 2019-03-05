const SOUNDS = [
  {
    letter: "Q",
    id: "snare drum",
    source: "https://www.myinstants.com/media/sounds/snare.mp3"
  },
  {
    letter: "W",
    id: "bongo",
    source:
      "http://tipiwiki.free.fr/snd/Percussion(4e)2.wav"
  },
  {
    letter: "E",
    id: "high hat",
    source:
      "http://www.denhaku.com/r_box/tr707/closed.wav"
  },
  {
    letter: "A",
    id: "bass",
    source:
      "https://www.myinstants.com/media/sounds/bass-drum.mp3"
  },
  {
    letter: "S",
    id: "tom-tom",
    source:
      "http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav"
  },
  {
    letter: "D",
    id: "low drum",
    source:
      "http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3"
  },
  {
    letter: "Z",
    id: "stick tap",
    source:
      "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
  },
  {
    letter: "X",
    id: "clap",
    source:
      "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    letter: "C",
    id: "kick",
    source:
      "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  }
];

class Drum extends React.Component {
  componentDidMount() {
    //console.log(this.audio)
    document.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

  // handle key press
  handleKeydown = e => {
    if (e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    }
  };


  // handle mouse click
  handleClick = () => {
    this.audio.play();
    this.audio.currentTime = 0;
    this.props.handleDisplay(this.props.id);
  };

  render() {
    return (
      <div className="drum-pad" id={this.props.id} onClick={this.handleClick}>
        <h1>{this.props.letter}</h1>
        <audio
          id={this.props.letter}
          className="clip"
          src={this.props.src}
          ref={ref => (this.audio = ref)}>
          </audio>
      </div>
    );
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Click/Press key to play a sound."
    };
  }

  handleDisplay = display => this.setState({ display });

  render() {
    return (
      <div id="drum-machine">
        <div id="display">{this.state.display}</div>
        <div id="drums">
          {SOUNDS.map(s => (
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
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
