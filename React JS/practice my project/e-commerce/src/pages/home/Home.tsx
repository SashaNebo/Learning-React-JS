import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import qs from 'qs'

import HomeFulfilled from './homeComponents/HomeFulfilled'
import HomePending from './homeComponents/HomePending'
import HomeRejected from './homeComponents/HomeRejected'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { requestData} from '../../store/slices/requestSlice'
import { setScroll } from '../../store/slices/windowSlice'


const Home: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { status } = useAppSelector(state => state.request)
  const { page, limit } = useAppSelector(state => state.pagination)
  const { search, category } = useAppSelector(state => state.params)
  const { scrollY } = useAppSelector(state => state.window)

  type HomeListType = {
    [success: string]: React.FC<{}>
    loading: React.FC<{}>
    error: React.FC<{}>
  }

  const HomeList: HomeListType = {
    success: HomeFulfilled,
    loading: HomePending,
    error: HomeRejected,
  }

  const requestDataFromServer = () => {
    dispatch(requestData({ page, limit }))
  }

  useEffect(() => {
    requestDataFromServer()
  }, [page])

  useEffect(() => {
    const queryString = qs.stringify({ page, category, search })
    navigate(`?${queryString}`)
  }, [page, category, search])

  useEffect(() => {
    window.scrollTo(0, scrollY)
  })

  useEffect(() => {
    scrollY !== 0 && dispatch(setScroll(0))
  }, [])

  const HomeComponent = HomeList[status] || HomeList['loading']

  return <HomeComponent />
}

export default Home
