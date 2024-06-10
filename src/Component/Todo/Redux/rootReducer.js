import { combineReducers } from 'redux';
import TodoReducer from './TodoReducer';

const rootReducer = combineReducers({
    todo: TodoReducer
});

export default rootReducer;
