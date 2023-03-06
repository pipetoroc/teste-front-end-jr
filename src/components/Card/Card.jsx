import './Card.scss'
import React, { useState, useEffect } from 'react'
import getProducts from '../../services/getProducts'
import Modal from '../Modal/Modal'

function Card () {
  const [products, setProducts] = useState([])
  const [isModalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    getProducts().then(products => setProducts(products))
  }, [])

  const openModal = () => {
    console.log('click')
    setModalOpen(!isModalOpen)
  }

  return (
    <>
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
              <button className='div__button div__button--vitrina'>COMPRAR</button>
            </div>
          )
        })
      }
      <Modal
        isModalOpen={isModalOpen}
        openModal={openModal}
      />
    </>
  )
}

export default Card
