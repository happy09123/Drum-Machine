document.addEventListener("keypress", function(event) {
    const drumKeys = [
        'q','w','e',
        'a','s','d',
        'z','x','c'
    ];

    for (let i = 0; i < drumKeys.length; i++) {
        if (event.key === drumKeys[i] || event.key === drumKeys[i].toUpperCase()) {
            DrumMachine.prototype.playAudio(drumKeys[i].toUpperCase())
        }
    }
});

class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            audioSound: '. . . . . .'
        }
        this.setState = this.setState.bind(this);
        this.setAudioName = 
        this.setAudioName.bind(this);
    }
    callTwoFunctions(id) {
        this.playAudio(id)
        this.setAudioName(id)
    }

    playAudio(id) {
        const audioElement = document.getElementById(id)
        audioElement.play()
    }

    setAudioName(letterID) {
        const idNames = {
            'Q':'Heater 1','W':'Heater 2','E':'Heater 3',
            'A':'Heater 4','S':'Clap','D':'Open HH',
            'Z':'Kick n\' hat','X':'Kick','C':'Closed HH'
        };
        console.log(this)
        for (let i = 0; i < Object.entries(idNames).length; i++) {
            if (letterID === Object.entries(idNames)[i][0]) this.setState({
                audioSound: Object.entries(idNames)[i][1]
            })
        }
        
    }

    render() {
        return (
            <div id="drum-machine">
                <div className="pad-bank">
                    <div className="drum-pad" id="Heater-1" onClick={this.callTwoFunctions.bind(this, 'Q')}>
                        Q
                        <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
                    </div>
                    <div className="drum-pad" id="Heater-2" onClick={this.callTwoFunctions.bind(this, 'W')}>
                        W
                        <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
                    </div>
                    <div className="drum-pad" id="Heater-3" onClick={this.callTwoFunctions.bind(this, 'E')}>
                        E
                        <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
                    </div>
                    <div className="drum-pad" id="Heater-4" onClick={this.callTwoFunctions.bind(this, 'A')}>
                        A
                        <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
                    </div>
                    <div className="drum-pad" id="Clap" onClick={this.callTwoFunctions.bind(this, 'S')}>
                        S
                        <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
                    </div>
                    <div className="drum-pad" id="Open-HH" onClick={this.callTwoFunctions.bind(this, 'D')}>
                        D
                        <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
                    </div>
                    <div className="drum-pad" id="Kick-n'-Hat" onClick={this.callTwoFunctions.bind(this, 'Z')}>
                        Z
                        <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
                    </div>
                    <div className="drum-pad" id="Kick" onClick={this.callTwoFunctions.bind(this, 'X')}>
                        X
                        <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
                    </div>
                    <div className="drum-pad" id="Closed-HH" onClick={this.callTwoFunctions.bind(this, 'C')}>
                        C
                        <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
                    </div>
                </div>
                <div className="display-container">
                    <p id="display">
                        {this.state.audioSound}
                    </p>
                    <h1>Drum Machine</h1>
                    <div className="shape">
                        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetdrawings.com%2Fimages%2Fsnare-drum-drawing-25.jpg&f=1&nofb=1&ipt=04996120791e0f521db49eafee724d614f3434e1bb99abaeea228b243ee9e330&ipo=images"></img>
                    </div>
                </div>
            </div>
        )
    }
}

const root = ReactDOM.render(<DrumMachine />, document.getElementById('root'));