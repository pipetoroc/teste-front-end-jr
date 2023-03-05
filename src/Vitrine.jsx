import { useState, useEffect } from 'react'
import './Vitrine.scss'

export function Vitrine () {
  const [products, setProducts] = useState([])
  const [isModalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
      .then(res => res.json())
      .then(response => {
        const { products } = response
        setProducts(products)
      })
  }, [])

  const openModal = () => {
    setModalOpen(!isModalOpen)
  }

  return (
    <section className='section-vitrine'>
      <h1 className='section-vitrine__h1'>Produtos Relacionados</h1>
      <ul className='section-vitrine__ul'>
        <a className='section-vitrine__a' href='#'><li className='section-vitrine__li'>celular</li></a>
        <a className='section-vitrine__a' href='#'><li className='section-vitrine__li'>accesórios</li></a>
        <a className='section-vitrine__a' href='#'><li className='section-vitrine__li'>tablets</li></a>
        <a className='section-vitrine__a' href='#'><li className='section-vitrine__li'>notebooks</li></a>
        <a className='section-vitrine__a' href='#'><li className='section-vitrine__li'>tvs</li></a>
        <a className='section-vitrine__a' href='#'><li className='section-vitrine__li'>ver todos</li></a>
      </ul>
      <article className='section-vitrine__article'>
        {
          products.map(product => {
            return (
              <div className='section-vitrine__div' key={product.productName} onClick={openModal}>
                <img src={product.photo} className='section-vitrine__img' />
                <p className='section-vitrine__description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
                <span className='section-vitrine__span'> R$ 30.90 </span>
                <p className='section-vitrine__price'>R$ {product.price}</p>
                <p className='section-vitrine__p'> ao 2x de R$ 49.95 sem juros </p>
                <span className='section-vitrine__frete'> Frete grátis </span>
                <button className='div__button div__button--vitrina'>COMRPAR</button>
              </div>
            )
          })
        }
        {
          isModalOpen && (
            <section className='section-modal'>
              <article className='section-modal__article'>
                <div className='section-modal__img' />
                <div className='section-modal__div'>
                  <h3 className='section-modal__h3'>Lorem Ipsum dolor sit amet</h3>
                  <p className='section-modal__p'> R$1.499,90</p>
                  <span className='section-modal__span'> Many desktop publishing</span>
                  <a href='#' className='section-modal__a'>Veja mais detalhes do produta </a>
                </div>
                <button className='close' onClick={openModal}>
                  <div />
                  <div />
                </button>
              </article>

            </section>
          )
        }
      </article>
    </section>
  )
}
