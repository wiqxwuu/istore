import React from 'react'
import { useParams } from 'react-router'
import { styled } from 'styled-components'
import { DUMMY_PRODUCTS } from '../components/Header'
import Button from '../components/Button'

export const ProductDetails = () => {

    const params = useParams()

    const productId = params.productId;

    const currentProduct = DUMMY_PRODUCTS.find(
        (product) => product.id === productId
    )

  return (
    <div style={{backgroundColor: 'darkgray', boxSizing: 'border-box', padding: '20px 10% 20px 10%'}}>
      <Cart key={currentProduct}>
        <img src={currentProduct.image} alt="" />
        <div>
          <h3>{currentProduct.title}</h3>
          <span style={{fontWeight: '700', color: 'darkblue'}}>${currentProduct.price}</span>
          <p>{currentProduct.info}</p>
          <Button></Button>
        </div>
      </Cart>
    </div>
  )
}

const Cart = styled('div')`
  box-sizing: border-box;
  width: 80%;
  padding: 20px;
  overflow: hidden;
  background-color: white;
  border-radius: 12px;
  height: 500px;
  display: flex;
  &>img{
    width: 300px;
    height: 500px;
  }
`