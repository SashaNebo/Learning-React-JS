import { useDispatch } from "react-redux"
import { useAppDispatch, useAppSelector } from "./hooks/redux"
import { userSlice } from "./store/reducers/UserSlice"
import { useEffect } from "react"
import { fetchUsers } from "./store/reducers/ActionCreators"
import PostContainer from "./components/PostContainer"

function App() {
  // const dispatch = useAppDispatch()
  // const { users, isLoading, error } = useAppSelector(state => state.userReducer)
  
  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [])

  return (
    <>
      <PostContainer/>
    </>
  )
}

export default App
