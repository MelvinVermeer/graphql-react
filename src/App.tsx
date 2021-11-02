import { gql, useQuery } from "@apollo/client";
import "./App.css";
import ProductCard from "./ProductCard";

const GET_PRODUCT = gql`
  query product($productId: String!) {
    product(id: $productId) {
      id
      name
      price
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { productId: "25" },
  });

  if (loading) return <p>Loading ⏳</p>;
  if (error) return <p>Error 😢</p>;

  return (
    <div style={{ marginLeft: "20px" }}>
      <h4>Returned json object</h4>
      <pre>{JSON.stringify(data.product, null, 2)}</pre>

      {/* Let's use this data in our component */}
      <ProductCard name={data.product.name} price={data.product.price} />
    </div>
  );
}

export default App;
