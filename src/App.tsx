import { gql, useQuery } from "@apollo/client";
import "./App.css";
import ProductCard from "./ProductCard";
import { Product } from "./__generated__/gateway";

// inspect the schema on https://studio.apollographql.com/sandbox/schema/sdl
const GET_PRODUCT = gql`
  query product($productId: String!) {
    product(id: $productId) {
      id
      name
      price # comment this field to show the issue
    }
  }
`;

function App() {
  // As a first step we could provide a Type Argument <{ product: Product }>
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { productId: "25" }, // A typo here is easily made..
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
