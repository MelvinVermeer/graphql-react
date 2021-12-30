import { OverviewPrimary } from "./OverviewPrimary";
import { OverviewSecondary } from "./OverviewSecondary";
import { isType } from "./GraphQLTypeGuard";
import { ProductQuery } from "./__generated__/gateway";

// This component is only function is to render the correct
// Overview component for the type (Primary / Secondary)
export function Overview(product: ProductQuery["product"]) {
  if (isType("Primary")(product)) {
    return <OverviewPrimary {...product} />;
  }

  return <OverviewSecondary {...product} />;
}
