const SOUNDS = [
  {letter:"Q",id:"clunk",source:"https://www.dropbox.com/s/q5jjclpi4o4aspe/Garage%20Foley%20-%2028.wav?dl=1"},
  {letter:"W",id:"clunk",source:"https://www.dropbox.com/s/ccdiydfiyo3n0wh/Garage%20Foley%20-%2029.wav?dl=1"},
  {letter:"E",id:"clunk",source:"https://www.dropbox.com/s/gp2cm3bjj6r7syo/Garage%20Foley%20-%2030.wav?dl=1"},
  {letter:"A",id:"clunk",source:"https://www.dropbox.com/s/va95q3ym0mw0kdp/Garage%20Foley%20-%2031.wav?dl=1"},
  {letter:"S",id:"clunk",source:"https://www.dropbox.com/s/hmiyfh9rb290qzc/Garage%20Foley%20-%2032.wav?dl=1"},
  {letter:"D",id:"clunk",source:"https://www.dropbox.com/s/5fvq9kk5wg9l20g/Garage%20Foley%20-%2033.wav?dl=1"},
  {letter:"Z",id:"clunk",source:"https://www.dropbox.com/s/gsgcr8s0ctbp3mb/Garage%20Foley%20-%2034.wav?dl=1"},
  {letter:"X",id:"clunk",source:"https://www.dropbox.com/s/u65rj99fnk1b2ot/Garage%20Foley%20-%2035.wav?dl=1"},
  {letter:"C",id:"clunk",source:"https://www.dropbox.com/s/ua29jqxv4oazo4f/Garage%20Foley%20-%2071.wav?dl=1"}
];

class Drum extends React.Component {
  render() {
    return(
    <div 
      className="drum-pad" 
      id={this.props.id}
      onCLick={this.handleClick}
      >
      <h1>{this.props.letter}</h1>
             
    </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return(
      <div id="drum-machine">
        <div id="display">
          {SOUNDS.map(s => (
            <Drum
              id={s.id}
              letter={s.letter}
              
              
              />
          ))}
        </div>  
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

