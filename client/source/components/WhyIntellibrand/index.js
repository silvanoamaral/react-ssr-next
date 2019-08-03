import React from 'react'
import Link from 'next/link'

import './WhyIntellibrand.scss'

function WhyIntellibrand() {
    return (
        <section className="why__intellibrand">
            <div className="container">
                <h2 className="title">Porque Intellibrand</h2>
                <div className="grid">
                    <ul>
                        <li><h3 className="icon-settings">Porque Intellibrand</h3></li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</li>
                    </ul>
                    <ul>
                        <li><h3 className="icon-check-circle">Porque Intellibrand</h3></li>
                        <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</li>
                    </ul>
                    <ul>
                        <li><h3 className="icon-users">Porque Intellibrand</h3></li>
                        <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</li>
                    </ul>
                </div>
                <div className="grid">
                    <ul>
                        <li><h3 className="icon-users">Porque Intellibrand</h3></li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</li>
                    </ul>
                    <ul>
                        <li><h3 className="icon-settings">Porque Intellibrand</h3></li>
                        <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</li>
                    </ul>
                    <ul>
                        <li><h3 className="icon-check-circle">Porque Intellibrand</h3></li>
                        <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</li>
                    </ul>
                </div>
                <p className="text__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                <div className="btn__more--info">
                    <Link href="/"><a>Saiba Mais</a></Link>
                </div>
            </div>
        </section>
    )
}

export default WhyIntellibrand
