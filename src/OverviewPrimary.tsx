import { PrimaryFieldsFragment } from "./__generated__/gateway";

export function OverviewPrimary(product: PrimaryFieldsFragment) {
  return (
    <h3>
      {product.name} Iso type: {product.isoType}
    </h3>
  );
}
