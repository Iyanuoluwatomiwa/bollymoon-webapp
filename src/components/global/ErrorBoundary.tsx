import React from 'react'

type ErrorBoundaryProps = {
  children: React.ReactNode
  fallback?: React.ReactNode
}

type ErrorBoundaryState = {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    hasError: false,
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // You can send this to logging services like Sentry
    console.error('ErrorBoundary caught an error:', error, info)
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    const { hasError, error } = this.state
    const { children, fallback } = this.props

    if (hasError) {
      if (fallback) return fallback

      return (
        <div>
          <h2 className="text-lg lg:text-2xl text-center">
            Something went wrong
          </h2>
          <p className="text-sm lg:text-md">{error?.message}</p>
          <button onClick={this.resetError}>Try again</button>
        </div>
      )
    }

    return children
  }
}

export default ErrorBoundary
