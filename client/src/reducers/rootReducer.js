import { combineReducers } from 'redux'
import { checkIdReducer } from './checkIdReducer'

export const rootReducer = combineReducers({
  checkIdReducer: checkIdReducer,
})
