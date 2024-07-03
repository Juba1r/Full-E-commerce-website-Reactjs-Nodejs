
import './ProductDetails.css';
import PropTypes from 'prop-types';

function ProductDetails({ product, onClose }) {
    return (
        <div className="product-details">
            <div className="details-content">
                <img src={product.image} alt={product.title} className="details-image" />
                <h2 className="details-title">{product.title}</h2>
                <p className="details-price">${product.price}</p>
                <p className="details-rating">Rating: {product.rating.rate}</p>
                <p className="details-description">{product.description}</p>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

ProductDetails.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.shape({
            rate: PropTypes.number.isRequired
        }).isRequired,
        description: PropTypes.string.isRequired
    }).isRequired,
    onClose: PropTypes.func.isRequired
};

export default ProductDetails;
