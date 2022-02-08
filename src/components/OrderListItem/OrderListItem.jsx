import './OrderListItem.css';

export default function OrderListItem({ orderItem, handleShowOrder }) {
  const orderDate = new Date(orderItem.createdAt).toLocaleDateString();

  return (
    <div className="OrderListItem" onClick={() => handleShowOrder(orderItem)}>
      <div className="left">
        <div className="orderId">Order# <span className="orderIdText">{orderItem.orderId}</span></div>
        <div className="orderDate bottom">{orderDate}</div>
      </div>
      <div className="right">
        <div className="orderTotal">${orderItem.orderTotal.toFixed(2)}</div>
        <div className="totalQty bottom">{orderItem.totalQty} item{orderItem.totalQty > 1 && 's'}</div>
      </div>
    </div>
  );
}