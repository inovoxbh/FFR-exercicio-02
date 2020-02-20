import React from "react";
import { Link } from "react-router-dom";

export function UserItem(props) {
  return (
    <div>
        <h2>Nome: {props.nome}</h2>
        <p>Email: {props.email}</p>
        <p>Idade: {props.idade}</p>
        
        <p><Link to={`/users/${props.nome}`}>Detalhes</Link></p>
        <p><button type="submit" name="excluir" onClick={event => props.remove(props.nome, event)}>Excluir</button></p>
    </div>
  );
}