import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.div`
  background: white;
  margin-bottom: 1.45rem;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1.45rem;
  margin: 0 auto;
  max-width: 960px;
`

export const MenuLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;

  @media (max-width: ${breakpoints.s}px){
    font-size: 1.4rem
  }
`
export const MenuLogo = styled(Link)`
  
@media (max-width: ${breakpoints.s}px){
    display: none
  }
`
export const MenuLogoXxs = styled(Link)`
  
@media (max-width: ${breakpoints.xxs}px){
  visibility: visible;
  }

  @media (min-width: ${breakpoints.s}px){
    visibility: hidden;
    }
`

export const CartCounter = styled.span`
  background-color: white;
  color: #663399;
  border-radius: 20px;
  padding: 0 10px;
  font-size: 1.2rem;
  float: right;
  margin: -10px;
  z-index: 20;
`

    
     
        
          
            
              