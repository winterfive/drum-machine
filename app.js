import React from 'react'

class App extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div id="drum-machine">
                <div id="display">
                    <div className="drum-pad"></div>
                    <div className="drum-pad"></div>
                    <div className="drum-pad"></div>
                    <div className="drum-pad"></div>
                    <div className="drum-pad"></div>
                    <div className="drum-pad"></div>
                    <div className="drum-pad"></div>
                    <div className="drum-pad"></div>
                    <div className="drum-pad"></div>
                </div>
            </div>
        )
    }
}