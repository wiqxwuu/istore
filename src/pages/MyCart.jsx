import React from 'react'
import { styled } from 'styled-components'
import Button from '../components/Button'

export const MyCart = () => {
  return (
    <Container>
      <CartPage>
        <h1>My Cart Page</h1>
      </CartPage>
      <Button />
    </Container>
  )
}

const Container = styled('div')`
    box-sizing: border-box;
    background-color: #dfdfdf;
    width: 100%;
    min-height: 700px;
    padding: 30px 10%;
`

const CartPage = styled('div')`
    box-sizing: border-box;
    border: 1px solid black;
    background-color: white;
    width: 80%;
    height: 200px;
    border-radius: 12px;
    text-align: center;
    margin: 30px 10%;
    &>h1{
        font-weight: 500;
    }
`