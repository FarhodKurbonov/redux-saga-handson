import {combineReducers} from 'redux';
import {appReducer} from "./appReducer";
import {loginFlowReducer} from "./loginFlowR educer";


export const rootReducer = combineReducers({
  app: appReducer,
  user: loginFlowReducer
})
