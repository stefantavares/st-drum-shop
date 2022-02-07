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
          <Link className='nav-orderhistory' to="/orders">Order History</Link>
          <div>
          {/* <Link className='nav-orderhistory' to="/orders/new">New Order</Link> */}
          {/* &nbsp; | &nbsp; */}
          {/* Welcome <span id="nav-username">{user.name}</span> */}
          </div>
          &nbsp;&nbsp;<Link className="logout" to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
      );
}

export default NavBar;