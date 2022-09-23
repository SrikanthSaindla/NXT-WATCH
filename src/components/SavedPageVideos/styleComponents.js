import styled from 'styled-components'

import {VscDebugStackframeDot} from 'react-icons/vsc'

import {HiFire} from 'react-icons/hi'

export const HomeBgContainer = styled.div`
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
  min-height: 94vh;
  background-size: cover;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => (props.dark ? '#313131' : '#f1f1f1')};
  background-size: cover;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 100%;
`

export const BannerHeading = styled.h1`
  color: ${props => (props.dark ? '#ffffff' : '#1e293b')};
  font-size: 25px;
  font-weight: bold;
  font-family: 'Roboto';
`

export const TrendingIconContainer = styled.div`
  background-color: ${props => (props.dark ? '#0f0f0f' : '#e2e8f0')};
  border-radius: 80px;
  height: 60px;
  width: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`

export const TrendingIcon = styled(HiFire)`
  height: 20px;
  width: 20px;
  color: #ff0000;
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

export const HomeVideosListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

export const LoaderContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: inherit;
`
export const FailureContainer = styled.div`
  min-height: 80vh;
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
  @media screen and (min-width: 768px) {
    height: 250px;
    width: 300px;
  }
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
    width: 100%;
    margin-right: 14px;
    margin-bottom: 15px;
  }
`

export const VideoListItemInsideContainer = styled.div`
  @media screen and (min-width: 567px) {
    width: 600px;
    margin-right: 14px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
`

export const ThumbnailImage = styled.img`
  height: 180px;
  width: 300px;
  margin-bottom: 10px;
  @media screen and (min-width: 567px) {
    width: 260px;
    height: 150px;
    margin-right: 30px;
  }
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  padding-left: 8px;
`

export const ChannelImage = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 80px;
  margin-right: 7px;
  @media screen and (min-width: 567px) {
    display: none;
  }
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
  @media screen and (min-width: 567px) {
    font-weight: 500;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
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
