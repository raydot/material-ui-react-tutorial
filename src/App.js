import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Bookmarks from '@material-ui/icons/Bookmarks'

import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
      <Button variant="contained" color="primary">
        <Bookmarks></Bookmarks>
        Welcome, welcome!
      </Button>
      </div>
    )
  }
}

export default App;