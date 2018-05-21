import React, {Component} from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

class App extends Component {
  render () {
    return (
      <main className='app-wrapper'>
        <Header />
        <Content />
        <Footer />
      </main>

    )
  }
}

export default App
