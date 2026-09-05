import "./FrontPage.css";
import Header from "./components/Header";
import Card from "./components/Card";
import ceramicVaseImage from "./assets/ceramicVase.webp";
import woodenCuttingBoardImage from "./assets/woodenCuttingBoard.jpg";
import stainlessSteelWaterBottleImage from "./assets/stainlessStellBottle.webp";
import cottonThrowBlanketImage from "./assets/CottonBlanket.jpg";
import ceramicMugSetImage from "./assets/CeramicMugSet.jpg";


const products = [
    {
        title: "Ceramic Vase",
        description: "A beautiful ceramic vase for your home decor.",
        imageUrl: ceramicVaseImage,
        price: 29.99,
    },
    {
        title: "Wooden Cutting Board",
        description: "A durable wooden cutting board for your kitchen.",
        imageUrl: woodenCuttingBoardImage,
        price: 19.99,
    },
    {
        title: "Stainless Steel Water Bottle",
        description: "A sleek stainless steel water bottle to keep your drinks cold.",
        imageUrl: stainlessSteelWaterBottleImage,
        price: 24.99,
    },
    {
        title: "Cotton Throw Blanket",
        description: "A soft cotton throw blanket for cozy evenings.",
        imageUrl: cottonThrowBlanketImage,
        price: 39.99,
    },
    {
        title: "Ceramic Mug Set",
        description: "A set of ceramic mugs for your morning coffee.",
        imageUrl: ceramicMugSetImage,
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