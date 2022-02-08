import './OrderHistoryPage.css';
import { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import OrderList from '../../components/OrderList/OrderList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';

function OrderHistoryPage() {
    const [orderItems, setOrderItems] = useState([]);
    const [activeOrder, setActiveOrder] = useState(null);

    useEffect(function() {
        async function getOrders() {
          const orders = await ordersAPI.getOrders();
          setOrderItems(orders);
          setActiveOrder(orders[orders.length - 1]);
        }
        getOrders();
      }, []);

    async function handleShowOrder(order) {
        setActiveOrder(order);
    }

  return (
    <main className="OrderHistoryPage">
    <aside>
    <OrderList 
        orderItems={orderItems}
        handleShowOrder={handleShowOrder}
    />
    </aside>
    <OrderDetail 
        order={activeOrder} 
    />
  </main>
  );
}

export default OrderHistoryPage;