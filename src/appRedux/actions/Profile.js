import { UPDATE_PROFILE } from "../../constants/ActionTypes"

export const updateProfile = (userId) => {
    return {
        type: UPDATE_PROFILE,
        payload: userId
    }
}