import { allReducer } from '../Reducers/index'
import { createStore } from 'redux'

const store = createStore( allReducer );

export default store

