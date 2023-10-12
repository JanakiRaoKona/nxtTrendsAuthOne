import Header from '../Header'

import './index.css'

const Products = () => (
  <div className="prod-cont">
    <Header />
    <div className="products-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        alt="products"
        className="products-img"
      />
    </div>
  </div>
)

export default Products
