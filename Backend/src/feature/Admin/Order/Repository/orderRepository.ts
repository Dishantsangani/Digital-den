import dbclient from "../../../../db/db.js";
import { GET_ALL_ORDER } from "../../../../db/Query/Admin/Order/orderQuery.js";

export class OrderRepository {
  async addOrderRepository() {
    const rows = await dbclient.queryForMany(GET_ALL_ORDER);

    const ordersMap: Record<number, any> = {};

    rows.forEach((row) => {
      if (!ordersMap[row.order_id]) {
        ordersMap[row.order_id] = {
          order_date: row.order_date,
          order_id: row.order_id,
          client: {
            name: `${row.user_firstname} ${row.user_lastname}`,
            phone: row.user_phone,
            address: `${row.addressline}, ${row.city}, ${row.state}, ${row.zipcode}`,
          },
          payment_status: row.payment_status,
          payment_method: row.payment_method,
          items: [],
          total_sub_total: 0, // initialize total sub total
        };
      }

      if (row.product_id) {
        const item = {
          product_name: row.product_name,
          quantity: row.quantity,
          discount: row.discount,
          sub_total: row.sub_total,
        };

        ordersMap[row.order_id].items.push(item);

        // Add item's sub_total to total_sub_total
        ordersMap[row.order_id].total_sub_total += parseFloat(row.sub_total);
      }
    });

    return Object.values(ordersMap);
  }
}
