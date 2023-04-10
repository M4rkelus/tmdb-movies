import React from 'react';
import { Link } from 'react-router-dom';

import './ErrorBoundary.styles.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='error-boundary'>
          <h2 className='error-boundary-message'>Something went wrong.</h2>
          <Link to='/' className='error-button'>
            Go back
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
