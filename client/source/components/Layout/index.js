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
        { children }
      </main>
      <Footer />
    </Fragment>
  )
}

export default Layout
