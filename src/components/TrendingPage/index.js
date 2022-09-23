import {Component} from 'react'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import {formatDistanceToNowStrict} from 'date-fns'

import Header from '../HeaderPage'

import Sidebar from '../sideMenu'

import ThemeContext from '../../SavedContext/savedContext'

import {
  BannerContainer,
  HomeBgContainer,
  HomeContainer,
  ThumbnailsBgContainer,
  LoaderContainer,
  HomeVideosListContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  FailureButton,
  VideoListItem,
  ThumbnailImage,
  VideoDetailsContainer,
  ChannelImage,
  VideoTitleEtcContainer,
  TitlePara,
  CommonParaTag,
  ChannelNameEtcContainer,
  ViewsPublishedContainer,
  DotSymbol,
  PersistDot,
  VideoListItemInsideContainer,
  BannerHeading,
  TrendingIconContainer,
  TrendingIcon,
} from './styleComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/trending'

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()

      const updatedVideosList = data.videos.map(eachVid => ({
        channel: {
          name: eachVid.channel.name,
          profileImageUrl: eachVid.channel.profile_image_url,
        },
        id: eachVid.id,
        publishedAt: eachVid.published_at,
        thumbnailUrl: eachVid.thumbnail_url,
        title: eachVid.title,
        viewCount: eachVid.view_count,
      }))

      this.setState({
        apiStatus: apiStatusConstants.success,
        videosList: updatedVideosList,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetryingVideos = () => {
    this.getTrendingVideos()
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

  renderSuccessView = theme => {
    const {videosList} = this.state

    return (
      <>
        <BannerContainer data-testid="banner" dark={theme}>
          <TrendingIconContainer dark={theme}>
            <TrendingIcon />
          </TrendingIconContainer>
          <BannerHeading dark={theme}>Trending</BannerHeading>
        </BannerContainer>
        <HomeVideosListContainer>
          {videosList.map(eachVideo => (
            <VideoListItem key={eachVideo.id}>
              <Link
                to={`/videos/${eachVideo.id}`}
                style={{textDecoration: 'none'}}
              >
                <VideoListItemInsideContainer>
                  <ThumbnailImage
                    src={eachVideo.thumbnailUrl}
                    alt="video thumbnail"
                  />
                  <VideoDetailsContainer>
                    <ChannelImage
                      src={eachVideo.channel.profileImageUrl}
                      alt="channel logo"
                    />
                    <VideoTitleEtcContainer>
                      <TitlePara dark={theme}>{eachVideo.title}</TitlePara>

                      <ChannelNameEtcContainer>
                        <CommonParaTag>{eachVideo.channel.name}</CommonParaTag>
                        <DotSymbol />
                        <ViewsPublishedContainer>
                          <CommonParaTag>{eachVideo.viewCount}</CommonParaTag>
                          <PersistDot />
                          <CommonParaTag>
                            {formatDistanceToNowStrict(
                              new Date(eachVideo.publishedAt),
                              {addSuffix: true},
                            )}
                          </CommonParaTag>
                        </ViewsPublishedContainer>
                      </ChannelNameEtcContainer>
                    </VideoTitleEtcContainer>
                  </VideoDetailsContainer>
                </VideoListItemInsideContainer>
              </Link>
            </VideoListItem>
          ))}
        </HomeVideosListContainer>
      </>
    )
  }

  renderFinalOutput = themeType => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader(themeType)
      case apiStatusConstants.success:
        return this.renderSuccessView(themeType)
      case apiStatusConstants.failure:
        return this.renderFailureView(themeType)
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <HomeBgContainer dark={isDarkTheme} data-testid="trending">
                <Sidebar />
                <HomeContainer>
                  <ThumbnailsBgContainer>
                    {this.renderFinalOutput(isDarkTheme)}
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

export default Trending
