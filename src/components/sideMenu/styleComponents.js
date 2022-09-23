import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 94vh;
    align-items: center;
    background-color: ${props => (props.dark ? ' #231f20' : '#ffffff')};
    width: 200px;
  }
`

export const NavItemsListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  background-color: transparent;
  width: 100%;
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

export const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 20px;
`
export const ContactUsText = styled.p`
  color: ${props => (props.dark ? '#ffffff' : '#231f20')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
`

export const ContactInfoLogosContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const ContactLogoImage = styled.img`
  height: 38px;
  width: 38px;
  margin-right: 8px;
`

export const ContactInfoText = styled.p`
  color: ${props => (props.dark ? '#ffffff' : '#231f20')};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`
export const NavButton = styled.button`
  border-width: 0;
`
