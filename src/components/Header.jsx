import React from 'react'
import { styled } from 'styled-components'
import { Route, Routes, NavLink } from 'react-router-dom'
import { Products } from '../pages/Products'
import { MyCart } from '../pages/MyCart'
import { MyOrder } from '../pages/MyOrder'
import { MainPage } from '../pages/MainPage'

export const DUMMY_PRODUCTS = [
  {
      title: 'Смартфон Apple iPhone 14 Pro 256GB CA',
      price: 97700,
      id: 'e1ndaskxe',
      image: 'https://softech.kg/image/cache/296b69d253ff893ad55b7fabf3e031ed.jpg',
  },
  {
      title: 'Смартфон Apple iPhone 13 256GB KH',
      price: 60700,
      id: 'e242kjkx',
      image: 'https://softech.kg/image/cache/a282da674bcc4003cfe99133ac1d52fd.jpg',
  },
  {
      title: 'Смартфон Apple iPhone 14 Pro Max 1TB JP',
      price: 107700,
      id: 'e3fpso1m',
      image: 'https://softech.kg/image/cache/d871f069c929794a42d44fbe69c4c151.jpg',
  },
]

const Header = () => {
  return (
    <>
    <StyledHeader>
      <h1>iStore</h1>

      <nav>
        <Link style={(props)=>{
          if(props.isActive){
            return {
              color: '#0000ff67'
            }
          }
        }}
        to='/products'
        >
          Products
          </Link>
          <Link style={(props)=>{
          if(props.isActive){
            return {
              color: '#0000ff67'
            }
          }
        }}
        to='/carts'
        >
          My Cart
          </Link>
          <Link style={(props)=>{
          if(props.isActive){
            return {
              color: '#0000ff67'
            }
          }
        }}
        to='/orders'
        >
          My Order
          </Link>
      </nav>
    </StyledHeader>
    <Routes>
      <Route path='/' element={<MainPage />}/>
      <Route path="/products" element={<Products products={DUMMY_PRODUCTS}/>}/>
      <Route path='/carts' element={<MyCart />}/>
      <Route path='/orders' element={<MyOrder />}/>
    </Routes>
    </>
  )
}

const StyledHeader = styled('header')`
    box-sizing: border-box;
    width: 100%;
    background-color: #02008d;
    height: 100px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &>h1{
        color: white;
    }
    &>nav{
        color: white;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 20px;
        text-decoration: none;
    }
`

const Link = styled(NavLink)`
  text-decoration: none;
  color:  white;
  margin-left: 100px;
`

export default Header
