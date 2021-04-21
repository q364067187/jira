export const cleanObj = (obj) => {
  const o = Object.assign({}, obj);
  Object.keys(o).forEach((i) => {
    if (obj[i] == null || obj[i] === "") {
      delete o[i];
    }
  });
  return o;
};
