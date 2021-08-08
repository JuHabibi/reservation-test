import {
    RETRIEVE_PRESTATIONS,
  } from "../actions/types";
  
  const initialState = [];
  
function prestationsReducer(prestations = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case RETRIEVE_PRESTATIONS:
        return payload.data;
      default:
        return prestations;
    }
  };
  
  export default prestationsReducer;