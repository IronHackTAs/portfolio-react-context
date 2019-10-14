import React from 'react'


const Error = ({ code, message }) => (
  <div className="error-container">
    <section>
      <div role="alert" className="error-inside-container">
        <h2><strong>{code}</strong> - {message}</h2>
      </div>
    </section>
  </div>
)

Error.defaultProps = {
  level: 'warning',
  message: 'An error ocurred'
}

const NotFound = () => (<Error level="dark" code="404" message="Page not found" />)

export { Error, NotFound }