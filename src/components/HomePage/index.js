import {Component} from 'react'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import {GrClose} from 'react-icons/gr'

import {BiSearch} from 'react-icons/bi'

import {formatDistanceToNowStrict} from 'date-fns'

import Header from '../HeaderPage'

import Sidebar from '../sideMenu'

import ThemeContext from '../../SavedContext/savedContext'

import {
  BannerContainer,
  CloseButtonContainer,
  HomeBgContainer,
  HomeContainer,
  CloseButton,
  BannerImage,
  BannerPara,
  BannerButton,
  BannerHomeBgContainer,
  ThumbnailsBgContainer,
  SearchBoxAndButtonContainer,
  SearchBox,
  SearchButton,
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
} from './styleComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
  isEmpty: 'EMPTY',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    isDisplayHomeBanner: true,
    searchInput: '',
    searchText: '',
    videosList: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const {searchText} = this.state

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchText}`

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

      if (updatedVideosList.length === 0) {
        this.setState({apiStatus: apiStatusConstants.isEmpty})
      } else {
        this.setState({
          apiStatus: apiStatusConstants.success,
          videosList: updatedVideosList,
        })
      }
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangingSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = () => {
    const {searchInput} = this.state

    this.setState({searchText: searchInput}, this.getVideos)
  }

  onRetryingVideos = () => {
    this.getVideos()
  }

  onHidingBanner = () => {
    this.setState({isDisplayHomeBanner: false})
  }

  renderBanner = () => {
    const {isDisplayHomeBanner} = this.state

    return (
      <>
        {isDisplayHomeBanner && (
          <BannerContainer data-testid="banner">
            <CloseButtonContainer>
              <CloseButton
                type="button"
                data-testid="close"
                onClick={this.onHidingBanner}
              >
                <GrClose />
              </CloseButton>
            </CloseButtonContainer>
            <BannerImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <BannerPara>
              Buy Nxt Watch Premium prepaid plans with UPI
            </BannerPara>
            <BannerButton type="button">GET IT NOW</BannerButton>
          </BannerContainer>
        )}
      </>
    )
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

  renderNoVideosView = theme => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <FailureHeading dark={theme}>No Search results found</FailureHeading>
      <FailurePara>Try different key words or remove search filter</FailurePara>
      <FailureButton type="button" onClick={this.onRetryingVideos}>
        Retry
      </FailureButton>
    </FailureContainer>
  )

  renderSuccessView = theme => {
    const {videosList} = this.state

    return (
      <HomeVideosListContainer>
        {videosList.map(eachVideo => (
          <VideoListItem key={eachVideo.id}>
            <Link
              to={`/videos/${eachVideo.id}`}
              style={{textDecoration: 'none'}}
            >
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
            </Link>
          </VideoListItem>
        ))}
      </HomeVideosListContainer>
    )
  }

  renderFinalOutput = themeType => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader(themeType)
      case apiStatusConstants.success:
        return this.renderSuccessView(themeType)
      case apiStatusConstants.isEmpty:
        return this.renderNoVideosView(themeType)
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
          const {searchInput} = this.state
          return (
            <>
              <Header />
              <HomeBgContainer dark={isDarkTheme} data-testid="home">
                <Sidebar />
                <HomeContainer>
                  <BannerHomeBgContainer>
                    {this.renderBanner()}
                  </BannerHomeBgContainer>

                  <ThumbnailsBgContainer>
                    <SearchBoxAndButtonContainer>
                      <SearchBox
                        type="search"
                        placeholder="Search"
                        dark={isDarkTheme}
                        value={searchInput}
                        onChange={this.onChangingSearchInput}
                      />
                      <SearchButton
                        type="button"
                        data-testid="searchButton"
                        dark={isDarkTheme}
                        onClick={this.onClickSearchButton}
                      >
                        <BiSearch color={isDarkTheme ? '#7e858e' : '#424242'} />
                      </SearchButton>
                    </SearchBoxAndButtonContainer>
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

export default Home
