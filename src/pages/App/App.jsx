import './App.css';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import ItemDetailPage from '../ItemDetailPage/ItemDetailPage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <>
      <main className="App">
        { 
          user ?
          <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
            <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} />} />
            <Route path="orders/new/items/:itemName" element={<ItemDetailPage user={user} setUser={setUser} />} />
            <Route path="/*" element={<Navigate to="/orders/new" />} />
          </Routes>
          </>
          :
          <AuthPage setUser={setUser}/>
        }
      </main>
        <Footer />
    </>
  );
}

export default App;
