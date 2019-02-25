import React from 'react'
import logo from '../resources/images/anakin.png'

export default props => {
    return (
        <div>
            <div className="row">
                <div className="col s12"></div>
                    <div className="col s12 m4 l2 ">                   
                    </div>
                    <div className="col s12 m4 l8 center">
                        <img className="logo-img" src={logo} alt="logo img"/>
                        <h1 className="gameTitle">Stars quiz!</h1>
                        <button className="btn waves-effect waves-light btn-large btn-gameStart"
                             type="submit" name="action" onClick={props.handleStart}>Jogar!</button>
                    </div>
                    <div className="col s12 m4 l2"></div>
            </div>
        </div>
    );
}