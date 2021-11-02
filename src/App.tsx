import "./App.css";
import ProductCard from "./ProductCard";
import { useProductQuery } from "./__generated__/gateway";

function App() {
  const { loading, error, data } = useProductQuery({
    variables: { productId: "25" }, // Try to make a typo now
  });

  if (loading) return <p>Loading ⏳</p>;
  if (error) return <p>Error 😢</p>;
  if (!data) return <p>No data 😢</p>;

  return (
    <div style={{ marginLeft: "20px" }}>
      <h4>Returned json object</h4>
      <pre>{JSON.stringify(data.product, null, 2)}</pre>

      <ProductCard name={data.product.name} price={data.product.price} />
    </div>
  );
}

export default App;
