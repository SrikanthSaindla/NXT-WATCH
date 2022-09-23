import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  background-color: ${props => (props.dark ? ' #231f20' : '#ffffff')};
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 7px;
  padding-right: 7px;
  @media screen and (min-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const WebsiteLogo = styled.img`
  height: 23px;
  width: 95px;
`
export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 110px;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 160px;
  }
`
export const IconButton = styled.button`
  background-color: transparent;
  border-width: 0;
`
export const LogoutIconButton = styled.button`
  background-color: transparent;
  border-width: 0;
`
export const MenuLogoutIconsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70px;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ProfileLogoutDesktopContainer = styled.div`
  display: flex;
  align-items: center;
  width: 110px;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const ProfileImage = styled.img`
  height: 26px;
  width: 26px;
`
export const LogoutDesktopButton = styled.button`
  background-color: transparent;
  border: 1.5px solid ${props => (props.dark ? '#ffffff' : '#4f46e5')};
  color: ${props => (props.dark ? '#ffffff' : '#4f46e5')};
  border-radius: 3px;
  padding: 5px;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 500;
  padding-left: 12px;
  padding-right: 12px;
`

export const MenuItemsContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  background-color: ${props => (props.dark ? ' #231f20' : '#ffffff')};
  margin-top: 0;
  margin-bottom: 0;
  padding: 20px;
  padding-left: 30px;
  display: ${props => (props.menu ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const MenuItem = styled.li`
  color: ${props => (props.dark ? '#ffffff' : '#231f20')};
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 400;
  text-decoration: underline;
  margin-bottom: 3px;
`

export const MenuPopupContainer = styled.div`
  margin-top: 0;
  height: 100vh;
  width: 100%;
  background-color: ${props => (props.dark ? ' #231f20' : '#ffffff')};
  padding-top: 30px;
`

export const MenuCloseIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
`

export const NavItemsListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  min-width: 300px;
  max-width: 764px;
  min-height: 100vh;
  width: 100vw;
`

export const NavItemContainer = styled.li`
  background-color: ${props => {
    if (props.dark && props.activeBtn) {
      return '#383838'
    }
    if (props.dark === false && props.activeBtn) {
      return '#f9f9f9'
    }
    return 'transparent'
  }};
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 36px;
  padding-left: 18px;
`

export const NavItemText = styled.p`
  color: ${props => (props.dark ? '#ffffff' : '#424242')};
  text-decoration: none;
  margin-left: 12px;
  padding-top: 3px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
`

export const LogoutPopupBgContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: rgba(85, 85, 85, 0.5);
`

export const LogoutPopupContainer = styled.div`
  background-color: ${props => (props.dark ? ' #231f20' : '#ffffff')};
  border-radius: 8px;
  padding: 15px;
  padding-bottom: 30px;
`
export const ConfirmPara = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  color: ${props => (props.dark ? '#ffffff' : '#4f46e5')};
`

export const CommonButton = styled.button`
  background-color: ${props => (props.outline ? 'transparent' : '#3b82f6')};
  border: ${props => (props.outline ? '1.5px solid #909090' : 'none')};
  color: ${props => (props.outline ? '#909090' : '#ffffff')};
  height: 40px;
  width: 100px;
  font-family: 'Roboto';
  font-weight: 470;
  font-size: 15px;
  border-radius: 2px;
`
export const PopupButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  margin-top: 35px;
`
