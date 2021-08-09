import {
  RETRIEVE_UNIVERSES,
} from "../actions/types";

const initialState = [];

function prestationsReducer(universes = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_UNIVERSES:
      return payload.data;
    default:
      return universes;
  }
};

export default prestationsReducer;