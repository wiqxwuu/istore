import React from 'react'
import { styled } from 'styled-components'

const ProductCart = ({ cart }) => {
  return (
    <Cart>
      <img src={cart.image} alt="" />
      <h1>{cart.title}</h1>
      <h3>${cart.price}</h3>
    </Cart>
  )
}

const Cart = styled('div')`
  box-sizing: border-box;
  width: 25%;
  height: 500px;
  padding: 20px;
  overflow: hidden;
  border-radius: 12px;
  &>img{
    width: 100px;
    height: 300px;
  }
`
export default ProductCart
