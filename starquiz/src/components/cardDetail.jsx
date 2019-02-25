import React from 'react'
import logo from '../resources/images/person-1.png'

class cardDetail extends React.Component {

    constructor(props) {
        super(props)
    }

    handleClosed = () => {
        this.props.person.setInitial.openDetail = true;
        this.props.onCloseCardDetail();
    }

    render() {

        const {
            person,
        } = this.props;

        return (
            <div id="dateFormat" className="modal open" style={{display: 'block', width: '50%', height: '60%'}} >
                <div class="row" >
                    <div class="col s12 m12 l12">
                        <div class="col s10 l10 m10">
                            <h4>Details</h4>
                        </div>
                        <div class="col s2 l2 m2 center">
                            <button
                                class="btn-floating btn-large"
                                style={{backgroundColor: "#fafafa", boxShadow: 'none' }}
                                type="submit"
                                name="action"
                                onClick={this.handleClosed}>
                                <i style={{ color: 'black' }}class="material-icons right">cancel</i>
                            </button>
                        </div>
                        <div class="col s14 m14 l4 center">
                            <img class="responsive-img" width="150"  src={person.link} alt="logo img"/>
                        </div>
                        <div class="col s17 m7 l7">
                            <div class="col s12 m12 l2">
                                <h6>Birth Year: </h6>
                            </div>
                            <div class="col s12 m12 l10">
                                <h6>{person.birth_year}</h6>
                            </div>
                            <div class="col s12 m12 l2">
                                <h6>Height: </h6>
                            </div>
                            <div class="col s12 m12 l10">
                                <h6>{person.height}</h6>
                            </div>
                            <div class="col s12 m12 l2">
                                <h6>Hair: </h6>
                            </div>
                            <div class="col s12 m12 l10">
                                <h6>{person.hair_color}</h6>
                            </div>
                            <div class="col s12 m12 l2">
                                <h6>Gender</h6>
                            </div>
                            <div class="col s12 m12 l10">
                                <h6>{person.gender}</h6>
                            </div>
                        </div>
                        <div class="col s12 m12 l12">
                            <div class="col s12 m12 l2">
                                <h6>Skin Color: </h6>
                            </div>
                            <div class="col s12 m12 l10">
                                <h6>{person.skin_color}</h6>
                            </div>
                            <div class="col s12 m12 l2">
                                <h6>Mass: </h6>
                            </div>
                            <div class="col s12 m12 l10">
                                <h6>{person.mass}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default cardDetail;