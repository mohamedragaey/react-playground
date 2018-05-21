import React, {Component} from 'react'
import Clock from './Clock'

class Content extends Component {
  render () {
    return (
      <section className='content-wrapper'>
        <Clock />
      </section>
    )
  }
}

export default Content
