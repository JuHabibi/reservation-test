import {
    RETRIEVE_PRESTATIONS,
  } from "../actions/types";
  
  const initialState = [];
  
  function prestationsReducer(tutorials = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case RETRIEVE_PRESTATIONS:
        return payload;
      default:
        return tutorials;
    }
  };
  
  export default prestationsReducer;