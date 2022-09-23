import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import {BiSun} from 'react-icons/bi'

import {IoMoon} from 'react-icons/io5'

import {FiMenu, FiLogOut} from 'react-icons/fi'

import {IoMdClose} from 'react-icons/io'

import {AiFillHome} from 'react-icons/ai'

import {HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'

import {RiMenuAddLine} from 'react-icons/ri'

import ThemeContext from '../../SavedContext/savedContext'

import {
  NavbarContainer,
  WebsiteLogo,
  IconsContainer,
  IconButton,
  LogoutIconButton,
  MenuLogoutIconsContainer,
  ProfileLogoutDesktopContainer,
  ProfileImage,
  LogoutDesktopButton,
  MenuPopupContainer,
  NavItemsListContainer,
  MenuCloseIconContainer,
  NavItemContainer,
  NavItemText,
  LogoutPopupBgContainer,
  LogoutPopupContainer,
  ConfirmPara,
  CommonButton,
  PopupButtonsContainer,
} from './styleComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, changeTheme, changeActiveTab, activeTab} = value

        const onChangeTheme = () => {
          changeTheme()
        }

        const homeTab = activeTab === 'HOME'
        const trendTab = activeTab === 'TRENDING'
        const gameTab = activeTab === 'GAMING'
        const savedTab = activeTab === 'SAVED VIDEOS'

        const onChangeTab = event => {
          changeActiveTab(event.currentTarget.id)
        }

        return (
          <>
            <NavbarContainer dark={isDarkTheme}>
              <Link to="/">
                <WebsiteLogo
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
              </Link>
              <IconsContainer>
                {isDarkTheme ? (
                  <IconButton
                    type="button"
                    data-testid="theme"
                    onClick={onChangeTheme}
                  >
                    <BiSun size="25px" color="#ffffff" />
                  </IconButton>
                ) : (
                  <IconButton
                    type="button"
                    data-testid="theme"
                    onClick={onChangeTheme}
                  >
                    <IoMoon size="25px" />
                  </IconButton>
                )}

                <MenuLogoutIconsContainer>
                  <Popup
                    modal
                    trigger={
                      <IconButton type="button">
                        {' '}
                        <FiMenu
                          size="25px"
                          color={isDarkTheme ? '#ffffff' : '#0f0f0f'}
                        />
                      </IconButton>
                    }
                  >
                    {close => (
                      <MenuPopupContainer dark={isDarkTheme}>
                        <MenuCloseIconContainer>
                          <IconButton type="button" onClick={() => close()}>
                            <IoMdClose
                              size={20}
                              color={isDarkTheme ? '#ffffff' : '#0f0f0f'}
                            />
                          </IconButton>
                        </MenuCloseIconContainer>
                        <NavItemsListContainer>
                          <Link to="/" style={{textDecoration: 'none'}}>
                            <NavItemContainer
                              key="HOME"
                              onClick={onChangeTab}
                              id="HOME"
                              activeBtn={homeTab}
                              dark={isDarkTheme}
                            >
                              <AiFillHome
                                size="18"
                                color={
                                  activeTab === 'HOME' ? '#ff0000' : '#909090'
                                }
                              />
                              <NavItemText dark={isDarkTheme}>
                                {' '}
                                Home
                              </NavItemText>
                            </NavItemContainer>
                          </Link>

                          <Link to="/trending" style={{textDecoration: 'none'}}>
                            <NavItemContainer
                              key="TRENDING"
                              onClick={onChangeTab}
                              id="TRENDING"
                              activeBtn={trendTab}
                              dark={isDarkTheme}
                            >
                              <HiFire
                                size="18"
                                color={
                                  activeTab === 'TRENDING'
                                    ? '#ff0000'
                                    : '#909090'
                                }
                              />
                              <NavItemText dark={isDarkTheme}>
                                {' '}
                                Trending
                              </NavItemText>
                            </NavItemContainer>
                          </Link>

                          <Link to="/gaming" style={{textDecoration: 'none'}}>
                            <NavItemContainer
                              key="GAMING"
                              onClick={onChangeTab}
                              id="GAMING"
                              activeBtn={gameTab}
                              dark={isDarkTheme}
                            >
                              <SiYoutubegaming
                                size="18"
                                color={
                                  activeTab === 'GAMING' ? '#ff0000' : '#909090'
                                }
                              />
                              <NavItemText dark={isDarkTheme}>
                                {' '}
                                Gaming
                              </NavItemText>
                            </NavItemContainer>
                          </Link>

                          <Link
                            to="/saved-videos"
                            style={{textDecoration: 'none'}}
                          >
                            <NavItemContainer
                              key="SAVED VIDEOS"
                              onClick={onChangeTab}
                              id="SAVED VIDEOS"
                              activeBtn={savedTab}
                              dark={isDarkTheme}
                            >
                              <RiMenuAddLine
                                size="18"
                                color={
                                  activeTab === 'SAVED VIDEOS'
                                    ? '#ff0000'
                                    : '#909090'
                                }
                              />
                              <NavItemText dark={isDarkTheme}>
                                {' '}
                                Saved videos
                              </NavItemText>
                            </NavItemContainer>
                          </Link>
                        </NavItemsListContainer>
                      </MenuPopupContainer>
                    )}
                  </Popup>

                  <Popup
                    modal
                    trigger={
                      <LogoutIconButton type="button">
                        <FiLogOut
                          size="25px"
                          color={isDarkTheme ? '#ffffff' : '#0f0f0f'}
                        />
                      </LogoutIconButton>
                    }
                  >
                    {close => (
                      <LogoutPopupBgContainer>
                        <LogoutPopupContainer dark={isDarkTheme}>
                          <ConfirmPara dark={isDarkTheme}>
                            Are you sure, you want to logout
                          </ConfirmPara>
                          <PopupButtonsContainer>
                            <CommonButton
                              type="button"
                              outline
                              onClick={() => close()}
                            >
                              Cancel
                            </CommonButton>
                            <CommonButton type="button" onClick={onClickLogout}>
                              Confirm
                            </CommonButton>
                          </PopupButtonsContainer>
                        </LogoutPopupContainer>
                      </LogoutPopupBgContainer>
                    )}
                  </Popup>
                </MenuLogoutIconsContainer>

                <ProfileLogoutDesktopContainer>
                  <ProfileImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />

                  <Popup
                    modal
                    trigger={
                      <LogoutDesktopButton type="button" dark={isDarkTheme}>
                        Logout
                      </LogoutDesktopButton>
                    }
                  >
                    {close => (
                      <LogoutPopupBgContainer>
                        <LogoutPopupContainer dark={isDarkTheme}>
                          <ConfirmPara dark={isDarkTheme}>
                            Are you sure, you want to logout
                          </ConfirmPara>
                          <PopupButtonsContainer>
                            <CommonButton
                              type="button"
                              outline
                              onClick={() => close()}
                            >
                              Cancel
                            </CommonButton>
                            <CommonButton type="button" onClick={onClickLogout}>
                              Confirm
                            </CommonButton>
                          </PopupButtonsContainer>
                        </LogoutPopupContainer>
                      </LogoutPopupBgContainer>
                    )}
                  </Popup>
                </ProfileLogoutDesktopContainer>
              </IconsContainer>
            </NavbarContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
