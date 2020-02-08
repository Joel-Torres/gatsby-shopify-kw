import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/* <h1>Kaliwood Designs</h1>
    <p>Welcome to Kaliwood Designs built for you</p> */}
    <ProductGrid />
    <Link to="/">Go to home..</Link>
  </>
)

export default IndexPage
