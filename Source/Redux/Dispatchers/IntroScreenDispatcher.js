// App wide dispatcher

import Stores from '../Stores/Store';
import Actions from '../Actions/IntroScreenActions';

export default IntroScreenDispatcher = {
  setFirstLoadFlagToFalse: () => {
    Stores.dispatch({type: Actions.FIRST_LOAD_COMPLETE});
  },
};
