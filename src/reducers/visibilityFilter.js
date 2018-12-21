import { ActionTypes, VisibilityFilters } from "../actions/types";

const initialState = {
  filter: VisibilityFilters.ShowAll,
  todoText: "Beginning"
};

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SetVisibilityFilter:
      return {
        ...state,
        filter: action.payload.filter,
        todoText: getTodoFilterText(action.payload.filter)
      };
    default:
      return state;
  }
};

const getTodoFilterText = (filter = VisibilityFilters.ShowAll) => {
  switch (filter) {
    case VisibilityFilters.ShowAll:
      return "Show All";
    case VisibilityFilters.ShowCompleted:
      return "Show Completed";
    case VisibilityFilters.ShowActive:
      return "Show Active";
    default:
      return "Beginning";
  }
};

export default visibilityFilter;
