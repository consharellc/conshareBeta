import { UPDATE_PROFILE } from "../../constants/ActionTypes";

const INIT_STATE = {
    error: "",
    loading: false,
    message: '',
  };
  
  const ProfileReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case '@@router/LOCATION_CHANGE': {
        return {
          ...state,
          pathname: action.payload.location.pathname,
          navCollapsed: false
        }
      }
      case WINDOW_WIDTH:
        return {
          ...state,
          width: action.width,
        };
      case TOGGLE_COLLAPSED_NAV: {
        return {
          ...state,
          navCollapsed: action.navCollapsed
        }
      }
      case FETCH_START: {
        return {...state, error: '', message: '', loading: true};
      }
      case FETCH_SUCCESS: {
        return {...state, error: '', message: '', loading: false};
      }
      case SHOW_MESSAGE: {
        return {...state, error: '', message: action.payload, loading: false};
      }
      case FETCH_ERROR: {
        return {...state, loading: false, error: action.payload, message: ''};
      }
      case HIDE_MESSAGE: {
        return {...state, loading: false, error: '', message: ''};
      }
      default:
        return state;
    }
  }
  
  export default ProfileReducer;