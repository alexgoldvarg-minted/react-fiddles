import React from 'react'
import PrimaryNavNode from './primarynavnode'

export default class PrimaryNav extends React.Component {
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
