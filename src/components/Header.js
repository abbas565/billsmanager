import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Bills Manager</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Dashbord
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Add Expense
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </header>
);

export default Header;
