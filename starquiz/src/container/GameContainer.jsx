import React, { Component } from 'react';
import Section from '../Section/'
import actions from '../redux/actions';
import components from '../components'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import constants from '../utils/constants'

class GameContainer extends Component {
    constructor(props) {
        super(props)
        this.state = this.getInitialState()
        props.fetchPeopleData(constants.initialLoad.url);
    }

    getInitialState() {
        return {
            startedGame: false,
            gameFineshed: false,
        }
    }

    handleFinishedGame = () => {
        this.setState({ gameFineshed: true })
    }

    handleStart = () => {
        this.setState({ startedGame: true, gameFineshed: false })
    }

    handleInitGame = () => {
        this.setState({ startedGame: false })
    }

    handleNewPage = (params) => {
        this.props.fetchPeopleData(params);
    }

  render() {
    return (
        <div>
            {this.state.startedGame ?
                <div>
                    <components.header handleFinishedGame={this.handleFinishedGame} />
                    <Section.GameSection 
                        gameFineshed={this.state.gameFineshed}
                        handleFinishedGame={this.handleFinishedGame}
                        handleInitGame={this.handleInitGame}
                        peopleData={this.props.peopleData}
                        handleNewPage={this.handleNewPage}
                    />
                </div>
            :  
                <Section.StartSection handleStart={this.handleStart} />
            }
        </div>
    );
  }
}

const mapStateToProps = state => ({
    peopleData: state.peopleData.result,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchPeopleData: actions.fetchPeopleData,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);


