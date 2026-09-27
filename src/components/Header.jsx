import "./Header.css";
import { Link } from "react-router";

function Header({ cartCount = 0, onCartClick }) {
    return (
    <header className="site-header">
        <div className="announcement">Thoughtful products for everyday living <span>•</span> Free shipping over $50</div>
        <div className="header-main">
            <Link className="brand" to="/" aria-label="KindredCart home">
                <span className="brand-mark">KC</span>
                <span className="brand-copy">
                    <strong>KindredCart</strong>
                    <small>Curated everyday goods</small>
                </span>
            </Link>

            <form className="search">
                <span className="material-symbols-outlined search-icon" aria-hidden="true">search</span>
                <input type="search" placeholder="Search products" aria-label="Search products" />
                <button className="search-button" type="submit">Search</button>
            </form>

            <button className="cart-button" type="button" aria-label={`Shopping cart, ${cartCount} items`} onClick={onCartClick}>
                <span className="material-symbols-outlined" aria-hidden="true">shopping_bag</span>
                <span className="cart-label">Cart</span>
                <span className="cart-count">{cartCount}</span>
            </button>
        </div>
        <nav className="category-nav" aria-label="Product categories">
            <a href="#new" data-text="New arrivals">New arrivals</a>
            <a href="#home" data-text="Home">Home</a>
            <a href="#lifestyle" data-text="Lifestyle">Lifestyle</a>
            <a href="#gifts" data-text="Gifts">Gifts</a>
        </nav>
    </header>
    )
}

export default Header;