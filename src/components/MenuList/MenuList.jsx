import './MenuList.css';
import MenuListItem from '../MenuListItem/MenuListItem';

export default function MenuList({ menuItems, handleAddToOrder, user }) {
  const items = menuItems.map(item =>
    <MenuListItem
      key={item._id}
      menuItem={item}
      handleAddToOrder={handleAddToOrder}
      user={user}
    />
  );
  return (
    <main className="MenuList">
      {items.length ? 
      <>
        {items}
      </>
      :
      <h2 className='no-items-msg'>No Items Here Yet...</h2>
    }
    </main>
  );
}