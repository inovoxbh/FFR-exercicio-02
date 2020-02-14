import React from "react";
import { Link } from "react-router-dom";

export function UserItem(props) {
  return (
    <div>
      <input
        type="button"
        onClick={event => props.remove(props.taskId, event)}
      />

        {props.nome}

      <Link to={`/users/${props.nome}`}>Detalhes</Link>

    </div>
  );
}