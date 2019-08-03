import React, { Fragment } from 'react'

import Header from '../Header'
import Footer from '../Footer'

const Layout = ({
  children
}) => {
  return (
    <Fragment>
      <Header />
      <main className="Layout" role="main">
        <div className="container">
          { children }
        </div>
      </main>
      <Footer />
    </Fragment>
  )
}

export default Layout
