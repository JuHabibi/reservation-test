import {
  ADD_PRESTATIONS,
} from "../actions/types";

const initialState = {
  addItem: [],
};

function UpdateprestationsReducer(update = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_PRESTATIONS:
      return {
        addItem: [...update.addItem, payload],
      }
    default:
      return update;
  }
};

export default UpdateprestationsReducer;