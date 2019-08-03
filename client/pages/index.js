import React from 'react'
import Router from 'next/router'

import Meta from '../source/components/Meta'
import Layout from '../source/components/Layout'
import Home from './Home/Index'

import './../css/styles.scss'

function IndexPage() {
  return (
    <div>
      <Meta title="Intellibrand - Intelligence for Brands - Intellibrand" description="This is my home page" />
      <Layout>
        <Home />
      </Layout>
    </div>
  )
}

export default IndexPage
