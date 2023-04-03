// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    bg: 'darkBg',
    heading: 'darkHead',
    btn: 'darkBtn',
    btnText: 'Light Mode',
  }

  check = () => {
    const {bg} = this.state
    if (bg === 'darkBg') {
      this.setState(prevState => ({
        bg: 'lightBg',
        heading: 'lightHead',
        btn: 'lightBtn',
        btnText: 'Dark Mode',
      }))
      return
    }
    this.setState(prevState => ({
      bg: 'darkBg',
      heading: 'darkHead',
      btn: 'darkBtn',
      btnText: 'Light Mode',
    }))
  }

  render() {
    const {bg, heading, btn, btnText} = this.state
    return (
      <div className="card">
        <div className={bg}>
          <h1 className={heading}>Click To Change Mode</h1>
          <button className={btn} type="button" onClick={this.check}>
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
