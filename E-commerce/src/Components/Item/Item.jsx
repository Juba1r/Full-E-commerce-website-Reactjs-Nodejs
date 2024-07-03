import './Item.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Item() {
    const [userData, setData] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=5')
            .then((response) => {
                console.log(response);
                setData(response.data);
            });
    }, []);

    
    return (
        <div className="product-list">
            {userData.map((data) => {
                return (
                    <div key={data.id} className="product-item">
                        <img src={data.image} alt={data.title} className="product-image" />
                        <h2 className="product-title">{data.title}</h2>
                        <p className="product-price">${data.price}</p>
                        <p className="product-rating">Rating: {data.rating.rate}</p>
                        {/* <p className="product-description">{data.description}</p> */}
                        <button className="add-to-cart-button">
                            Add to Cart
                        </button>
                    </div>
                );
            })}
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