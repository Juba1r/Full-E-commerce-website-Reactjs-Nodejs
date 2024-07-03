import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../Redux/Store';
import PropTypes from 'prop-types';

function Cart({ onClose }) {
    const cartItems = useSelector((state) => state.cart.items);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const dispatch = useDispatch();

    const removeItemHandler = (id) => {
        dispatch(cartActions.removeFromCart(id));
    };

    return (
        <div className="cart-overlay">
            <div className="cart">
                <h2>Your Cart</h2>
                <button className="close-cart-button" onClick={onClose}>Close</button>
                {totalQuantity === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul className="cart-items">
                        {cartItems.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3>{item.title}</h3>
                                    <p>Price: ${item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <button className="remove-item-button" onClick={() => removeItemHandler(item.id)}>
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Cart;
