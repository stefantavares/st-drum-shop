import './NavBar.css';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

function NavBar({ user, setUser }) {
    function handleLogOut() {
      userService.logOut();
      setUser(null);
    }

    return (
        <nav>
          <div className='links-container'>
            <div id='history-logo-container'>
          <div className='logo'><i className="fa-regular fa-drum" id='logo-icon'></i>&nbsp;&nbsp; ST DRUM SHOP</div>
          </div>
          <div>
          </div>
          <div>
          <Link className='nav-orderhistory grow' to="/orders">Order History</Link>
          <Link className="logout grow" to="" onClick={handleLogOut}>Log Out</Link>
          </div>
          </div>
          <div className='user-welcome-container'>
        <p className='user-welcome'>Welcome <span id="nav-username">{user.name}</span></p>
        </div>
        </nav>
      );
}

export default NavBar;