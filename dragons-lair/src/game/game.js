import React, { Component } from 'react';
import '../../node_modules/video-react/dist/video-react.css';
import logo from './images/dragons-lair-logo.png';

class Game extends Component {

    componentDidMount() {
        document.getElementById('dragonPlayer').addEventListener('pause', this.props.handleVideoPause);
        document.getElementById('dragonPlayer').addEventListener('ended', this.props.handleVideoEnd);
    }

    render() {
        return (
            <div className="main">

                <div>
                    <img src={logo} alt="Dragon's Lair" height="50px"/>
                    <br/>
                    <video controls={true} autoPlay id="dragonPlayer">
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
                <div>
                    <MoveButton className="sword-button" label="S" value="SWORD" onClick = {this.props.handleClick} /> 
                    <MoveButton className="button" label="up" value="UP" onClick = {this.props.handleClick} />
                    <MoveButton className="button" label="down" value="DOWN" onClick = {this.props.handleClick} />
                    <MoveButton className="button" label="right" value="RIGHT" onClick = {this.props.handleClick} />
                    <MoveButton className="button" label="left" value="LEFT" onClick = {this.props.handleClick} />
                    <MoveButton className="button" label="none" value="NONE" onClick = {this.props.handleClick} />
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
