import React from 'react'
import { styled } from 'styled-components'

export const MyOrder = () => {
  return (
    <Container>
      <OrderPage>
        <h1>My Order Page</h1>
      </OrderPage>
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

const OrderPage = styled('div')`
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