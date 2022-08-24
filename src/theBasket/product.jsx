import PropTypes from 'prop-types';

function Products(props) {
    const {item, price} = props;

    return (
        <div>
            <span>{item}: £{price} </span>
        </div>
    );
}

Products.propTypes = {
    item: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}
export default Products;