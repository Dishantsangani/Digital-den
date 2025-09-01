export const CONTACT_QUERY = `INSERT INTO contact (name, email, message) VALUES ($1, $2, $3) RETURNING *`;
export const GET_CONTACT_QUERY = `SELECT * FROM contact`;
