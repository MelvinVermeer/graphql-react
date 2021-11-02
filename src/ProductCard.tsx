import React, { FC } from "react";

type ProductCardPropTypes = {
  name: string;
  price: number;
};

const ProductCard: FC<ProductCardPropTypes> = ({ name, price }) => {
  return (
    <h2>
      {name} for ${price / 100}
    </h2>
  );
};

export default ProductCard;
