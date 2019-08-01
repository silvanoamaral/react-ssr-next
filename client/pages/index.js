import React from 'react'
import Router from 'next/router'

import NavBar from './components/navbar'
import Seo from './components/seo'

function IndexPage() {   
    return (
        <div>
            <Seo title="Home page" description="This is my home page"/>
            <NavBar />
            <h1>Hello Next.js</h1>
            <button onClick={() => Router.push('/posts')}>Go to Posts</button>
        </div>
    )
}

export default IndexPage;