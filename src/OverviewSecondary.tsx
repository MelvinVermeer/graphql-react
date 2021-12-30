import { SecondaryFieldsFragment } from "./__generated__/gateway";

export function OverviewSecondary(product: SecondaryFieldsFragment) {
  return (
    <h3>
      {product.name} description: {product.description}
    </h3>
  );
}
