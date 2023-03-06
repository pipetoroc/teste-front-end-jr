import './Card.scss'
import React, { useState, useEffect } from 'react'
import getProducts from '../../services/getProducts'

function Card () {
  const [products, setProducts] = useState([])
  const [isModalOpen, setModalOpen] = useState(false)
  const [information, setInformation] = useState(null)

  useEffect(() => {
    getProducts().then(products => setProducts(products))
  }, [])

  const openModal = (product) => {
    setInformation(product)
    setModalOpen(true)
  }
  const closeModal = () => {
    setInformation(null)
    setModalOpen(false)
  }

  return (
    <article className='section-vitrine__article'>
      {products.map(product => (
        <div className='section-vitrine__div' key={product.productName} onClick={() => openModal(product)}>
          <img src={product.photo} className='section-vitrine__img' />
          <p className='section-vitrine__description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
          <span className='section-vitrine__span'> R$ 30.90 </span>
          <p className='section-vitrine__price'>R$ {product.price}</p>
          <p className='section-vitrine__p'> ao 2x de R$ 49.95 sem juros </p>
          <span className='section-vitrine__frete'> Frete grátis </span>
          <button className='div__button div__button--vitrina'>COMPRAR</button>
        </div>
      ))}
      {isModalOpen && information && (
        <section className='section-modal'>
          <article className='section-modal__article'>
            <div className='section-modal__img' />
            <div className='section-modal__div'>
              <h3 className='section-modal__h3'>{information.productName}</h3>
              <p className='section-modal__p'> R${information.price}</p>
              <span className='section-modal__span'> {information.descriptionShort}</span>
              <a href='#' className='section-modal__a'>Veja mais detalhes do produta </a>
            </div>
            <button className='close' onClick={closeModal}>
              <div />
              <div />
            </button>
          </article>
        </section>
      )}
    </article>
  )
}
export default Card
