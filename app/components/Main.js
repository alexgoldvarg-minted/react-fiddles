import React from 'react'
import ReactDOM from 'react-dom'

export class Main extends React.Component {
  render() {
    return (
      <Header />
    )
  }
}

export class Header extends React.Component {
  render() {
    return (
      <div className="navbar">
        <PrimaryNav />
      </div>
    )
  }
}

export class PrimaryNav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [
        {id: 1, name: 'aaa'},
        {id: 2, name: 'bbb'},
        {id: 3, name: 'ccc'},
        {id: 4, name: 'ddd'}
      ]
    }
  }

  render() {
    var primaryNavNodes = this.state.data.map(node =>
      <PrimaryNavNode name={node.name} key={node.id} />
    );

    return (
      <ul>
        {primaryNavNodes}
      </ul>
    )
  }
}

export class PrimaryNavNode extends React.Component {
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

  render() {
    return (
      <li
        className={this.state.classNames}
        onMouseEnter={this.onMouseEnterHandler.bind(this)}
        onMouseLeave={this.onMouseLeaveHandler.bind(this)}>
        <span>{this.props.name}</span>
      </li>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('app-container'));
