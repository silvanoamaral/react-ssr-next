import React from 'react';
import Link from 'next/link'

function NavBar() {

    return (
        <nav style={{ display: "flex",
            justifyContent: "space-evenly"}}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/posts"><a>Posts</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
        </nav>
    )

}
export default NavBar;