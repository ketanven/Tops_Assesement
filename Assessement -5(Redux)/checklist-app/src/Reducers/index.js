// reducers/index.js

import { combineReducers } from 'redux';
import checklistReducer from './checklistReducer';


const rootReducer = combineReducers({
    checklist: checklistReducer,
    // other reducers can be added here
});

export default rootReducer;
