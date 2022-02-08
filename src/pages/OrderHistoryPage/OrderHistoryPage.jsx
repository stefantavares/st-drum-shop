import './OrderHistoryPage.css';
import * as usersService from '../../utilities/users-service';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import OrderList from '../../components/OrderList/OrderList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';

function OrderHistoryPage() {
    const [orders, setOrders] = useState([]);
    const [activeOrder, setActiveOrder] = useState(null);


//   async function handleCheckToken() {
//     const expDate = await usersService.checkToken();
//     console.log(new Date(expDate));
//   }

  return (
    <>
      <h1>OrderHistory</h1>
    </>
  );
}

export default OrderHistoryPage;