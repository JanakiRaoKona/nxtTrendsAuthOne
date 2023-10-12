// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMessage: ''}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      const data = await response.json()
      const updatedData = {errorMsg: data.error_msg}
      const {errorMsg} = updatedData
      this.setState({errorMessage: errorMsg})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  userName = () => {
    const {username} = this.state
    return (
      <>
        <label className="label-name" htmlFor="userName">
          USERNAME
        </label>

        <input
          className="input-element"
          id="userName"
          type="text"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  passwordUser = () => {
    const {password} = this.state
    return (
      <>
        <label className="label-name" htmlFor="passwordUser">
          PASSWORD
        </label>

        <input
          className="input-element"
          id="passwordUser"
          type="password"
          value={password}
          placeholder="Password"
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
    const {errorMessage} = this.state
    console.log(errorMessage)
    return (
      <div className="login-web-site-container">
        <img
          className="web-site-logo-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <div className="mobile-image-container">
          <img
            className="web-site-login-mobile-image web-site-login-desktop-image"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
        </div>
        <form className="form-container" onSubmit={this.submitForm}>
          <div>
            <img
              className="web-site-logo-desktop-image"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </div>
          <div className="user-name-container">{this.userName()}</div>
          <div className="user-password-container">{this.passwordUser()}</div>

          <button className="button" type="submit">
            Login
          </button>
          <p className="error-msg">{errorMessage}</p>
        </form>
      </div>
    )
  }
}
export default LoginForm
