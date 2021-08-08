import {
    RETRIEVE_PRESTATIONS,
  } from "./types";
  
  import PrestationDataService from "../services/prestation.service";
  
export const retrievePrestations = () => async (dispatch) => {
    try {
      const res = await PrestationDataService.getAll();
      console.log("youp", res)
      dispatch({
        type: RETRIEVE_PRESTATIONS,
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  };