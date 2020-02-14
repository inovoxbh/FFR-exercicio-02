import React from "react";
import { Route } from "react-router-dom";
import { HomePage, UsersPage, DetailsPage } from "./components";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={HomePage} />
    <Route path="/users" exact component={UsersPage} />
    <Route path="/users/:nome" exact component={DetailsPage} />
  </>
);
