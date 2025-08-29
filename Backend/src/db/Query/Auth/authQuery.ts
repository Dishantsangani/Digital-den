export const SIGNUP_USER = `INSERT INTO users (firstname, lastname, phonenumber, email, password) VALUES($1, $2, $3, $4, $5) RETURNING *`;
export const SIGNIN_BY_EMAIL = `SELECT user_id, email, password FROM users WHERE email = $1 `;

// Forgot-Password
export const CHECK_USER_BY_EMAIL = `SELECT * FROM users WHERE email = $1 `;
export const INSERT_TOKEN = `INSERT INTO reset_tokens (email, token, expires_at) VALUES($1, $2, $3) `;
export const FIND_TOKEN = `SELECT * FROM reset_tokens WHERE token = $1`;
export const SET_PASSWORD = `UPDATE users SET password = $1 WHERE email = $2 RETURNING user_id, email, role`;
export const DELETE_TOKEN = `DELETE FROM reset_tokens WHERE token = $1`;
