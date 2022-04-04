import * as actionTypes from "./actionTypes"

export function changeCategory(category) {
    //returns object
    return {type:actionTypes.CHANGE_CATEGORY, payload:category}
}