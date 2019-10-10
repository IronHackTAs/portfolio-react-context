import React from 'react'


const Error = ({ code, message }) => (
  <div>
    <div>
      <div role="alert">
        <strong>{code}</strong> {message}
      </div>
    </div>
  </div>
)

Error.defaultProps = {
  level: 'warning',
  message: 'An error ocurred'
}

const NotFound = () => (<Error level="dark" code="404" message="Page not found" />)

export { Error, NotFound }