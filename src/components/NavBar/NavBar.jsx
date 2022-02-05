import './NavBar.css';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

function NavBar({ user, setUser }) {
    // Add the following function
    function handleLogOut() {
      // Delegate to the users-service
      userService.logOut();
      // Update state will also cause a re-render
      setUser(null);
    }

    return (
        <nav>
          <Link to="/orders">Order History</Link>
          &nbsp; | &nbsp;
          <Link to="/orders/new">New Order</Link>
          &nbsp; | &nbsp;
          Welcome &nbsp;<span id="nav-username">{user.name}</span>
          &nbsp;&nbsp;<Link id="logout" to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
      );
}

export default NavBar;