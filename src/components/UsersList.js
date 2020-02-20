import React, { Component } from "react";
import { UserItem } from "./UserItem";

export class UsersList extends Component {
  componentDidMount(){
    document.title = 'Lista de Usuários';
  }

  state = {
    Users: [
      {
        nome: "User01",
        email: "user01@pucminas.br",
        idade: "25"
      },
      {
        nome: "User02",
        email: "user02@pucminas.br",
        idade: "26"
      },
      {
        nome: "User03",
        email: "user03@pucminas.br",
        idade: "27"
      }
    ]
  };

  removeUser = (userName, event) => {
    this.setState({
      Users: this.state.Users.filter(user => {
        if (user.nome != userName) {
          return true;
        }
      })
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.Users.map(user => (
            <li>
              <UserItem
                remove={this.removeUser}
                nome={user.nome}
                email={user.email}
                idade={user.idade}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
