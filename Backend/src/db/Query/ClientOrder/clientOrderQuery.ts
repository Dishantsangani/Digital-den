export const GET_CLIENT_ORDER = `
  SELECT
      u.user_id,
      (u.firstname || ' ' || u.lastname) AS customer_name,
      u.phonenumber,
      u.email,
      o.id AS order_id,
      (o.addressline || ', ' || o.city || ', ' || o.state || ' - ' || o.zipcode) AS full_address,
      o.status,
      TO_CHAR(o.created_at, 'YYYY-MM-DD HH24:MI:SS') AS created_at,
      SUM(oi.sub_total) AS subtotal,
      SUM(oi.discount) AS discount,
      SUM(oi.sub_total) AS total,  -- ✅ no extra discount subtraction
      json_agg(
        json_build_object(
          'product_id', p.id,
          'product_name', p.productname,
          'quantity', oi.quantity,
          'price', oi.price,
          'discount', oi.discount,
          'sub_total', oi.sub_total
        )
      ) AS products
    FROM users u
    JOIN orders o ON u.user_id = o.user_id
    JOIN order_items oi ON o.id = oi.order_id
    JOIN product p ON oi.product_id = p.id
    GROUP BY u.user_id, customer_name, u.phonenumber, u.email,
             o.id, full_address, o.status, o.created_at
    ORDER BY o.created_at DESC;
`;
