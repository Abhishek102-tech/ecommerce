import "./FrontPage.css";
import Header from "./components/Header";
import Card from "./components/Card";

const products = [
    {
        title: "Ceramic Vase",
        description: "A beautiful ceramic vase for your home decor.",
        imageUrl: "https://images.unsplash.com/photo-1616628180680-1c3e5f8b6f9c",
        price: 29.99,
    },
    {
        title: "Wooden Cutting Board",
        description: "A durable wooden cutting board for your kitchen.",
        imageUrl: "https://images.unsplash.com/photo-1600180758895-1c3e5f8b6f9c",
        price: 19.99,
    },
    {
        title: "Stainless Steel Water Bottle",
        description: "A sleek stainless steel water bottle to keep your drinks cold.",
        imageUrl: "https://images.unsplash.com/photo-1616628180680-1c3e5f8b6f9c",
        price: 24.99,
    },
    {
        title: "Cotton Throw Blanket",
        description: "A soft cotton throw blanket for cozy evenings.",
        imageUrl: "https://images.unsplash.com/photo-1600180758895-1c3e5f8b6f9c",
        price: 39.99,
    },
    {
        title: "Ceramic Mug Set",
        description: "A set of ceramic mugs for your morning coffee.",
        imageUrl: "https://images.unsplash.com/photo-1616628180680-1c3e5f8b6f9c",
        price: 14.99,
    },
]

function FrontPage() {
    return (
    <main className="app-shell">
      <Header />
        <section className="product-grid">
            {products.map((product) => (
                <Card
                    key={product.title}
                    title={product.title}
                    description={product.description}
                    imageUrl={product.imageUrl}
                    price={product.price}
                />
            ))}
        </section>
    </main>
    )
}

export default FrontPage;