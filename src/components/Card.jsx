import "./Card.css";
import { useState } from "react";

function Card({ title, description, imageUrl, price, onAddToCart }) {
    const [quantity, setQuantity] = useState(1);

    return(
        <div className="card">
            <img src={imageUrl} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <p className="card-price">${price.toFixed(2)}</p>
            <label className="quantity-selector" htmlFor={`quantity-${title}`}>
                Quantity
                <select
                    id={`quantity-${title}`}
                    value={quantity}
                    onChange={(event) => setQuantity(Number(event.target.value))}
                >
                    {Array.from({ length: 10 }, (_, index) => index + 1).map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </label>
            <button type="button" onClick={() => onAddToCart(quantity)}>Add to bag</button>
        </div>
    )
}

export default Card;