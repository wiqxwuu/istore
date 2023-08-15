import React from 'react'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'

const Button = () => {
  return (
    <>
    <StyledButton>
    <Link style={
        (props)=>{
            if(props.isActive){
                return {
                    color: '#0000ff67'
                }
            }
        }
    }
    to='/'
    >Go Back</Link>
    </StyledButton>
    </>
  )
}

const StyledButton = styled('button')`
    padding: 10px;
    color: white;
    background-color: cadetblue;
    border-radius: 20px;
    border: none;
`

const Link = styled(NavLink)`
    color: white;
    text-decoration: none;
`

export default Button
