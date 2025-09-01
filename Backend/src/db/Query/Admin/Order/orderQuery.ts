export const GET_ALL_ORDER = `
 SELECT 
          o.id AS order_id,
           o.created_at AS order_date,
          u.firstname AS user_firstname,
          u.lastname AS user_lastname,
          u.phonenumber AS user_phone,
          o.addressline,
          o.city,
          o.state,
          o.zipcode,
          oi.product_id,
          p.productname AS product_name,
          oi.quantity,
          oi.discount,
          oi.sub_total
      FROM orders o
      LEFT JOIN users u ON o.user_id = u.user_id
      LEFT JOIN order_items oi ON o.id = oi.order_id
      LEFT JOIN product p ON oi.product_id = p.id
      ORDER BY o.created_at DESC;
`;
