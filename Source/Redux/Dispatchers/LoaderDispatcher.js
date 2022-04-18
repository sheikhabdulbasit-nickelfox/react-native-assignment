// App wide dispatcher

import Stores from "../Stores/Store";
import Actions from "../Actions/LoaderActions";

export default LoaderDispatcher = {
  show: () => {
    Stores.dispatch({ type: Actions.SHOW });
  },
  hide: () => {
    Stores.dispatch({ type: Actions.HIDE });
  }
};
