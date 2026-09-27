import "./CheckOut.css";
import { useState } from "react";
import CheckOutCard from "./components/checkOutCard";

function CheckOut({ cart, onUpdateQuantity, onContinueShopping }) {
    const [delivery, setDelivery] = useState("standard");
    const [submitted, setSubmitted] = useState(false);
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const shipping = subtotal >= 50 || delivery === "express" ? (delivery === "express" ? 12 : 0) : 6;
    const total = subtotal + shipping;

    if (submitted) {
        return (
            <section className="checkout-success">
                <span className="material-symbols-outlined" aria-hidden="true">task_alt</span>
                <p className="eyebrow">Order received</p>
                <h1>Thank you for choosing thoughtfully.</h1>
                <p>Your order is being prepared with care. We will send delivery updates to your inbox.</p>
                <button type="button" onClick={onContinueShopping}>Continue shopping</button>
            </section>
        );
    }

    return (
        <section className="checkout-section">
            <div className="checkout-heading">
                <div>
                    <p className="eyebrow">Your bag</p>
                    <h1>Review your order</h1>
                </div>
                <button className="text-button" type="button" onClick={onContinueShopping}><span className="material-symbols-outlined" aria-hidden="true">arrow_back</span>Keep shopping</button>
            </div>
            {cart.length === 0 ? (
                <div className="empty-cart">
                    <span className="material-symbols-outlined" aria-hidden="true">shopping_bag</span>
                    <h2>Your bag is waiting.</h2>
                    <p>Add something useful and lovely, then come back here to check out.</p>
                    <button type="button" onClick={onContinueShopping}>Browse the collection</button>
                </div>
            ) : (
                <div className="checkout-layout">
                    <div className="checkout-items">
                        {cart.map((item) => <CheckOutCard key={item.title} {...item} onUpdateQuantity={onUpdateQuantity} />)}
                        <fieldset className="delivery-options">
                            <legend>Delivery speed</legend>
                            <label className={delivery === "standard" ? "selected" : ""}>
                                <input type="radio" name="delivery" value="standard" checked={delivery === "standard"} onChange={() => setDelivery("standard")} />
                                <span><strong>Standard delivery</strong><small>3-5 business days</small></span>
                                <b>{subtotal >= 50 ? "Free" : "$6.00"}</b>
                            </label>
                            <label className={delivery === "express" ? "selected" : ""}>
                                <input type="radio" name="delivery" value="express" checked={delivery === "express"} onChange={() => setDelivery("express")} />
                                <span><strong>Express delivery</strong><small>1-2 business days</small></span>
                                <b>$12.00</b>
                            </label>
                        </fieldset>
                    </div>
                    <aside className="order-summary">
                        <p className="eyebrow">At a glance</p>
                        <h2>Order summary</h2>
                        <div className="summary-row"><span>Subtotal</span><strong>${subtotal.toFixed(2)}</strong></div>
                        <div className="summary-row"><span>Shipping</span><strong>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</strong></div>
                        <div className="summary-total"><span>Total</span><strong>${total.toFixed(2)}</strong></div>
                        <button className="checkout-button" type="button" onClick={() => setSubmitted(true)}>Place order <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span></button>
                        <p className="secure-note"><span className="material-symbols-outlined" aria-hidden="true">lock</span> Secure checkout · taxes calculated at payment</p>
                    </aside>
                </div>
            )}
        </section>
    )
}

export default CheckOut;