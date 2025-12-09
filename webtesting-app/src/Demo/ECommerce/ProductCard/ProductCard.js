import { useState } from 'react';
import './ProductCard.scss';
import { Button, InputNumber, Modal } from 'antd';

function ProductCard(props) {
    const { id, title, price, image, rating, description, onAddToCart } = props;
    const [showProductModal, setShowProductModal] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        if (onAddToCart) {
            onAddToCart({ id, title, price, image, description }, quantity);
        }
        setShowProductModal(false);
        setQuantity(1);
    };

  return (
    <div className="productCard">
        <div className="imageWrapper">
            <img src={image} alt={title} />
        </div>
        <div className="productDetails">
            <span className="title">{title}</span>
            <span className="price">${price}</span>
            <span className="rating">Rating: {rating.rate}</span>
        </div>
        <div className="actionButton">
            <Button className="addToCartButton" onClick={handleAddToCart}>Add to Cart</Button>
            <Button className="viewButton" onClick={() => setShowProductModal(true)}>View</Button>
        </div>
        <Modal
            title={title}
            open={showProductModal}
            onCancel={() => { setShowProductModal(false); setQuantity(1); }}
            className="productModal"
            footer={[
                <Button key="cancel" onClick={() => { setShowProductModal(false); setQuantity(1); }}>Cancel</Button>,
                <Button key="addToCart" type="primary" className="modalAddToCartButton" onClick={handleAddToCart}>Add to Cart</Button>
            ]}
        >
            <div className="productModalContent">
                <div className="productImageSection">
                    <img src={image} alt={title} />
                </div>
                <div className="productInfoSection">
                    <p className="productDescription">{description}</p>
                    <span className="productPrice">${price}</span>
                    <div className="quantitySection">
                        <span>Quantity:</span>
                        <InputNumber min={1} max={10} value={quantity} onChange={(value) => setQuantity(value)} />
                    </div>
                </div>
            </div>
        </Modal>
    </div>
  )
}

export default ProductCard