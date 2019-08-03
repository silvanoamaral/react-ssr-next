import React from 'react';
import Link from 'next/link'

import './Navbar.scss'

function NavBar() {
  return (
    <nav className="navbar">
      <input type="checkbox" id="bt_menu" />
      <label htmlFor="bt_menu">&#9776;</label>
      <ul>
        <li><Link href="/"><a>Sobre Nós</a></Link></li>
        <li><Link href="/solucoes"><a>Soluções</a></Link></li>
        <li><Link href="/varejista"><a>Varejista</a></Link></li>
        <li><Link href="/insights"><a>Insights</a></Link></li>
        <li className="client"><Link href="/seja-cliente"><a>Seja Cliente</a></Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
