import React from 'react'
import { styled } from 'styled-components'
import ProductCart from '../components/ProductCart'

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
    {
        title: 'Смартфон Apple iPhone 14 128GB CA',
        price: 69700,
        id: 'e4zodm1vp',
        image: 'https://softech.kg/image/cache/d871f069c929794a42d44fbe69c4c151.jpg',
    },
  ]

export const Products = ({products = DUMMY_PRODUCTS}) => {
  return (
    <Container>
      {products.map((cart)=>{
        return <ProductCart cart={cart} />
      })}
    </Container>
  )
}

const Container = styled('div')`
    box-sizing: border-box;
    background-color: #dfdfdf;
    width: 100%;
    min-height: 700px;
`