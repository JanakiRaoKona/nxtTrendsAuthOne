// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-page-container">
      <div className="content-cloths-container">
        <div className="content-container">
          <h1 className="cloths-heading">Clothes That Get YOU Noticed</h1>
          <div className="cloths-image-container">
            <img
              className="cloths-image"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
            />
          </div>
          <p className="description">
            Fashion is part of the daily air and ite does not quite help that it
            changes all the time. Cloths have always been a marker of the era
            and we are in a revolution. Your fashion makes you been and heard
            that way you are. So, celebrate the seasons new and exciting fashion
            in your own way.
          </p>
          <div>
            <button className="shop-button" type="button">
              Shop Now
            </button>
          </div>
        </div>
        <div className="cloths-image-desktop-container">
          <img
            className="cloths-image-desktop"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
          />
        </div>
      </div>
    </div>
  </>
)
export default Home
