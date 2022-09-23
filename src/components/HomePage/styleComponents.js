import styled from 'styled-components'

import {VscDebugStackframeDot} from 'react-icons/vsc'

export const HomeBgContainer = styled.div`
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  min-height: 94vh;
  background-size: cover;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const BannerContainer = styled.div`
  display: flex;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  flex-direction: column;
  background-size: cover;
  justify-content: center;
  align-items: flex-start;
  padding: 19px;
`
export const CloseButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border-width: 0;
`

export const BannerImage = styled.img`
  height: 30px;
  width: 100px;
`
export const BannerPara = styled.p`
  color: #1e293b;
  font-size: 15px;
  font-weight: 400;
  font-family: 'Roboto';
  width: 200px;
  line-height: 25px;
  @media screen and (min-width: 576px) {
    width: 300px;
  }
`
export const BannerButton = styled.button`
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #1e293b;
  background-color: transparent;
  border: 1.5px solid #1e293b;
  padding: 7px;
`

export const BannerHomeBgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-grow: 1;
`

export const ThumbnailsBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`

export const SearchBoxAndButtonContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid #909090;
  height: 28px;
  margin-left: 12px;
  margin-top: 20px;
`

export const SearchBox = styled.input`
  background-color: transparent;
  border-width: 0;
  width: 230px;
  @media screen and (min-width: 576px) {
    width: 350px;
  }
  padding-left: 9px;
  :focus {
    outline-width: 0;
  }
  color: ${props => (props.dark ? '#ffffff' : '#909090')};
`

export const SearchButton = styled.button`
  background-color: ${props => (props.dark ? '#383838' : '#f9f9f9')};
  border-width: 0;
  border-left: 1.5px solid #909090;
  height: 26px;
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HomeVideosListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

export const LoaderContainer = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: inherit;
`
export const FailureContainer = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: inherit;
  padding: 20px;
`

export const FailureImage = styled.img`
  height: 200px;
  width: 200px;
`

export const FailureHeading = styled.h1`
  color: ${props => (props.dark ? '#ffffff' : '#1e293b')};
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-bottom: 0;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const FailurePara = styled.p`
  color: #909090;
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto';
  text-align: center;
`

export const FailureButton = styled.button`
  border-width: 0;
  background-color: #4f46e5;
  font-size: 12px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #ffffff;
  padding: 8px;
  padding-left: 15px;
  padding-right: 15px;
  width: 75px;
  border-radius: 3px;
`

export const VideoListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin-bottom: 10px;
  @media screen and (min-width: 567px) {
    width: 230px;
    margin-right: 14px;
    margin-bottom: 15px;
  }
`

export const ThumbnailImage = styled.img`
  height: 180px;
  width: 300px;
  margin-bottom: 10px;
  @media screen and (min-width: 567px) {
    width: 230px;
    height: 150px;
  }
`

export const VideoDetailsContainer = styled.div`
  display: flex;
`

export const ChannelImage = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 80px;
  margin-right: 7px;
`

export const VideoTitleEtcContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TitlePara = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 400;
  color: ${props => (props.dark ? '#ffffff' : '#1e293b')};
  padding-top: 0;
  margin-top: 0;
`

export const CommonParaTag = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  color: #909090;
  margin-top: 2px;
`

export const ChannelNameEtcContainer = styled.div`
  display: flex;
  @media screen and (min-width: 567px) {
    display: flex;
    flex-direction: column;
  }
`

export const ViewsPublishedContainer = styled.div`
  display: flex;
`
export const DotSymbol = styled(VscDebugStackframeDot)`
  color: #909090;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const PersistDot = styled(VscDebugStackframeDot)`
  color: #909090;
`
