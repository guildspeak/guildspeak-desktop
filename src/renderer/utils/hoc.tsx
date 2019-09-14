import React from 'react'
import { Center } from '../components/shared'

export class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError(_error) {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <Center>Loading failed! Please reload.</Center>
    }

    return this.props.children
  }
}
