import React from 'react'

const Error = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <p>{error?.message}</p>
    </div>
  )
}

export default Error
