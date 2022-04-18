import Actions from "../Actions/LoaderActions";

let initialState = {
  visible: false
};
const LoaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SHOW:
      return {
        ...state,
        visible: true
      };
    case Actions.HIDE:
      return {
        ...state,
        visible: false
      };
    default:
      return state;
  }
};

export default LoaderReducer;
