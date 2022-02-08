import './OrderHistoryPage.css';
import * as usersService from '../../utilities/users-service';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        }
        getOrders();
      }, []);

  return (
    <main className="OrderHistoryPage">
    <OrderList 
      orderItems={orderItems}
    />
    <OrderDetail 
    />

  </main>
  );
}

export default OrderHistoryPage;