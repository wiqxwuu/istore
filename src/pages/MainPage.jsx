import React from 'react'
import { styled } from 'styled-components'
import Button from '../components/Button'

export const MainPage = () => {
  return (
    <Container>
      <h1>MainPage</h1>
      <Button style={{color: 'white'}}/>
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