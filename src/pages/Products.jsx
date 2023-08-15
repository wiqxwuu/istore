import React from 'react'
import { styled } from 'styled-components'
import ProductCart from '../components/ProductCart'
import Button from '../components/Button'

export const Products = ({products = []}) => {
  return (
    <Container>
        <ProductList>
        {products.map((cart)=>{
        return <ProductCart key={cart.id} cart={cart} />
        })}\
        </ProductList>
      <Button style={{height: '20px'}} />
    </Container>
  )
}

const Container = styled('div')`
    box-sizing: border-box;
    background-color: #dfdfdf;
    width: 100%;
    min-height: 700px;
`

const ProductList = styled('div')`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`