import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import { ApplicationRoutes } from "./ApplicationRoutes";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Lista de Usuários</Link>
        </li>
      </ul>

      <ApplicationRoutes />
    </div>
  );
}

export default App;
