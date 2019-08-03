import React from 'react'
import Router from 'next/router'

import Meta from '../source/components/Meta'
import Layout from '../source/components/Layout'

import './../css/styles.scss'

function IndexPage() {
  return (
    <div>
      <Meta title="Intellibrand - Intelligence for Brands - Intellibrand" description="This is my home page" />
      <Layout>
        <h1>Hello tese</h1>
      </Layout>
    </div>
  )
}

export default IndexPage
