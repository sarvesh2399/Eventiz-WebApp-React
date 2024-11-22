
  import React from 'react'
  
  function ErrorPage() {
    return (
      <div style={{ padding: "1rem", textAlign: "center" }}>
        <h1>Oops! Page Not Found</h1>
        <p>We can't seem to find the page you're looking for.</p>
        <a href="/">Go back to Home</a>
      </div>
    )
  }
  
  export default ErrorPage