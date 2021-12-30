import "./App.css";
import { Overview } from "./Overview";
import { useProductQuery } from "./__generated__/gateway";

export default function App() {
  const { loading, error, data } = useProductQuery({
    variables: { productId: "125" }, // Try switching above and below 100
  });

  if (loading) return <p>Loading ⏳</p>;
  if (error) return <p>Error 😢</p>;
  if (!data) return <p>No data 😢</p>;

  return <Overview {...data.product} />;
}
