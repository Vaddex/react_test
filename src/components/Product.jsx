// src/components/Product.jsx
import PropTypes from 'prop-types';
import { IoMdBasket } from 'react-icons/io';

const nameStyle = {
    margin: 10,
    padding: '12px 16px',
    borderRadius: 4,
    backgroundColor: 'gray',
    color: 'white',
};

export const Product = ({
    name,
    imgUrl = 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
    price,
}) => (
    <div>
        <h2 style={nameStyle}>
            <IoMdBasket className="my-icon" />
            {name}
        </h2>
        <img src={imgUrl} alt={name} width="480" />
        <p>Price: {price} credits</p>
    </div>
);

Product.propTypes = {
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string,
    price: PropTypes.number.isRequired,
};

export default Product;
