import './OrderDetail.css';
import LineItem from '../LineItem/LineItem';

export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
    if (!order) return null;

    const lineItems = order.lineItems.map(item =>
      <LineItem
        lineItem={item}
        isPaid={order.isPaid}
        handleChangeQty={handleChangeQty}
        key={item._id}
      />
    );
  
    return (
      <div className="OrderDetail">
        <div className="section-heading">
          {order.isPaid ?
            <>
              <span>ORDER <span className="smaller">{order.orderId}</span></span>
              <span className='order-date'>{new Date(order.updatedAt).toLocaleDateString()}</span>
            </>
            :
            <div className='cart-header'>
              <span>SHOPPING CART &nbsp;</span>
              <div className='item-counter'>{order.totalQty}</div>
            </div>
        }
        </div>
        <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
          {lineItems.length ?
            <>
              {lineItems}
              <div className="total">
                {order.isPaid ?
                  <div></div>
                  :
                  <div>
                  <div className='total-container'>
                    </div>
                        <div className='checkout-container'>
                            <button
                            className="btn-sm" id='checkout-btn'
                            onClick={handleCheckout}
                            disabled={!lineItems.length}
                            >CHECKOUT &nbsp;<i className="far fa-credit-card"></i></button>
                        </div>
                  </div>
                }
                <div className='total-container'>
                      <span className="right" id='total-label'>TOTAL&nbsp;&nbsp;</span>
                    <span className="right">${order.orderTotal.toFixed(2)}</span>
                    </div>
              </div>
            </>
            :
            <>
            <div className="cart-img"><p id='cart-message'>Nothing in cart</p><i className="far fa-cart-arrow-down"></i></div>
            </>
        }
      </div>
    </div>
  );
}