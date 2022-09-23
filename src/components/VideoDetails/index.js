import {Component} from 'react'

import {formatDistanceToNowStrict} from 'date-fns'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import Header from '../HeaderPage'

import Sidebar from '../sideMenu'

import ThemeContext from '../../SavedContext/savedContext'

import {
  HomeBgContainer,
  HomeContainer,
  ThumbnailsBgContainer,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  FailureButton,
  VideoDetailsContainer,
  VideoTitleEtcContainer,
  TitlePara,
  CommonParaTag,
  VideoPlayer,
  VideoDescriptionDetailsContainer,
  ViewsPublishedContainer,
  LikeDislikeSaveContainer,
  ButtonContainer,
  DotSymbol,
  LikeIcon,
  DislikeIcon,
  SaveIcon,
  LikeLabel,
  DislikeLabel,
  SaveLabel,
  HorizontalRule,
  ChannelDetailsContainer,
  ChannelImgNameContainer,
  ChannelImage,
  NameSubscriberContainer,
  SubscribersPara,
  DescriptionPara,
} from './styleComponets'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/${id}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()

      const updatedVideoDetails = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }

      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails: updatedVideoDetails,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetryingVideos = () => {
    this.getVideoDetails()
  }

  renderLoader = theme => (
    <LoaderContainer data-testid="loader">
      <Loader
        type="ThreeDots"
        color={theme ? '#ffffff' : ' #181818'}
        height="50"
        width="50"
      />
    </LoaderContainer>
  )

  renderFailureView = theme => (
    <FailureContainer>
      <FailureImage
        src={
          theme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <FailureHeading dark={theme}>Oops! Something Went Wrong</FailureHeading>
      <FailurePara>
        We are having some trouble to complete your request. Please try again.
      </FailurePara>
      <FailureButton type="button" onClick={this.onRetryingVideos}>
        Retry
      </FailureButton>
    </FailureContainer>
  )

  renderSuccessView = (
    theme,
    likedVideos,
    dislikedVideos,
    changeLike,
    changeDislike,
    videosList,
    savingVideo,
  ) => {
    const {videoDetails} = this.state

    const videoIndex = videosList.findIndex(
      eachVid => eachVid.id === videoDetails.id,
    )

    const save = videoIndex !== -1
    const like = likedVideos.includes(videoDetails.id)
    const dislike = dislikedVideos.includes(videoDetails.id)

    const onClickLike = () => {
      changeLike(videoDetails.id)
    }

    const onClickDislike = () => {
      changeDislike(videoDetails.id)
    }

    const onClickSave = () => {
      savingVideo({
        id: videoDetails.id,
        thumbnailUrl: videoDetails.thumbnailUrl,
        title: videoDetails.title,
        channelName: videoDetails.channel.name,
        viewCount: videoDetails.viewCount,
        publishedAt: videoDetails.publishedAt,
        profileImageUrl: videoDetails.channel.profileImageUrl,
        videoUrl: videoDetails.videoUrl,
      })
    }

    return (
      <VideoDetailsContainer>
        <VideoPlayer
          url={videoDetails.videoUrl}
          width="100%"
          height="60%"
          controls
          playing
        />
        <VideoTitleEtcContainer>
          <TitlePara dark={theme}>{videoDetails.title}</TitlePara>
          <VideoDescriptionDetailsContainer>
            <ViewsPublishedContainer>
              <CommonParaTag>{videoDetails.viewCount} views</CommonParaTag>
              <DotSymbol />
              <CommonParaTag>
                {formatDistanceToNowStrict(new Date(videoDetails.publishedAt), {
                  addSuffix: true,
                })}
              </CommonParaTag>
            </ViewsPublishedContainer>
            <LikeDislikeSaveContainer>
              <ButtonContainer type="button" onClick={onClickLike}>
                <LikeIcon like={like.toString()} />
                <LikeLabel like={like.toString()}>Like</LikeLabel>
              </ButtonContainer>

              <ButtonContainer type="button" onClick={onClickDislike}>
                <DislikeIcon dislike={dislike.toString()} />
                <DislikeLabel dislike={dislike.toString()}>
                  Dislike
                </DislikeLabel>
              </ButtonContainer>

              <ButtonContainer type="button" onClick={onClickSave}>
                <SaveIcon save={save.toString()} />
                <SaveLabel save={save.toString()}>
                  {save ? 'Saved' : 'Save'}
                </SaveLabel>
              </ButtonContainer>
            </LikeDislikeSaveContainer>
          </VideoDescriptionDetailsContainer>
          <HorizontalRule />
          <ChannelDetailsContainer>
            <ChannelImgNameContainer>
              <ChannelImage
                src={videoDetails.channel.profileImageUrl}
                alt="channel logo"
              />

              <NameSubscriberContainer>
                <TitlePara dark={theme}>{videoDetails.channel.name}</TitlePara>
                <SubscribersPara>
                  {videoDetails.channel.subscriberCount} subscribers
                </SubscribersPara>
              </NameSubscriberContainer>
            </ChannelImgNameContainer>
            <DescriptionPara dark={theme}>
              {videoDetails.description}
            </DescriptionPara>
          </ChannelDetailsContainer>
        </VideoTitleEtcContainer>
      </VideoDetailsContainer>
    )
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {
            isDarkTheme,
            changeLikeStatus,
            changeDislikeStatus,
            savedVideos,
            addToSavedVideos,
            likedVideos,
            dislikedVideos,
          } = value

          const renderFinalOutput = () => {
            const {apiStatus} = this.state

            switch (apiStatus) {
              case apiStatusConstants.inProgress:
                return this.renderLoader(isDarkTheme)
              case apiStatusConstants.success:
                return this.renderSuccessView(
                  isDarkTheme,
                  likedVideos,
                  dislikedVideos,
                  changeLikeStatus,
                  changeDislikeStatus,
                  savedVideos,
                  addToSavedVideos,
                )
              case apiStatusConstants.failure:
                return this.renderFailureView(isDarkTheme)
              default:
                return null
            }
          }

          return (
            <>
              <Header />
              <HomeBgContainer
                dark={isDarkTheme}
                data-testid="videoItemDetails"
              >
                <Sidebar />
                <HomeContainer>
                  <ThumbnailsBgContainer>
                    {renderFinalOutput()}
                  </ThumbnailsBgContainer>
                </HomeContainer>
              </HomeBgContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
