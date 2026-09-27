import "./FrontPage.css";
import Card from "./components/Card";
import { products } from "./products";

function FrontPage({ products: productList = products, onAddToCart, onViewCart }) {
    return (
    <>
        <section className="storefront-intro">
            <div>
                <p className="eyebrow">The everyday edit</p>
                <h1>Small things, <em>beautifully</em> chosen.</h1>
                <p className="intro-copy">Useful, well-made pieces for the rituals that make home feel like yours.</p>
            </div>
            <button className="intro-link" type="button" onClick={onViewCart}>
                <span>View your bag</span>
                <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
            </button>
        </section>
        <section className="product-grid">
            {productList.map((product) => (
                <Card
                    key={product.title}
                    title={product.title}
                    description={product.description}
                    imageUrl={product.imageUrl}
                    price={product.price}
                    onAddToCart={(quantity) => onAddToCart(product, quantity)}
                />
            ))}
        </section>
    </>
    )
}

export default FrontPage;