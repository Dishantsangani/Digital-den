export const SIGNUP_USER = `INSERT INTO users (firstname, lastname, phonenumber, email, password) VALUES($1, $2, $3, $4, $5) RETURNING *`;
export const SIGNIN_BY_EMAIL = `SELECT email, password FROM users WHERE email = $1 `;
