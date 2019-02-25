import React, { Component } from 'react'
import components from '../components'
import Modal from '../utils/Modal'
import { photo } from '../utils/photo'


export default class GameContainer extends Component {

    constructor(props) {
        super(props)
        this.state = this.getInitialState()
    }

    getInitialState() {
        return {
            accessed: [],
            person: {},
            setInitial: {
                visited: false,
                gamed: false,
                value: 0,
                openDetail: false,
            }
        }
    }

    handleCardDetail = (person) => {
        this.setState({ person })
    }

    onCloseCardDetail= () => {
        this.setState({ person: {} })
    }

    handlePeople = (person, photo) => {
        const accessed = this.state.accessed;
        photo.filter(item =>{
            if (item.name === person.name) {
                person.link = item.link;
                return item.link
            }
            return person;
        });
        if (accessed && !accessed.lenght){
            person.setInitial = this.state.setInitial;
        } else{
            accessed.filter(item => {
                if (item.name === person.name){
                    person = item;
                    return person;
                } else {
                    person.setInitial = this.state.setInitial;
                }
                return person;
            })
        }
    }

    renderizedeNewPeople = (url) => {
        this.props.handleNewPage(url);
    }
    
    
    render() {
        const {
            peopleData,
            gameFineshed,
            handleInitGame,
        } = this.props;
        if (peopleData && peopleData.results.length > 0){
            return (
                <div>
                    <Modal open={gameFineshed}>
                        <components.cardResult
                            handleInitGame={handleInitGame}
                        />    
                    </Modal>
                    <Modal open={this.state.person.setInitial && this.state.person.setInitial.openDetail}>
                        <components.cardDetail
                            person={this.state.person}
                            onCloseCardDetail={this.onCloseCardDetail}                         
                        />    
                    </Modal>
                    <div className="row">
                        <div className="col s4 m6 l12">
                            <div className="col s1 m1 l1 first" />
                            {
                                peopleData.results.map(person => {
                                    this.handlePeople(person, photo)
                                    return (
                                        <div className="col s2 m2 l2 gameCard">
                                            <components.card
                                                person={person}
                                                handleCardDetail={this.handleCardDetail}
                                            />
                                        </div>
                                    )
                                })
                            }
                            <div className="col s1 m1 l1" />
                        </div>
                    </div>
                    <div className="col s12 m12 l12 row">
                        {
                            peopleData.previous ? 
                                <div className="col s6 m6 l6 left">
                                    <button 
                                        className="btn waves-effect waves-light btn-medium grey darken-1" 
                                        type="submit" 
                                        name="action"
                                        onClick={() => this.renderizedeNewPeople(peopleData.previous)}
                                    >Preview</button>
                                </div>
                            :
                                null
                        }
                        {
                            peopleData.next ?
                                <div className="col s6 m6 l6 right">
                                    <button 
                                        className="btn waves-effect waves-light btn-medium grey darken-1" 
                                        type="submit" 
                                        name="action"
                                        onClick={() => this.renderizedeNewPeople(peopleData.next)}
                                    >Next</button>
                                </div>
                            :
                                null
                        }

                    </div>
                </div>
            );
        } else {
            return null;
        }

    }
}   