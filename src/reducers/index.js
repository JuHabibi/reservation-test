import { combineReducers } from "redux";
import universes from "./universes";
import updateUniverses from "./udpateUniverses"

export default combineReducers({
    universes,
    updateUniverses
});