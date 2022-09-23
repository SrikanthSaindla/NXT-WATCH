import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
  activeTab: 'INITIAL',
  changeActiveTab: () => {},
  likedVideos: [],
  changeLikeStatus: () => {},
  dislikedVideos: [],
  changeDislikeStatus: () => {},
  savedVideos: [],
  addToSavedVideos: () => {},
})

export default ThemeContext
