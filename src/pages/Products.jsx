import React from 'react'
import { styled } from 'styled-components'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

export const Products = ({products = []}) => {

  const navigate = useNavigate()

  const clickHandler = (cartId) => {
    navigate(`/products/${cartId}`, {
      state: 'I am from Products Page',
      replace: false,
    })
  }

  return (
    <>
    <Container>
        <ProductList>
        {products.map((cart)=>{
        return     <Cart onClick={()=> clickHandler(cart.id)}>
        <img src={cart.image} alt="" />
        <h3>{cart.title}</h3>
        <h4>${cart.price}</h4>
      </Cart>
        })}
        </ProductList>
        <Button style={{height: '20px'}} />
    </Container>
    </>
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

const Cart = styled('div')`
  box-sizing: border-box;
  width: 380px;
  padding: 20px;
  overflow: hidden;
  background-color: white;
  border-radius: 12px;
  height: 550px;
  margin: 20px;
  &>img{
    width: 300px;
    height: 400px;
  }
  &> h3, h4{
    text-decoration: none;
  }
`