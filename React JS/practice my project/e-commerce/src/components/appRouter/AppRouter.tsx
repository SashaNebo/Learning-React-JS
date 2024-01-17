import React from 'react'
import { Routes, Route } from 'react-router-dom'

import AppWrapper from '../../layouts/AppWrapper'
import Home from '../../pages/home/Home'
import Cart from '../../pages/Cart'
import Wishlist from '../../pages/Wishlist'
import Profile from '../../pages/Profile'
import NotFound from '../../pages/NotFound'
import Product from '../product/Product'

const AppRouter: React.FC = () => {

  return (
    <Routes>
      <Route path='/' element={<AppWrapper />}>
        <Route path='' element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='wishlist' element={<Wishlist />} />
        <Route path='profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
        <Route path='product/:id' element={<Product />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
