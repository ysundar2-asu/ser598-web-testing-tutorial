import React from 'react';
import './ProductCard.scss';
import { Button } from 'antd';

function ProductCard(props) {
    const { title, price, image, rating } = props;
  return (
    <div className="productCard">
        <div className="imageWrapper">
            <img src={image} alt={title} />
        </div>
        <div className="productDetails">
            <span className="title">{title}</span>
            <span className="price">${price}</span>
            <span className="rating">2</span>
        </div>
        <div className="actionButton">
            <Button className="addToCartButton">Add to Cart</Button>
            <Button className="viewButton">View</Button>
        </div>
    </div>
  )
}

export default ProductCard