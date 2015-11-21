import React from 'react'

export default class ColorInput extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <input
        value={this.props.colorText}
        onKeyUp={this.props.onSubmitHandler}
        type="text"
        placeholder="enter a color"/>
    )
  }
}
