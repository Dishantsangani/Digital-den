export const CONTACT_QUERY = `INSERT INTO contact (name, email, message) VALUES ($1, $2, $3) RETURNING *`;
