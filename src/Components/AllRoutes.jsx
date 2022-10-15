import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartPage from './Cart/CartPage'
import Home from './Home/Home'
import Products from './Products.jsx/Products'
import Viewpage from './ProductsView.jsx/Viewpage'

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/products/:item_id' element={<Viewpage/>}/>
                <Route path='/cart' element={<CartPage/>}/>
            </Routes>
        </>
    )
}

export default AllRoutes