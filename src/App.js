import './App.css'

import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import ThemeContext from './SavedContext/savedContext'

import ProtectedRoute from './components/ProtectedRoute'

import LoginForm from './components/LoginPage'

import Home from './components/HomePage'

import Trending from './components/TrendingPage'

import Gaming from './components/GamingPage'

import VideoItemDetails from './components/VideoDetails'

import SavedVideos from './components/SavedPageVideos'

import NotFound from './components/NotFound'

// Replace your code here
class App extends Component {
  state = {
    isDark: false,
    activeTab: 'INITIAL',
    likedVideos: [],
    dislikedVideos: [],
    savedVideos: [],
  }

  onChangingTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  onChangingActiveTab = id => {
    this.setState({activeTab: id})
  }

  onClickingLikeButton = id => {
    const {likedVideos} = this.state
    const isContains = likedVideos.includes(id)

    if (!isContains) {
      this.setState(prevState => ({
        likedVideos: [...prevState.likedVideos, id],
        dislikedVideos: prevState.dislikedVideos.filter(
          eachId => eachId !== id,
        ),
      }))
    }
  }

  onClickingDislikeButton = id => {
    const {dislikedVideos} = this.state
    const isContains = dislikedVideos.includes(id)

    if (!isContains) {
      this.setState(prevState => ({
        likedVideos: prevState.likedVideos.filter(eachId => eachId !== id),
        dislikedVideos: [...prevState.dislikedVideos, id],
      }))
    }
  }

  onAddingToSavedVideos = saveItem => {
    const {savedVideos} = this.state
    const itemIndex = savedVideos.findIndex(
      eachVid => eachVid.id === saveItem.id,
    )
    if (itemIndex === -1) {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, saveItem],
      }))
    } else {
      const filteredVideos = savedVideos.filter(
        eachVid => eachVid.id !== saveItem.id,
      )
      this.setState({savedVideos: filteredVideos})
    }
  }

  render() {
    const {
      isDark,
      activeTab,
      likedVideos,
      dislikedVideos,
      savedVideos,
    } = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme: isDark,
          changeTheme: this.onChangingTheme,
          activeTab,
          changeActiveTab: this.onChangingActiveTab,
          likedVideos,
          dislikedVideos,
          changeLikeStatus: this.onClickingLikeButton,
          changeDislikeStatus: this.onClickingDislikeButton,
          savedVideos,
          addToSavedVideos: this.onAddingToSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
