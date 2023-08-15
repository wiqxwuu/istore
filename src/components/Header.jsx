import React from 'react'
import { styled } from 'styled-components'

const Header = () => {
  return (
    <StyledHeader>
      <h1>iStore</h1>

      <ul>
        <li>Products</li>
        <li>My Cart</li>
        <li>My Order</li>
      </ul>
    </StyledHeader>
  )
}

const StyledHeader = styled('header')`
    box-sizing: border-box;
    width: 100%;
    background-color: #7fe1ff;
    height: 100px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &>h1{
        color: white;
    }
    &>ul{
        list-style: none;
        color: white;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 20px;
    }
    &>ul>li{
        margin-left: 100px;
    }
`

export default Header
