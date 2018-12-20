import { ActionTypes, VisibilityFilters } from "../actions/types";

const visibilityFilter = (state = VisibilityFilters.ShowAll, action) => {
  switch (action.type) {
    case ActionTypes.SetVisibilityFilter:
      return action.payload.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
