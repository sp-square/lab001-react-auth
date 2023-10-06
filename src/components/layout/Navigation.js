import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav id="main-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/auth">Authenticate</Link>
        </li>
        <li>
          <Link to="/user">User Profile</Link>
        </li>
        <li>
          <button>Logout</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
