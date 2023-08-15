import React from 'react'
import { styled } from 'styled-components'
import ProductCart from '../components/ProductCart'

export const Products = ({products = []}) => {
  return (
    <Container>
      {products.map((cart)=>{
        return <ProductCart key={cart.id} cart={cart} />
      })}
    </Container>
  )
}

const Container = styled('div')`
    box-sizing: border-box;
    background-color: #dfdfdf;
    width: 100%;
    min-height: 700px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`