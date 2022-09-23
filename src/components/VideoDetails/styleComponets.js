import styled from 'styled-components'

import ReactPlayer from 'react-player'

import {VscDebugStackframeDot} from 'react-icons/vsc'

import {BiLike, BiDislike} from 'react-icons/bi'

import {RiMenuAddLine} from 'react-icons/ri'

export const HomeBgContainer = styled.div`
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
  min-height: 94vh;
  background-size: cover;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const VideoPlayer = styled(ReactPlayer)`
  width: 100%;
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

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-grow: 1;
  min-height: 93vh;
`

export const ThumbnailsBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 93vh;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: inherit;
  max-width: 750px;
  height: inherit;
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

export const VideoTitleEtcContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 750px;
  margin-top: 20px;
  padding: 15px;
`

export const TitlePara = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.dark ? '#ffffff' : '#1e293b')};
  padding-top: 0;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 25px;
`

export const CommonParaTag = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  color: #909090;
`

export const VideoDescriptionDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 750px;
  margin-top: 15px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
export const ViewsPublishedContainer = styled.div`
  display: flex;
  align-items: center;
`

export const LikeDislikeSaveContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ButtonContainer = styled.button`
  background-color: transparent;
  border-width: 0;
  display: flex;
  align-items: center;
  margin-right: 10px;
  @media screen and (max-width: 767px) {
    padding-left: 0;
  }
`
export const DotSymbol = styled(VscDebugStackframeDot)`
  color: #909090;
  margin-top: 0;
  padding-top: 0;
`

export const LikeIcon = styled(BiLike)`
  color: ${props => (props.like === 'true' ? '#2563eb' : '#64748b')};
  font-size: 16px;
  margin-right: 4px;
`

export const DislikeIcon = styled(BiDislike)`
  color: ${props => (props.dislike === 'true' ? '#2563eb' : '#64748b')};
  font-size: 16px;
  margin-right: 4px;
`

export const SaveIcon = styled(RiMenuAddLine)`
  color: ${props => (props.save === 'true' ? '#2563eb' : '#64748b')};
  font-size: 16px;
  margin-right: 4px;
`

export const LikeLabel = styled.label`
  color: ${props => (props.like === 'true' ? '#2563eb' : '#64748b')};
  font-weight: bold;
`

export const DislikeLabel = styled.label`
  color: ${props => (props.dislike === 'true' ? '#2563eb' : '#64748b')};
  font-weight: bold;
`
export const SaveLabel = styled.label`
  color: ${props => (props.save === 'true' ? '#2563eb' : '#64748b')};
  font-weight: bold;
`

export const HorizontalRule = styled.hr`
  border-width: 0;
  height: 1.5px;
  width: 100%;
  background-color: #e2e8f0;
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 10px;
`

export const ChannelImgNameContainer = styled.div`
  display: flex;
  align-items: flex-start;
`

export const ChannelImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 80px;
  margin-right: 10px;
`
export const NameSubscriberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
export const SubscribersPara = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  color: #909090;
  margin-top: 0;
`

export const DescriptionPara = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: normal;
  color: ${props => (props.dark ? '#ffffff' : '#1e293b')};
  @media screen and (min-width: 768px) {
    padding-left: 50px;
  }
`
