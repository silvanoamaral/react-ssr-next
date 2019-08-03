import React from 'react'

import WhyIntellibrand from '../../source/components/WhyIntellibrand'
import './Home.scss'

const Component = ({titulo, texto1, texto2}) => {
  return (
  <div className="container">
    <div className="text">
      <h3>{ titulo }</h3>
      <p>{ texto1 }</p>
      <p>{ texto2 }</p>
    </div>
    <button className="btn btn__saiba-mais">Saiba Mais</button>
  </div>
  )
}

function Home() {
  return (
    <div className="home">
      <section className="banner_principal">
        <div className="container">
          <h2>Endenda porque somos lideres em Digital Trade Marketing.</h2>
          <button>Entregamos o futuro</button>
        </div>
      </section>

      <section className="digital__trade">
        <Component
          titulo='Digital Trade Marketing'
          texto1='Domine o marketshare e esteja sempre a frente do seu concorrente.'
          texto2='Mantenha a consistência da sua marca e aumente a conversão em milhares de lojas.'
        />
      </section>

      <section className="video">
        <video loop autoPlay poster="https://edited.com/static/img/homepage/arcadia-case-study-loop-still.jpg">
          <source type="video/mp4" src="https://edited.com/static/video/homepage/arcadia-case-study-loop.mp4" />
          <img srcSet="https://edited.com/static/img/homepage/arcadia-case-study-loop-still.jpg" data-no-retina="true" />
        </video>
      </section>

      <section className="inteligencia__competitiva">
        <Component
          titulo='Inteligência Competitiva'
          texto1='Dados acionáveis para aumentar a sua performance de vendas'
          texto2='Uma poderosa suite de soluções omni-chanel para alcançar seu consumidor'
        />
      </section>

      <WhyIntellibrand />
    </div>
  )
}

export default Home
