import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@styles/shopping-cart.scss'
import icon_close from '@icons/icon_close.png';

const OrderItem = ({product}) => {
	const { removeFromCart } = useContext(AppContext);

	const handleDelete = product => {
		removeFromCart(product)
	}
	return (
		<div className="shopping-cart">
			<figure>
				<img src={product.images[0]} alt="bike" />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={icon_close} alt="close" onClick={() => handleDelete(product)}/>
		</div>
	);
}

export default OrderItem;