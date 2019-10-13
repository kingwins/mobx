import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
export default class Schools extends Component {
  componentDidMount () {
    this.props.store.getSchools()
  }
  render () {
    const { schools } = this.props.store
    const schoolsList = schools.length > 0 ? schools.map(school => (
      <tr key={school.id}>
        <td>{school.name}</td>
      </tr>
    )) : (
        <tr>
          <td>  <h3>...Loading</h3>  </td>
        </tr>
      )

    return (
      <div className="container main">
        <h1 className="pink-text text-lighten-1">Schools</h1>

        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>

          <tbody>
            {schoolsList}
          </tbody>
        </table>
      </div>
    )
  }
}
