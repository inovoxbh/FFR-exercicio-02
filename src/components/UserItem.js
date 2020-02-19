import React from "react";
import { Link } from "react-router-dom";

export function UserItem(props) {
  return (
    <div>
      <p>
        <button
          type="submit"
          name="excluir"
          onClick={event => props.remove(props.nome, event)}
        >Excluir</button>

        {props.nome}

        <Link to={`/users/${props.nome}`}>Detalhes</Link>
      </p>
    </div>
  );
}