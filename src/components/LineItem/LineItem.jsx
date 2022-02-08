import './LineItem.css';

function LineItem({ lineItem, isPaid, handleChangeQty }) {
  return (
    <div className="LineItem">
      {/* <div className="flex-ctr-ctr">{lineItem.item.url}</div> */}
      <div className="flex-ctr-ctr flex-col" id='name-price'>
        <span className="align-ctr" id='item-name'>{lineItem.item.name}</span>
        {/* <span>${lineItem.item.price.toFixed(2)}</span> */}
      </div>
      <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
        {!isPaid &&
          <button
            className="btn-xs" id='qty-minus'
            onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
            >−</button>
          }
        <span>{lineItem.qty}</span>
        {!isPaid &&
          <button
            className="btn-xs" id='qty-plus'
            onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
          >+</button>
        }
      </div>
      <div className="ext-price">${lineItem.extPrice.toFixed(2)}</div>
    </div>
  );
}

export default LineItem;