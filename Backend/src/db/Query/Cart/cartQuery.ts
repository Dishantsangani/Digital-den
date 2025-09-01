export const ADD_TO_CART = `INSERT INTO cart (user_id) VALUES ($1) RETURNING *`;
export const FIND_CART = `SELECT * FROM cart WHERE user_id = $1`;
export const FIND_PRODUCT_PRICE = `SELECT price FROM product WHERE id = $1`;

export const ADD_TO_CART_ITEMS = `INSERT INTO cart_items (cart_id, product_id, quantity, price) VALUES ($1, $2, $3, $4) ON CONFLICT (cart_id, product_id) DO UPDATE SET quantity = cart_items.quantity + $3 RETURNING * ; `;
export const UPDATE_CART_PRICE = `UPDATE cart SET total_quantity = (SELECT SUM(quantity) FROM cart_items WHERE cart_id = $1), total_price = (SELECT SUM(quantity * price) FROM cart_items WHERE cart_id = $1) WHERE id = $1 `;

export const GET_CART_ITEMS = `SELECT c.id, c.quantity, c.price, (c.quantity * c.price) AS total_price,
p.productname AS name, p.productimage AS image
FROM cart_items AS C
JOIN product AS p ON c.product_id = p.id
WHERE c.cart_id = $1`;

export const DELETE_CART_ITEMS = `DELETE FROM cart_items WHERE id = $1 RETURNING *`;
export const UPDATE_CART_ITEMS = `UPDATE cart_items SET quantity = $2 WHERE id = $1 RETURNING *`;
export const FIND_CART_ITEMS = `SELECT cart_id FROM cart_items WHERE id = $1`;
export const GET_SUBTOTAL = `SELECT total_price FROM cart WHERE user_id = $1`;

//
// how many of this product the user already has in their cart
export const FIND_CART_ITEM_QTY = `
  SELECT quantity 
  FROM cart_items 
  WHERE cart_id = $1 AND product_id = $2
`;

// when updating a cart item by its id, we need its product to check stock
export const FIND_CART_ITEM_BY_ID = `
  SELECT cart_id, product_id 
  FROM cart_items 
  WHERE id = $1
`;
export const FIND_PRODUCT_STOCK = `SELECT stockquantity FROM product WHERE id = $1`;
