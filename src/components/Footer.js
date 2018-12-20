import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions/types";

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.ShowAll}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.ShowCompleted}>Completed</FilterLink>
    <FilterLink filter={VisibilityFilters.ShowActive}>Active</FilterLink>
  </div>
);

export default Footer;
