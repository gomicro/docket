import React from 'react'

const InternalServer = () => (
  <div>
    <h1>Error</h1>
  </div>
)

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error) {
    this.setState({ hasError: true })
  }

  render() {
    return this.state.hasError === true ? (
      <InternalServer />
    ) : (
      this.props.children
    )
  }
}
