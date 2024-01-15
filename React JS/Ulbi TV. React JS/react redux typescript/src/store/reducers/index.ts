import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { todoReducer } from './todoReducer'
import { UserState } from '../../types/user'
import { TodoState } from '../../types/todo'


export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
})

export type RootState = ReturnType<typeof rootReducer>