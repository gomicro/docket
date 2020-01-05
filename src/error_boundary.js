import React from 'react'
import { Redirect } from 'react-router-dom'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {
    return this.state.hasError === true ? (
      <Redirect to='/500' />
    ) : (
      this.props.children
    )
  }
}
