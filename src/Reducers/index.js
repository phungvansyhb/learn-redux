import Test from './test'
import EditReducer from './Editwork-reducer'
import {combineReducers} from 'redux'

export const allReducer = combineReducers({
    test: Test,
    edit: EditReducer,
})