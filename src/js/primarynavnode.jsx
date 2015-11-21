import React from 'react'
import ColorInput from './colorinput'

export default class PrimaryNavNode extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      classNames: ''
    }
  }

  onMouseEnterHandler() {
    this.setState({
      classNames: 'active'
    })
  }

  onMouseLeaveHandler() {
    this.setState({
      classNames: ''
    })
  }

  onSubmitHandler(e) {
    if (e.keyCode === 13) {
      alert('enter')
    }
  }

  render() {
    var onSubmitHandler = this.onSubmitHandler.bind(this);
    return (
      <li
        style={this.props.styles}
        className={this.state.classNames}
        onMouseEnter={this.onMouseEnterHandler.bind(this)}
        onMouseLeave={this.onMouseLeaveHandler.bind(this)}>
        <span>{this.props.name}</span>
        <ColorInput onSubmitHandler={onSubmitHandler} />
      </li>
    )
  }
}
