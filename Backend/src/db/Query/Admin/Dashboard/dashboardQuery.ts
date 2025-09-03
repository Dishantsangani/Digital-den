export const GET_ALL_DASHBOARD_PRODUCT = `
  SELECT 
    (SELECT COUNT(*) FROM product) AS total_products,
    (SELECT COUNT(*) FROM orders) AS total_orders,
    (SELECT COUNT(*) FROM users) AS total_customer,
    (SELECT COUNT(*) FROM contact) AS total_enquiry,
    (SELECT SUM(total_price) FROM orders) AS total_income
`;

export const MOST_SALES_PRODUCT = `
SELECT 
    p.id,
    p.productname,
    SUM(oi.quantity) AS total_sold
FROM order_items oi
JOIN product p ON oi.product_id = p.id
GROUP BY p.id, p.productname
ORDER BY total_sold DESC
LIMIT 10;  
`;

export const TOTAL_SALES_MONTH = `
SELECT 
    TO_CHAR(created_at, 'YYYY-MM') AS month,
    SUM(total_price) AS total_sales,
    COUNT(*) AS total_orders
FROM orders
GROUP BY month
ORDER BY month;`;

export const SALES_BY_CATEGORY = `
SELECT 
    p.category,
    SUM(oi.quantity) AS total_items_sold,
    SUM(oi.quantity * oi.price) AS total_sales
FROM order_items oi
JOIN product p ON oi.product_id = p.id
GROUP BY p.category
ORDER BY total_sales DESC;
`;

export const GROWTH_DECLINE = `
SELECT 
    TO_CHAR(created_at, 'YYYY-MM-DD') AS day,
    SUM(total_price) AS total_sales
FROM orders
WHERE created_at >= date_trunc('month', CURRENT_DATE)
GROUP BY day
ORDER BY day;`;
