import React, { Component } from 'react';
// import { Player, ControlBar } from 'video-react';
import '../../node_modules/video-react/dist/video-react.css';
import logo from './images/dragons-lair-logo.png';
import acts from './acts.js';

class Game extends Component {

    componentDidMount() {
        document.getElementById('dragonPlayer').addEventListener('pause', this.props.handleVideoPause);
        document.getElementById('dragonPlayer').addEventListener('ended', this.props.handleVideoEnd);
        // document.getElementById('dragonPlayer').addEventListener('timeupdate', this.handleVideoTimeReached);
    }

    render() {
        return (
            <div className="main">

                <div>
                    <img src={logo} alt="Dragon's Lair" height="50px"/>
                    <br/>

                    {/* <Player id="dragonPlayer"  autoPlay={true} >
                        <source src={this.props.videoSource} />
                        <ControlBar autoHide={true} />
                    </Player> */}

                    <video controls={true} autoPlay id="dragonPlayer" height="600px">
                        <source src={this.props.videoSource} />
                    </video>

                </div>

                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Act</th>
                                <th>Scene</th>
                                <th>Lives</th>
                            </tr>
                            <tr>
                                <td>{this.props.act}</td>
                                <td>{this.props.scene}</td>
                                <td>{this.props.player.lives}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <h2>{this.props.name}</h2>
                <h3>{this.props.instructions}</h3>

                <div>
                    <MoveButton className="sword-button" label="S" value="SWORD" onClick = {this.props.handleClick} /> 

                    <div>
                        <MoveButton className="button" label="up" value="UP" onClick = {this.props.handleClick} />
                        <MoveButton className="button" label="down" value="DOWN" onClick = {this.props.handleClick} />
                        <MoveButton className="button" label="right" value="RIGHT" onClick = {this.props.handleClick} />
                        <MoveButton className="button" label="left" value="LEFT" onClick = {this.props.handleClick} />
                        <br/>
                        <MoveButton className="button" label="up-right" value="UPRIGHT" onClick = {this.props.handleClick} />
                        <MoveButton className="button" label="up-left" value="UPLEFT" onClick = {this.props.handleClick} />
                        <br/>
                        <MoveButton className="button" label="down-right" value="DOWNRIGHT" onClick = {this.props.handleClick} />
                        <MoveButton className="button" label="down-left" value="DOWNLEFT" onClick = {this.props.handleClick} />
                        <br/>
                        <MoveButton className="button" label="none" value="NONE" onClick = {this.props.handleClick} />
                    </div>
                    
                    <MoveButton className="sword-button" label="S" value="SWORD" onClick = {this.props.handleClick} />
                </div>
            </div>
        )
    }


}

function MoveButton({ label, value, className, onClick }) {
    return (
      <button value={value} className={className} onClick={() => onClick(value)} >
        {label}
      </button>
    );
}


export default Game;