import React from 'react'

class App extends React.Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // TODO
        // onClick, play child div audio source
        // pass in audio letter?
    }

    // TODO find audio sources
    render() {
        return(
            <div id="drum-machine">
                <div id="display">
                    <div className="drum-pad" id="Q" onClick={this.handleClick}>
                        <audio src="" className="clip" id="Q" title=""/>
                    </div>
                    <div className="drum-pad" id="W" onClick={this.handleClick}>
                        <audio src="" className="clip" id="W" title=""/>
                    </div>
                    <div className="drum-pad" id="E" onClick={this.handleClick}>
                        <audio src="" className="clip" id="E" title="" />
                    </div>
                    <div className="drum-pad" id="A" onClick={this.handleClick}>
                        <audio src="" className="clip" id="A" title=""/>                    
                    </div>
                    <div className="drum-pad" id="S" onClick={this.handleClick}>
                        <audio src="" className="clip" id="S" title=""/>
                    </div>
                    <div className="drum-pad" id="D" onClick={this.handleClick}>
                        <audio src="" className="clip" id="D" title=""/>
                    </div>
                    <div className="drum-pad" id="Z" onClick={this.handleClick}>
                        <audio src="" className="clip" id="Z" title=""/>
                    </div>
                    <div className="drum-pad" id="X" onClick={this.handleClick}>
                        <audio src="" className="clip" id="X" title=""/>
                    </div>
                    <div className="drum-pad" id="C" onClick={this.handleClick}>
                        <audio src="" className="clip" id="C" title=""/>
                    </div>
                </div>
            </div>
        )
    }
}