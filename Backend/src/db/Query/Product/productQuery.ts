export const CREATE_PRODUCT = `INSERT INTO product (productname, price, category, productImage, stockquantity, taxrate, description) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
export const GET_PRODUCT = `SELECT * FROM  product`;
export const RESTOCK_PRODUCT = `UPDATE product SET stockquantity = stockquantity + $2 WHERE id = $1 RETURNING *`;

export const CHECK_PRODUCT_IN_ORDER_ITEMS = `SELECT 1 FROM order_items WHERE product_id = $1 LIMIT 1`;
export const DELETE_PRODUCT_FROM_CART_ITEMS = `DELETE FROM cart_items WHERE product_id = $1`;
export const DELETE_PRODUCT = `DELETE FROM product WHERE ID = $1`;
