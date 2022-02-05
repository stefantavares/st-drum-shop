import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import './NewOrderPage.css';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';

function NewOrderPage({ user, setUser }) {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const categoriesRef = useRef([]);

  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat]
      }, []);
      setActiveCat(categoriesRef.current[1]);
      setMenuItems(items);
    }
    getItems();
  }, []);

  return (
      <>
      <header>
        <div id="category-container">
        <h5 id="category-title">Shop By Category</h5>
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
        </div>
      </header>
    <main className="NewOrderPage">
      <MenuList
        menuItems={menuItems.filter(item => item.category.name === activeCat)}
      />
      <OrderDetail />
    </main>
    </>
  );
}

export default NewOrderPage;