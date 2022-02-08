import './OrderList.css';
import OrderListItem from '../OrderListItem/OrderListItem';

export default function OrderList({ orderItems, handleShowOrder }) {
  const items = orderItems.map(order =>
    <OrderListItem
      key={order._id}
      orderItem={order}
      handleShowOrder={handleShowOrder}
    />
  );
  return (
    <main className="OrderList">
      {items}
    </main>
  );
}