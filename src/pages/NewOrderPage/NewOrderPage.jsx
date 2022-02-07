import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import './NewOrderPage.css';
import { Link, useNavigate } from 'react-router-dom';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import BrandList from '../../components/BrandList/BrandList';

function NewOrderPage({ user, setUser }) {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [activeBrand, setActiveBrand] = useState('');
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const brandsRef = useRef([]);

  const navigate = useNavigate();

  async function handleAddToOrder(itemId) {
    const cart = await ordersAPI.addItemToCart(itemId);
    setCart(cart);
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }
  
  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = items.reduce((acc, item) => {
        const cat = item.category.name;
        return acc.includes(cat) ? acc : [...acc, cat]
      }, []);
      brandsRef.current = items.reduce((acc, item) => {
        const brand = item.brand.name;
        return acc.includes(brand) ? acc : [...acc, brand]
      }, []);
      setMenuItems(items);
      setActiveCat(items[0].category.name);
      setActiveBrand(items[0].brand.name);
    }
    getItems();

    // async function getItems() {
    //     const items = await itemsAPI.getAll();
    //     brandsRef.current = items.reduce((acc, item) => {
    //       const brand = item.brand.name;
    //       return acc.includes(brand) ? acc : [...acc, brand]
    //     }, []);
    //     setMenuItems(items);
    //     setActiveBrand(items[0].brand.name);
    //   }
    //   getItems();

    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  return (
      <>
        <div className='user-welcome-container'>
        <p className='user-welcome'>Welcome <span id="nav-username">{user.name}</span></p>
        </div>
      <header>
        <div id="category-container">
        <h5 id="category-title">Shop By Category</h5>
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
        <BrandList 
        brands={brandsRef.current}
        activeBrand={activeBrand}
        setActiveBrand={setActiveBrand}
        />
        </div>
      </header>
    <main className="NewOrderPage">
      <MenuList
        menuItems={menuItems.filter(item => item.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
      />
      <OrderDetail 
      order={cart}
      handleChangeQty={handleChangeQty}
      handleCheckout={handleCheckout}
      />
    </main>
    </>
  );
}

export default NewOrderPage;