
export const addFilter = name => {
  return {
    type: "filter/add",
    payload: name,
  };
};