export const PAYMENT_INSERT = `INSERT INTO payments (order_id, amount, method, status) VALUES ($1, (SELECT total_price FROM orders WHERE id = $1), 'stripe', 'success')`;
export const UPDATE_PAYMENT_STATUS = `UPDATE orders SET status = 'paid' WHERE id = $1`;
