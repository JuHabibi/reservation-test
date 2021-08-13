import {
  RETRIEVE_UNIVERSES,
  ADD_PRESTATIONS
  } from "./types";
  
import UniversesDataService from "../services/universes.service";
  
export const retrievePrestations = () => async (dispatch) => {
    try {
      const res = await UniversesDataService.getAll();
      dispatch({
        type: RETRIEVE_UNIVERSES,
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
};

export const addItemPrestations = (text) => ({
  type: ADD_PRESTATIONS,
  payload: text,
});