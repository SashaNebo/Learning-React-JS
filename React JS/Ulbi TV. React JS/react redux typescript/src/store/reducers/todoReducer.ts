import { TodoState, TodoAction, TodoACtionTypes } from "../../types/todo"

const initialState: TodoState = {
  todos: [],
  page: 1,
  error: null,
  limit: 10,
  loading: false
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoACtionTypes.FETCH_TODO:
      return { ...state, loading: true }
    case TodoACtionTypes.FETCH_TODO_SUCCESS:
      return { ...state, loading: false, todos: action.payload }
    case TodoACtionTypes.FETCH_TODO_ERROR:
      return { ...state, loading: false, error: action.payload }
    case TodoACtionTypes.SET_TODO_PAGE:
      return { ...state, page: action.payload }
    default:
      return state
  }
}