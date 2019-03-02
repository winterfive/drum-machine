import React from 'react'

class App extends React.Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // onClick, play atached audio source
    }

    render() {
        return(
            <div id="drum-machine">
                <div id="display">
                    <div className="drum-pad" id="Q" onClick={this.handleClick}>
                        <audio src="" className="clip" id="Q"/>
                    </div>
                    <div className="drum-pad" id="W" onClick={this.handleClick}>
                        <audio src="" className="clip" id="W"/>
                    </div>
                    <div className="drum-pad" id="E" onClick={this.handleClick}>
                        <audio src="" className="clip" id="E"/>
                    </div>
                    <div className="drum-pad" id="A" onClick={this.handleClick}>
                        <audio src="" className="clip" id="A"/>                    
                    </div>
                    <div className="drum-pad" id="S" onClick={this.handleClick}>
                        <audio src="" className="clip" id="S"/>
                    </div>
                    <div className="drum-pad" id="D" onClick={this.handleClick}>
                        <audio src="" className="clip" id="D"/>
                    </div>
                    <div className="drum-pad" id="Z" onClick={this.handleClick}>
                        <audio src="" className="clip" id="Z"/>
                    </div>
                    <div className="drum-pad" id="X" onClick={this.handleClick}>
                        <audio src="" className="clip" id="X"/>
                    </div>
                    <div className="drum-pad" id="C" onClick={this.handleClick}>
                        <audio src="" className="clip" id="C"/>
                    </div>
                </div>
            </div>
        )
    }
}