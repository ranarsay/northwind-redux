import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

//give the name of the action and state itself
export default function changeCategoryReducer(state=initialState.currentCategory, action) {
    // use swithc-statement
    switch (action.type) {
        case actionTypes.CHANGE_CATEGORY:
            //returns current state
            return action.payload;
                
        default:
            //returns initial state
            return state;
    }
}