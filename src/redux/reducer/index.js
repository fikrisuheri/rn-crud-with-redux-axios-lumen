import Notes from './notes';
import { combineReducers } from 'redux';

const appReducers = combineReducers({
    ListNotes : Notes
})

export default appReducers