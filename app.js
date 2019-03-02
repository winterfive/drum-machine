import React from 'react'

class App extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div id="drum-machine">
                <div id="display">
                    <div className="drum-pad" id="Q">
                        <audio src="" />
                    </div>
                    <div className="drum-pad" id="W">
                        <audio src="" />
                    </div>
                    <div className="drum-pad" id="E">
                        <audio src="" />
                    </div>
                    <div className="drum-pad" id="A">
                        <audio src="" />                    
                    </div>
                    <div className="drum-pad" id="S">
                        <audio src="" />
                    </div>
                    <div className="drum-pad" id="D">
                        <audio src="" />
                    </div>
                    <div className="drum-pad" id="Z">
                        <audio src="" />
                    </div>
                    <div className="drum-pad" id="X">
                        <audio src="" />
                    </div>
                    <div className="drum-pad" id="C">
                        <audio src="" />
                    </div>
                </div>
            </div>
        )
    }
}