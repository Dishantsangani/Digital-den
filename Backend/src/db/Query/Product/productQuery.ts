export const CREATE_PRODUCT = `INSERT INTO product (productname, price, category, productImage, stockquantity, taxrate, description) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
export const GET_PRODUCT = `SELECT * FROM  product`;
export const DELETE_PRODUCT = `DELETE FROM product WHERE ID = $1`;
