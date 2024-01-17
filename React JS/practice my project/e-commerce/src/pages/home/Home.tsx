import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import qs from 'qs'

import HomeFulfilled from './homeComponents/HomeFulfilled'
import HomePending from './homeComponents/HomePending'
import HomeRejected from './homeComponents/HomeRejected'

import { requestData, selectorRequest } from '../../store/slices/requestSlice'
import { selectorWindow, setScroll } from '../../store/slices/windowSlice'
import { selectorParams } from '../../store/slices/paramsSlice'
import { selectorPagination } from '../../store/slices/paginationSlice'

const Home: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { status } = useSelector(selectorRequest)
  const params = useSelector(selectorParams)
  const { page } = useSelector(selectorPagination)
  const { scrollY } = useSelector(selectorWindow)

  const HomeList = {
    success: HomeFulfilled,
    loading: HomePending,
    error: HomeRejected,
  }

  const requestDataFromServer = () => {
    dispatch(requestData({ ...params, page }))
  }

  useEffect(() => {
    requestDataFromServer()
  }, [page])

  useEffect(() => {
    const queryString = qs.stringify({
      page,
    })

    navigate(`?${queryString}`)
  }, [page])

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
