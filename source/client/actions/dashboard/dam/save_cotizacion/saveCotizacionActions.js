export const INCREMENTO_PRODUCTO = 'INCREMENTO_PRODUCTO';
export const incrementoProducto = () => ({
  type: INCREMENTO_PRODUCTO,
  message: 'incremento producto',
});

export const DECREMENTO_PRODUCTO = 'DECREMENTO_PRODUCTO';
export const decrementoProducto = () => ({
  type: DECREMENTO_PRODUCTO,
  message: 'decremento producto',
});
