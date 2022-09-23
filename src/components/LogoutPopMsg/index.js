import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import SavedContext from '../../SavedContext/savedContext'

import {
  StyledPopup,
  LogoutContainer,
  LogDes,
  CancelBtn,
  ConfirmBtn,
  LogoutBtn,
} from './styleComponents'

const LogoutPopup = props => (
  <SavedContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const onClickConfirmLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      return (
        <StyledPopup
          modal
          isDarkTheme={isDarkTheme}
          trigger={<LogoutBtn isDarkTheme={isDarkTheme}>Logout</LogoutBtn>}
        >
          {close => (
            <LogoutContainer isDarkTheme={isDarkTheme}>
              <LogDes isDarkTheme={isDarkTheme}>
                Are you sure, you want to logout
              </LogDes>
              <CancelBtn type="button" onClick={close}>
                Cancel
              </CancelBtn>
              <ConfirmBtn type="button" onClick={onClickConfirmLogout}>
                Confirm
              </ConfirmBtn>
            </LogoutContainer>
          )}
        </StyledPopup>
      )
    }}
  </SavedContext.Consumer>
)

export default withRouter(LogoutPopup)
