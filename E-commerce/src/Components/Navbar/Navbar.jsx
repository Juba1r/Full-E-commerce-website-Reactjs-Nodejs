import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cart from '../Cart/Cart';

function Navbar() {
    const [menu, setMenu] = useState("shop");
    const [isCartOpen, setIsCartOpen] = useState(false);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);

    const openCartHandler = () => {
        setIsCartOpen(true);
    };

    const closeCartHandler = () => {
        setIsCartOpen(false);
    };

    return (
        <>
            <div className='navbar'>
                <div className="nav-logo">
                    <img src={logo} alt="Logo" />
                    <p>SHOPPER</p>
                </div>

                <ul className="nav-menu">
                    <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none' }} to="womens">Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
                </ul>

                <div className="nav-login-cart">
                    <Link to='/login'><button>Login</button></Link>
                    <img src={cart_icon} alt="Cart" onClick={openCartHandler} style={{ cursor: 'pointer' }} />
                    <div className="nav-cart-count">{totalQuantity}</div>
                </div>
            </div>

            {isCartOpen && <Cart onClose={closeCartHandler} />}
        </>
    );
}

export default Navbar;
