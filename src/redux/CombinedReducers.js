import { combineReducers } from 'redux'
import auth from './reducers/AuthReducer'
import generic from './reducers/DataReducer'

export default combineReducers({
    auth,
    generic
})