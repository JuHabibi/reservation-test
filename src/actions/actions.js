import {
    RETRIEVE_PRESTATIONS,
  } from "./types";
  
  import PrestationDataService from "../services/prestation.service";
  
  export const retrieveTutorials = () => async (dispatch) => {
    try {
      const res = await PrestationDataService.getAll();
  
      dispatch({
        type: RETRIEVE_PRESTATIONS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };