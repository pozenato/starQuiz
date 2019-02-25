import React, { Component } from 'react'
import PropTypes from 'prop-types';

class card extends Component {
    constructor(props) {
        super(props)
        this.state = this.getInitialState()
    }

    getInitialState() {
        return {
            value: '',
            showInput: false,
        }
    }

    handleDetail = () => {
        this.props.person.setInitial.visited = true;
        this.props.person.setInitial.openDetail = true;
        this.props.handleCardDetail(this.props.person);
    }

    checkNamePerson = () => {
        if (this.state.value.toUpperCase() === this.props.person.name.toUpperCase()){
            this.props.person.setInitial.value = this.props.person.setInitial.visited ? 5 : 10
        }
        this.props.person.setInitial.gamed = true;
        this.setState({ showInput: false})
    }

    handleChange = (event)  => {        
        this.setState({ value: event.target.value})
    }

    onShowInput = (event)  => {        
        this.setState({ showInput: true})
    }
    
    render () {
        const {
            person,
        } = this.props;
        return (
            <div className="cardContainer">
                <div className="center">
                    <img className="responsive-img" width="120" src={person.link} alt="logo img"/>
                </div>
                <div className="row">
                    <div className="col s6 m6 l6 center">
                        <button 
                            className="btn waves-effect waves-light btn-medium grey darken-1" 
                            type="submit" 
                            name="action"
                            onClick={this.onShowInput}
                            disabled={person.setInitial.gamed}
                        >?</button>
                    </div>
                    <div className="col s6 m6 l6 center">
                        <button 
                            className="btn waves-effect waves-light btn-medium grey darken-1" 
                            type="submit" 
                            name="action"
                            onClick={this.handleDetail}
                            disabled={person.setInitial.gamed}
                        >...</button>
                    </div>
                    {
                        this.state.showInput ?
                            <div className="col s12 m12 l12 row">
                                <div className="col s10 m10 l10 row">
                                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                                </div>
                                <div className="col s2 m2 l2 row">
                                    <button 
                                        className="btn waves-effect waves-light btn-Tiny green" 
                                        type="submit" 
                                        name="action"
                                        onClick={this.checkNamePerson}
                                    >
                                        <i class="material-icons">check</i>
                                    </button>    
                                </div>
                            </div>
                        :
                            null
                    }
                </div>
            </div>
        )
    };


}

card.propTypes = {
    visited: PropTypes.bool,
};

export default card;