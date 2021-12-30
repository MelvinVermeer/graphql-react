/** generic type guard for GraphQL types usage: isType("Primary")(product) */
export const isType =
  <T extends string>(typename: T) =>
  <D extends { __typename: string }>(
    data: D
  ): data is Extract<D, { __typename: T }> =>
    data.__typename === typename;

// Depending on personal preference and use case you could also implement as follows:

/** generic type guard for GraphQL types usage: isType(product, "Primary") */
// export const isType = <
//   T extends D["__typename"],
//   D extends { __typename: string }
// >(
//   data: D,
//   typename: T
// ): data is Extract<D, { __typename: T }> => data.__typename === typename;
