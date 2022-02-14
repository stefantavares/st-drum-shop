import './OrderHistoryPage.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import OrderList from '../../components/OrderList/OrderList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';

function OrderHistoryPage({ user }) {
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
    <>
      <header>
        <Link className='grow' id='back-to-shopping' to="/"><i className="fa-regular fa-angle-left"></i> Back To Shopping</Link>
      </header>
        <h1 className='title'>{user.name}'s Order History </h1>
        {orderItems.length ? 
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
      :
      <h3 className='order-msg'>No Orders Yet...</h3>
      }
    </>
    );
}

export default OrderHistoryPage;