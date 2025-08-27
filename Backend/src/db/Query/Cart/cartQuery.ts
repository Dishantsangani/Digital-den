export const ADD_TO_CART = `INSERT INTO cart (user_id) VALUES ($1) RETURNING *`;
export const FIND_CART = `SELECT * FROM cart WHERE user_id = $1`;
export const FIND_PRODUCT_PRICE = `SELECT price FROM product WHERE id = $1`;

export const ADD_TO_CART_ITEMS = `INSERT INTO cart_items (cart_id, product_id, quantity, price) VALUES ($1, $2, $3, $4) ON CONFLICT (cart_id, product_id) DO UPDATE SET quantity = cart_items.quantity + $3 `;
export const UPDATE_CART_PRICE = `UPDATE cart SET total_quantity = (SELECT SUM(quantity) FROM cart_items WHERE cart_id = $1), total_price =(SELECT SUM(quantity * price) FROM cart_items WHERE cart_id = $1) WHERE id = $1 `;

export const GET_CART_ITEMS = `SELECT c.id, c.quantity, c.price, (c.quantity * c.price) AS total_price,
p.productname AS name
FROM cart_items AS C
JOIN product AS p ON c.product_id = p.id
WHERE c.cart_id = $1`;
