import { UPDATE_PROFILE } from "../../constants/ActionTypes";

const initialState = {
    isUpdated: false,
 }

const UserReducer = (state = initialState, action) => { 
    switch (action.type) {
       case UPDATE_PROFILE :
          state.isUpdated = !state.isUpdated; //original object altered
          return state;
       default:
          return state;
    }
 }
 export default UserReducer ;