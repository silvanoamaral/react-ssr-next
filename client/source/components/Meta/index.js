import React from 'react'
import Head from 'next/head'

const Meta = ({
  url, type, title, description,
}) => {

  return (
    <Head>
      <meta content="width=device-width,initial-scale=1" name="viewport" />

      <title>{ title }</title>
      <meta name="description" content={description} />

      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="" />
      <meta property="og:image:width" content="200" />
      <meta property="og:image:height" content="200" />

    </Head>
  )
}

export default Meta
