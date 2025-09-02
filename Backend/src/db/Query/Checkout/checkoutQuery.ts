export const INSERT_ORDER_QUERY = ` INSERT INTO orders (user_id, total_price, addressline, city, state, zipcode) VALUES ($1, $2, $3, $4, $5, $6) RETURNING * ; `;

export const GET_USER_CART_ITEMS_FOR_CHECKOUT_QUERY = `
SELECT 
    p.productname,
    ci.quantity,
    ci.price,
    (ci.quantity * ci.price)::numeric(10,2) AS sub_total,
    ((ci.quantity * ci.price) * (p.taxrate / 100.0))::numeric(10,2) AS discount,
    ((ci.quantity * ci.price) - ((ci.quantity * ci.price) * (p.taxrate / 100.0)))::numeric(10,2) AS final_price
FROM cart_items ci
JOIN product p ON ci.product_id = p.id
WHERE ci.cart_id = (SELECT id FROM cart WHERE user_id = $1)`;

export const GET_CART_TOTAL_QUERY = `SELECT 
SUM((ci.quantity * ci.price) - ((ci.quantity * ci.price) * (p.taxrate / 100.0)))::numeric(10,2) AS total_final
FROM cart_items ci
JOIN product p ON ci.product_id = p.id
WHERE ci.cart_id = (SELECT id FROM cart WHERE user_id = $1) `;

export const INSERT_ORDER_ITEM_QUERY = `INSERT INTO order_items (order_id, product_id, quantity, price, discount, sub_total) VALUES ($1, $2, $3, $4, $5, $6) `;

export const CLEAR_USER_CART_QUERY = `DELETE FROM cart_items WHERE cart_id IN (SELECT id FROM cart WHERE user_id = $1)`;

export const GET_USER_CART_QUERY = `SELECT 
    ci.product_id,
    ci.quantity,
    ci.price,
    ((ci.quantity * ci.price) * (p.taxrate / 100.0))::numeric(10,2) AS discount,
    ((ci.quantity * ci.price) - ((ci.quantity * ci.price) * (p.taxrate / 100.0)))::numeric(10,2) AS sub_total
  FROM cart_items ci
  JOIN cart c ON ci.cart_id = c.id
  JOIN product p ON ci.product_id = p.id
  WHERE c.user_id = $1 `;

export const UPDATE_PRODUCT_QUANTITY_QUERY = `UPDATE product SET stockquantity  = stockquantity  - $1 WHERE id = $2 AND stockquantity  >= $1 RETURNING *; `;
