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
                        <audio src="" className="clip" id="Q"/>
                    </div>
                    <div className="drum-pad" id="W">
                        <audio src="" className="clip" id="W"/>
                    </div>
                    <div className="drum-pad" id="E">
                        <audio src="" className="clip" id="E"/>
                    </div>
                    <div className="drum-pad" id="A">
                        <audio src="" className="clip" id="A"/>                    
                    </div>
                    <div className="drum-pad" id="S">
                        <audio src="" className="clip" id="S"/>
                    </div>
                    <div className="drum-pad" id="D">
                        <audio src="" className="clip" id="D"/>
                    </div>
                    <div className="drum-pad" id="Z">
                        <audio src="" className="clip" id="Z"/>
                    </div>
                    <div className="drum-pad" id="X">
                        <audio src="" className="clip" id="X"/>
                    </div>
                    <div className="drum-pad" id="C">
                        <audio src="" className="clip" id="C"/>
                    </div>
                </div>
            </div>
        )
    }
}