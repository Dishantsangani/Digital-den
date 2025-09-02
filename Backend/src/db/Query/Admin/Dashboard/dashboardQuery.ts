export const GET_ALL_DASHBOARD_PRODUCT = `
  SELECT 
    (SELECT COUNT(*) FROM product) AS total_products,
    (SELECT COUNT(*) FROM orders) AS total_orders,
    (SELECT COUNT(*) FROM users) AS total_customer,
    (SELECT COUNT(*) FROM contact) AS total_enquiry,
    (SELECT SUM(total_price) FROM orders) AS total_income
`;
