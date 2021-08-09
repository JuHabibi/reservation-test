import {
  RETRIEVE_UNIVERSES,
  } from "./types";
  
import UniversesDataService from "../services/universes.service";
  
export const retrievePrestations = () => async (dispatch) => {
    try {
      const res = await UniversesDataService.getAll();
      console.log("youp", res.data)
      dispatch({
        type: RETRIEVE_UNIVERSES,
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  };