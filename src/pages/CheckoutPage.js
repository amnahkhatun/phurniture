import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  return <main>
    <PageHero title="checkout" />
    <Wrapper className="page">
      <h3>I have been too lazy to heheehcomplete this, but I promise it will be up soon 😇</h3>
    </Wrapper>
  </main>
}
const Wrapper = styled.div``
export default CheckoutPage
