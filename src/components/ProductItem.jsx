import React, { useContext } from 'react'
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';
import btAddToCart from '@icons/bt_add_to_cart.svg';
import btAddedToCart from '@icons/bt_added_to_cart.svg';

const ProductItem = ({ product }) => {
    const { state, addToCart } = useContext(AppContext);

    const handleCart = item => {
      addToCart(item);
    }

  return (
    <div className="product-card">
          <img
            src={product.images[0]}
            alt={product.title}
          />
          <div className="product-info">
            <div>
              <p>${product.price}</p>
              <p>{product.title}</p>
            </div>
            <figure onClick={() => handleCart(product)}>
              { 
                state.cart.includes(product) 
                  ? 
                <img src={btAddedToCart} alt="item added to cart" disabled/> 
                  : 
                <img src={btAddToCart} alt="button add to cart" />
              }
            </figure>
          </div>
        </div>
  )
}

export default ProductItem