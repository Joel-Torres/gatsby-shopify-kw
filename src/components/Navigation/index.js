import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import logo from '../images/kw-logo-sm.png'
import logoXxs from '../images/kw-logo-xxs.png'

import StoreContext from '~/context/StoreContext'
import {
	CartCounter, 
	Container,
	MenuLogo,
	MenuLogoXxs,
	MenuLink,
	Wrapper
} from './styles'

const useQuantity = () => {
	const { store: {checkout} } = useContext(StoreContext)
	const items = checkout ? checkout.lineItems : []
	const total = reduce(items, (acc, item) => acc + item.quantity, 0)
	return [total !== 0, total]
}

const Navigation = ({ siteTitle }) => {
  const [hasItems, quantity] = useQuantity()

	return(
		<Wrapper>
			<Container>
			
				<MenuLogo to='/'>
				<img src={logo} alt="" />
					{/* {siteTitle} */}
				</MenuLogo>
				<MenuLogoXxs to='/'>
					<img src={logoXxs} alt="" />
				</MenuLogoXxs>
				<MenuLink to='/cart'>
					{hasItems &&
						<CartCounter>
							{quantity}
						</CartCounter>
					}
					Cart 🛍
				</MenuLink>
			</Container>
		</Wrapper>
	)
}

Navigation.propTypes = {
	siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
	siteTitle: ``,
}

export default Navigation
