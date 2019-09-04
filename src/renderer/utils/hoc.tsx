import React from 'react'
import { Wrapper as LoadingWrapper } from '../components/Loading/styles'

export class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError(_error) {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <LoadingWrapper>Loading failed! Please reload.</LoadingWrapper>
    }

    return this.props.children
  }
}
