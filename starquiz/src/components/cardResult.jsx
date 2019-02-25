import React from 'react'

class cardResult extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="dateFormat" className="modal open" style={{display: 'block', width: '50%', height: '60%'}} >
                <div className="row" >
                    <div className="col s12 m12 l12">
                        <div className="col s10 l10 m10">
                            <h4>Quiz Finalizado!</h4>
                        </div>
                        <div className="col s2 l2 m2 center">
                            <button className="btn-floating btn-large" 
                                style={{backgroundColor: "#fafafa", boxShadow: 'none' }}
                                type="submit" name="action"
                                onClick={this.props.handleInitGame}
                            >
                                <i style={{ color: 'black' }}className="material-icons right">cancel</i>
                            </button>
                        </div>
                        <div className="col s112 m112 l12 center">
                            <div className="col s6 l6 m6">
                                <h2>35</h2>
                            </div>
                            <div className="col s6 l6 m6">
                                <h6>pontos</h6>
                            </div>
                        </div>
                        <div className="col s112 m12 l12">
                            <h6>Preencha o Form abaixo para salvar sua pontuação:</h6>
                        </div>
                        <div className="col s12 m12 l12">
                            <div className="col input-field s12 m12 l12">
                                <input type="text" ref="nome" placeholder="Nome"/>
                                <label htmlFor="nome" className="active">Nome</label>
                            </div>
                            <div className="col input-field s12 m12 l12">
                                <input type="text" ref="email" placeholder="E-mail"/>
                                <label htmlFor="email" className="active">Email</label>
                            </div>
                            <div className="col input-field s12 m12 l12">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Salvar
                            </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default cardResult;