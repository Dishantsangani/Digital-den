export const CREATE_PRODUCT = `INSERT INTO product (name, price, category, quantity, rate) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
export const GET_PRODUCT = `SELECT * FROM  product`;
