// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onClickButton = () => {
    const randomNumber = this.getRandomNumber()
    // console.log(randomNumber)

    this.setState(prevState => ({count: prevState.count + randomNumber}))
    console.log('1')
  }

  render() {
    const {count} = this.state
    const evenOrOdd = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="app-container">
        <div className="count-container">
          <h1 className="heading">Count {count}</h1>
          <p className="description">Count is {evenOrOdd}</p>
          <button type="button" className="button" onClick={this.onClickButton}>
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
