import React, { Component } from "react";

export class DetailsPage extends Component {
    componentDidMount(){
        document.title = this.props.match.params.nome;
    }
    render(){
        return (
            <div>
                <p>Você é o {this.props.match.params.nome}.</p>;
            </div>
        )
    }
}