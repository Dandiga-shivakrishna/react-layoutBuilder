import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'
import Layout from './components/Layout'
import ConfigurationContext from './context/ConfigurationContext'

import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  onToggleShowContent = showContent => {
    this.setState({
      showContent: !showContent,
    })
  }

  onToggleShowLeftNavbar = showLeftNavbar => {
    this.setState({
      showLeftNavbar: !showLeftNavbar,
    })
  }

  onToggleShowRightNavbar = showRightNavbar => {
    this.setState({
      showRightNavbar: !showRightNavbar,
    })
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showLeftNavbar,
          showContent,
          showRightNavbar,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <ConfigurationController />
        <Layout />
      </ConfigurationContext.Provider>
    )
  }
}

export default App
