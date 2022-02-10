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
          <div className='logo'>ST DRUM SH<i className="fa-light fa-drum" id='logo-icon'></i>P</div>
          </div>
          <div>
          </div>
          <div>
          <Link className='nav-orderhistory grow' to="/orders">Order History &nbsp;<i class="fa-regular fa-list"></i></Link>
          <Link className="logout grow" to="" onClick={handleLogOut}>Log Out &nbsp;<i class="fa-regular fa-user"></i></Link>
          </div>
          </div>
          <div className='user-welcome-container'>
        <p className='user-welcome'>Welcome <span id="nav-username">{user.name}</span></p>
        </div>
        </nav>
      );
}

export default NavBar;