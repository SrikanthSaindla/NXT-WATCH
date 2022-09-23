import styled from 'styled-components'

export const NotFoundBgContainer = styled.div`
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
`

export const NotFoundImage = styled.img`
  height: 280px;
  width: 300px;
  @media screen and (min-width: 768px) {
    height: 310px;
    width: 360px;
  }
`

export const NotFoundHeading = styled.h1`
  color: ${props => (props.dark ? '#ffffff' : '#1e293b')};
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-bottom: 0;
  @media screen and (min-width: 768px) {
    font-size: 27px;
  }
`

export const NotFoundPara = styled.p`
  color: #909090;
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto';
  text-align: center;
`
