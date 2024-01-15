import React, { useEffect, useRef } from 'react'
import qs from 'qs'
import {useDispatch, useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import Categories from '../components/Categories'
import Sort, { sortList } from '../components/Sort'
import Skeleton from '../components/PizzaBlock/Skeleton'
import PizzaBlock from '../components/PizzaBlock'
import Pagination from '../Pagination'
import ErrorBlock from '../components/ErrorBlock'
import { setCategoryId, setCurrentPage, setFilters, selectFilter } from '../redux/slices/filterSlice'
import { fetchPizzas, selectPizzaData } from '../redux/slices/pizzaSlice'

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isSearch = useRef(false)
  const isMounted = useRef(false)
  const { items, status } = useSelector(selectPizzaData)
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter)

  const sortBy = sort.sortProperty.replace('-', '')
  const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
  const category = categoryId > 0 ? `category=${categoryId}` : ''
  const search = searchValue ? `&search=${searchValue}` : ''

  const getPizzas = async () => {

      dispatch(
        fetchPizzas({
          sortBy,
          order,
          category,
          search,
          currentPage,
        })
      )
      window.scroll(0, 0)
  }

  const onChangeCategory = id => {
    dispatch(setCategoryId(id))
  }
  
  const onChangePage = num => {
    dispatch(setCurrentPage(num))
  }

  // Если был первый рендер, то проверяем URL-параметры и сохраняем в redux
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))
      const sort = sortList.find(obj => obj.sortProperty === params.sortProperty) 

      dispatch(
        setFilters({
          ...params,
          sort,
        })
      )
      isSearch.current = true
    }
  }, [])

  // Если изменили параметы и первый рендер уже был, тогда делаем вшивания URL-параметров
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      })
      navigate(`?${queryString}`)
    }
    isMounted.current = true
  }, [categoryId, sort.sortProperty, search, currentPage])

  // Если был перый рендер, тогда делаем запрос данных
  useEffect(() => {
    window.scroll(0, 0)

    if (!isSearch.current) {
      getPizzas()
    }

    isSearch.current = false

  }, [categoryId, sort.sortProperty, search, currentPage])
  
  const pizzas = items.map(pizza => (
    <Link key={pizza.id} to={`/pizza/${pizza.id}`}>
      <PizzaBlock {...pizza} />
    </Link>
  ))
  const skeletons = [...new Array(4)].map((_, i) => <Skeleton key={i} />)

  if (status === 'error') return <ErrorBlock/>

  return (
    <>
      <div className='content__top'>
        <Categories value={categoryId} onClickCategory={i => onChangeCategory(i)} />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>{status === 'loading' ? skeletons : pizzas}</div>
      <Pagination currentPage={currentPage} onChangePage={number => onChangePage(number)} />
    </>
  )
}

export default Home
