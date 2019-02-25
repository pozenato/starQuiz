import React from 'react'
import logo from '../resources/images/anakin.png'
import Countdown, { zeroPad } from 'react-countdown-now';

export default props => {
    const renderer = ({ minutes, seconds }) => {
        return <span className="countdownClock" >{zeroPad(minutes, 2)}:{zeroPad(seconds, 2)}</span>;
    };

    return (
        <div className="headerContainer row">
            <div className="col s12 m12 l12">
                <div className="col s12 m12 l2">
                    <img className="headerImg" src={logo} alt="logo img"/>
                </div>
                <div className="col s12 m12 l6">
                    <h1 className="headerTitle">Stars quiz!</h1>
                </div>
                <div className="col s13 m13 l4 countdown center">
                    <i className="material-icons small countdownIcon">access_time</i>
                    <Countdown
                        className="countdownClock"
                        date={Date.now() + 120000}
                        onComplete={() => props.handleFinishedGame()}
                        renderer={renderer}
                    >
                    </Countdown>
                </div>
            </div>
        </div>
    );
}