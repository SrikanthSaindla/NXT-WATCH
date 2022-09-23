import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import ThemeContext from '../../SavedContext/savedContext'

import {
  LoginBgContainer,
  FormContainer,
  WebsiteLogo,
  LabelInputBoxContainerUsername,
  LabelInputBoxContainerPassword,
  Label,
  InputBox,
  ShowPasswordContainer,
  CheckBox,
  ShowPasswordLabel,
  LoginButton,
  ErrorMsgPara,
} from './styleComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckbox = event => {
    this.setState({showPassword: event.target.checked})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
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
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {
            username,
            password,
            showSubmitError,
            errorMsg,
            showPassword,
          } = this.state

          const {isDarkTheme} = value

          const renderUsername = () => (
            <LabelInputBoxContainerUsername>
              <Label htmlFor="username" dark={isDarkTheme}>
                USERNAME
              </Label>
              <InputBox
                type="text"
                id="username"
                placeholder="Username"
                dark={isDarkTheme}
                value={username}
                onChange={this.onChangeUsername}
              />
            </LabelInputBoxContainerUsername>
          )

          const renderPassword = () => (
            <LabelInputBoxContainerPassword>
              <Label htmlFor="password" dark={isDarkTheme}>
                PASSWORD
              </Label>
              <InputBox
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                dark={isDarkTheme}
                value={password}
                onChange={this.onChangePassword}
              />
            </LabelInputBoxContainerPassword>
          )

          return (
            <LoginBgContainer dark={isDarkTheme}>
              <FormContainer dark={isDarkTheme} onSubmit={this.submitForm}>
                <WebsiteLogo
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                {renderUsername()}
                {renderPassword()}
                <ShowPasswordContainer>
                  <CheckBox
                    type="checkbox"
                    id="checkbox"
                    onChange={this.onChangeCheckbox}
                  />
                  <ShowPasswordLabel dark={isDarkTheme} htmlFor="checkbox">
                    Show Password
                  </ShowPasswordLabel>
                </ShowPasswordContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showSubmitError && <ErrorMsgPara>*{errorMsg}</ErrorMsgPara>}
              </FormContainer>
            </LoginBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default LoginForm
