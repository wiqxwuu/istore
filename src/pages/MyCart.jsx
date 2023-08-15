import React from 'react'
import { styled } from 'styled-components'

export const MyCart = () => {
  return (
    <Container>
      <div>My Cart</div>
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

const CartPage = styled('div')`
    background-color: white;
    width: 80%;
`