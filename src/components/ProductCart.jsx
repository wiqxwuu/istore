import React from 'react'
import { styled } from 'styled-components'

const ProductCart = ({ cart }) => {
  return (
    <Cart>
      <img src={cart.image} alt="" />
      <h3>{cart.title}</h3>
      <h4>${cart.price}</h4>
    </Cart>
  )
}

const Cart = styled('div')`
  box-sizing: border-box;
  padding: 20px;
  overflow: hidden;
  background-color: white;
  border-radius: 12px;
  width: 30%;
  height: 550px;
  margin: 20px;
  &>img{
    width: 300px;
    height: 400px;
  }
`
export default ProductCart
