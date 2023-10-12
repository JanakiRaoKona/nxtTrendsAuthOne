// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <>
    <nav className="mobile-view-first-container">
      <div>
        <img
          className="logo-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
      </div>

      <img
        className="image-logout"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
      />
      <ul className="desk-top-menu-bar">
        <Link className="nav-link-item" to="/">
          <li className="menu-names">Home</li>
        </Link>
        <Link className="nav-link-item" to="/products">
          <li className="menu-names">Products</li>
        </Link>
        <Link className="nav-link-item" to="/cart">
          <li className="menu-names">Cart</li>
        </Link>
        <button type="button" className="desk-top-button">
          Logout
        </button>
      </ul>
    </nav>
    <nav className="second-nav-container">
      <Link className="nav-link-item" to="/">
        <img
          className="nav-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav-home"
        />
      </Link>
      <Link className="nav-link-item" to="/products">
        <img
          className="nav-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
        />
      </Link>
      <Link className="nav-link-item" to="/cart">
        <img
          className="nav-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
        />
      </Link>
    </nav>
  </>
)
export default Header
