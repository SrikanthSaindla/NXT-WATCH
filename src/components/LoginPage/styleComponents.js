import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  background-color: ${props => (props.dark ? '#212121' : '#f9f9f9')};
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.form`
  background-color: ${props => (props.dark ? '#0f0f0f' : '#ffffff')};
  width: 320px;
  padding: 20px;
  padding-top: 35px;
  padding-bottom: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  @media screen and (min-width: 768px) {
    width: 400px;
    padding-left: 30px;
    padding-right: 30px;
  }
`
export const WebsiteLogo = styled.img`
  height: 30px;
  width: 120px;
  margin-bottom: 22px;
`
export const LabelInputBoxContainerUsername = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
`

export const LabelInputBoxContainerPassword = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 5px;
`

export const Label = styled.label`
  color: ${props => (props.dark ? '#ffffff' : '#7e858e')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 13px;
  margin-bottom: 5px;
`

export const InputBox = styled.input`
  height: 45px;
  width: 100%;
  border: 1.5px solid ${props => (props.dark ? '#e2e8f0' : '#cccccc')};
  ::placeholder {
    font-weight: 400;
    font-family: 'Roboto';
    font-size: 15px;
    opacity: 0.8;
  }
  padding-left: 8px;
  :focus {
    outline-width: 0;
  }
  border-radius: 3px;
  background-color: transparent;
  font-weight: 400;
  font-family: 'Roboto';
  font-size: 15px;
  color: #7e858e;
  @media screen and (min-width: 768px) {
    height: 40px;
  }
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  width: 100%;
`

export const CheckBox = styled.input`
  height: 15px;
  width: 15px;
  margin-right: 6px;
`
export const ShowPasswordLabel = styled(Label)`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  color: ${props => (props.dark ? '#ffffff' : '#1e293b')};
  padding-top: 3px;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  width: 100%;
  padding: 7px;
  padding-top: 9px;
  padding-bottom: 9px;
  border-width: 0;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const ErrorMsgPara = styled.p`
  font-size: 13px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #ff0b37;
  width: 100%;
`
