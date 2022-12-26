// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isShow1: false, isShow2: false}

  firstName = () => {
    const {isShow1} = this.state

    this.setState(prevState => ({isShow1: !prevState.isShow1}))
  }

  lastName = () => {
    const {isShow2} = this.state

    this.setState(prevState => ({isShow2: !prevState.isShow2}))
  }

  render() {
    const {isShow1} = this.state
    const {isShow2} = this.state

    const isCardShowing = isShow1 ? <p className="card">Joe</p> : null
    const isCardShowing2 = isShow2 ? <p className="card">Jonas</p> : null

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="inner-container">
          <div className="name-container">
            <button type="button" className="button" onClick={this.firstName}>
              show/Hide Firstname
            </button>
            {isCardShowing}
          </div>
          <div className="name-container">
            <button type="button" className="button" onClick={this.lastName}>
              show/Hide Lastname
            </button>
            {isCardShowing2}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
