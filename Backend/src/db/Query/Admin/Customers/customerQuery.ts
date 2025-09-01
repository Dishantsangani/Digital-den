export const ALL_CUSTOMER = `
SELECT 
    u.firstname,
	u.lastname,
    u.email,
    u.phonenumber,
    COUNT(o.id) AS total_orders,
    COALESCE(SUM(o.total_price), 0) AS total_amount
FROM users u
LEFT JOIN orders o ON o.user_id = u.user_id
GROUP BY u.user_id, u.firstname, u.lastname, u.email, u.phonenumber
ORDER BY u.firstname;
`;
