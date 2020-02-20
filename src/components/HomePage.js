import React, {Component} from "react";

export class HomePage extends Component {
    componentDidMount(){
        document.title = 'Exercício 02';
      }
    render(){
        return(
            <div>
                <h1>Exercício 02 de React</h1>
            </div>
        )
    }
}