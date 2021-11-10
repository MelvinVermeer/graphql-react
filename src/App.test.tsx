import TestRenderer, { act } from "react-test-renderer";
import { MockedProvider } from "@apollo/client/testing";
import {
  ProductDocument,
  ProductQuery,
  ProductQueryVariables,
} from "./__generated__/gateway";
import App from "./App";
import { wait } from "@testing-library/react";
import { DocumentNode } from "@apollo/client";

type Mock = {
  request: {
    query: DocumentNode;
    variables: ProductQueryVariables;
  };
  result: {
    data: ProductQuery;
  };
};

const mocks: Mock[] = [
  {
    request: {
      query: ProductDocument,
      variables: {
        productId: "25",
      },
    },
    result: {
      data: {
        product: {
          id: "25",
          price: 1999,
          name: "Car",
        },
      },
    },
  },
];

it("renders loading", () => {
  const component = TestRenderer.create(
    <MockedProvider mocks={mocks}>
      <App />
    </MockedProvider>
  );

  const content = component.root.findByType("p");
  expect(content.children.join("")).toContain("Loading ⏳");
});

it("renders product", async () => {
  const component = TestRenderer.create(
    <MockedProvider mocks={mocks}>
      <App />
    </MockedProvider>
  );

  await act(wait);

  const content = component.root.findByType("h2");
  expect(content.children.join("")).toContain("Car for $19.99");
});
