import './MenuListItem.css';

export default function MenuListItem({ menuItem }) {
  return (
    <div className="MenuListItem">
      <div className="img flex-ctr-ctr" style={{backgroundImage: `url(${menuItem.url})`}}></div>
      <div className="name">{menuItem.name}</div>
      <div className="buy">
        <span>${menuItem.price.toFixed(2)}</span>
        <button className="btn-sm" id="buy-button" onClick={() => console.log('clicked')}>
        <i class="far fa-cart-plus"></i>
        </button>
      </div>
    </div>
  );
}