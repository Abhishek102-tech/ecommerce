import "./CheckOutCard.css";

function CheckOutCard({ title, description, imageUrl, price, quantity, onUpdateQuantity }) {
    return (
        <div className="checkout-card">
            <img src={imageUrl} alt={title} className="checkout-card-image" />
            <div className="checkout-card-details">
                <h2 className="checkout-card-title">{title}</h2>
                <p className="checkout-card-description">{description}</p>
                <p className="checkout-card-price">${price.toFixed(2)}</p>
            </div>
            <div className="checkout-card-controls">
                <label htmlFor={`checkout-quantity-${title}`}>Qty</label>
                <select id={`checkout-quantity-${title}`} value={quantity} onChange={(event) => onUpdateQuantity(title, Number(event.target.value))}>
                    {Array.from({ length: 10 }, (_, index) => index + 1).map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
                <strong>${(price * quantity).toFixed(2)}</strong>
            </div>
        </div>
    );
}

export default CheckOutCard;