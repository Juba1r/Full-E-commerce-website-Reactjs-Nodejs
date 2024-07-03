// Item.js
import './Item.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { cartActions } from '../Redux/Store';
import ProductDetails from '../ProductDetails/ProductDetails';

function Item() {
    const [userData, setData] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=5')
            .then((response) => {
                console.log(response);
                setData(response.data);
            });
    }, []);

    const viewDetails = (product) => {
        setSelectedProduct(product);
    };

    const closeDetails = () => {
        setSelectedProduct(null);
    };

    const addToCartHandler = (product) => {
        dispatch(cartActions.addToCart(product));
    };

    return (
        <div className="product-list">
            {userData.map((data) => {
                return (
                    <div key={data.id} className="product-item">
                        <img src={data.image} alt={data.title} className="product-image" />
                        <h2 className="product-title">{data.title}</h2>
                        <p className="product-price">${data.price}</p>
                        <p className="product-rating">Rating: {data.rating.rate}</p>
                        <button className="view-details-button" onClick={() => viewDetails(data)}>
                            View Details
                        </button>
                        <button className="add-to-cart-button" onClick={() => addToCartHandler(data)}>
                            Add to Cart
                        </button>
                    </div>
                );
            })}
            {selectedProduct && (
                <ProductDetails product={selectedProduct} onClose={closeDetails} />
            )}
        </div>
    );
}

export default Item;









            // <img src={props.image} alt="" />
            // <p>{props.name}</p>
            // <div className="item-prices">
            // <div className="item-price-new">
            //     ${props.new_price}
            // </div>
            // <div className="item-price-old">
            // ${props.old_price}
            // </div>
            // </div>