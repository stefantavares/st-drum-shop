import './MenuListItem.css';
import { Link } from 'react-router-dom';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    <div className="MenuListItem">
        <div className='img-details'>
            <img className='item-img' src={menuItem.img} alt="" />
            <Link id='details-button'to={`items/${menuItem._id}`}>DETAILS</Link>
        </div>
      <div className="name">
        {menuItem.name}
      </div>
      <div className="buy">
        <span>${menuItem.price.toFixed(2)}</span>
        <button className="btn-sm" id="buy-button" onClick={() => handleAddToOrder(menuItem._id)}>
        <i className="far fa-cart-plus"></i>
        <span id="add-to-cart">ADD TO CART</span>
        </button>
      </div>
    </div>
  );
}