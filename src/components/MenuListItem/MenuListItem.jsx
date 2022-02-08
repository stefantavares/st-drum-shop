import './MenuListItem.css';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    <div className="MenuListItem">
      <div className="img flex-ctr-ctr" style={{backgroundImage: `url(${menuItem.url})`}}></div>
      <div className="name">
        {menuItem.name}
        <button className="btn-sm" id="details-button">DETAILS</button>
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