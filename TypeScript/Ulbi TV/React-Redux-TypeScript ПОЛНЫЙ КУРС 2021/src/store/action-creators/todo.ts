import { Dispatch } from 'redux'
import axios from 'axios'
import { TodoAction, TodoACtionTypes } from '../../types/todo'

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoACtionTypes.FETCH_TODO })
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`, {
        params: { _page: page, _limit: limit },
      })
      setTimeout(() => {
        dispatch({ type: TodoACtionTypes.FETCH_TODO_SUCCESS, payload: response.data })
      }, 1000)
    } catch (e) {
      dispatch({
        type: TodoACtionTypes.FETCH_TODO_ERROR ,
        payload: 'Error! Miss for loading users',
      })
    }
  }
}

export function setTodoPage(page: number): TodoAction {
  return {type: TodoACtionTypes.SET_TODO_PAGE, payload: page }
}
