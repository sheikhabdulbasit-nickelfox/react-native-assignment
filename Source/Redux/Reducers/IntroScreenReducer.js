import Actions from '../Actions/IntroScreenActions';

let initialState = {
  loadedFirstTime: true,
};

const IntroScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FIRST_LOAD_COMPLETE:
      return {
        ...state,
        loadedFirstTime: false,
      };
    default:
      return state;
  }
};

export default IntroScreenReducer;
