import React, { Component } from 'react'
import {observer} from 'mobx-react'


@observer
export default class Courts extends Component {
  componentDidMount(){
    this.props.store.getCourts()
  }
  render () {
    const { courts } = this.props.store
    const courtsList = courts.length > 0 ? courts.map(court => (
      <tr key={court.id}>
        <td>{court.full_name}</td>
      </tr>
    )) : (
        <tr>
          <td>  <h3>...Loading</h3>  </td>
        </tr>
      )

    return (
      <div className="container main">
        <h1 className="pink-text text-lighten-1">Courts</h1>

        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>

          <tbody>
            {courtsList}
          </tbody>
        </table>
      </div>
    )
  }
}
