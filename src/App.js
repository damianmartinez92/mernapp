import React, { Component } from 'react'

// Components
import Header from './components/Header'
import LogoCenter from './components/LogoCenter'
import PerfectTrip from './components/PerfectTrip'
import ListImage from './components/ListImage'

export default class App extends Component {

  render() {
    return (
      <>
        <Header />
        <LogoCenter />
        <PerfectTrip />
        <ListImage />
      </>
    )
  }
}
