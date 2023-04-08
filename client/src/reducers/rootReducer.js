import { combineReducers } from 'redux'
import { checkIdReducer } from './checkIdReducer'
import { productReducer } from './productReducer'

export const rootReducer = combineReducers({
  checkIdReducer: checkIdReducer,
  productReducer: productReducer,
})
