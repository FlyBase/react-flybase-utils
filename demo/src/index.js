import React, {Component} from 'react'
import {render} from 'react-dom'

import {SupSubFormatter} from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>react-flybase-utils Demo</h1>
      <SupSubFormatter text={'My text with a <sup>supercase</sup>'}/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
