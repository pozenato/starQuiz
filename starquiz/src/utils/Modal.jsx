import React from 'react'

export default class Modal extends React.Component {
    static modal(children) {
        return (
            <div id="globalModal" style={{zIndex: 1002, position: 'fixed'}}>
                <div className="lean-overlay" id="materialize-lean-overlay-1"
                     style={{display: 'block', opacity: 0.5, height: '100%', background: 'black'}}></div>
                {
                    children
                }
            </div>
        );
    }

    render() {
        return this.props.open ? Modal.modal(this.props.children) : null;
    }
}