export const ADMIN_AUTH_QUERY = `SELECT user_id, email, password, role  FROM users WHERE email = $1 `;
