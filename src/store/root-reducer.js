import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import firstReducer from './modules/first_page';
import secondReducer from './modules/second_page';
import thirdReducer from './modules/third_page';

export default (history) => combineReducers({
    router: connectRouter(history),
    first: firstReducer,
    second: secondReducer,
    third: thirdReducer,
  });