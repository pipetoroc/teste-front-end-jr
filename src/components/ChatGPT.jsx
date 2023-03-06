import React, { useState, useEffect } from 'react'
import { getProducts } from '../services/products' // importa la función para obtener los productos

function Card () {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null) // guarda el producto seleccionado en el estado
  const [isModalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    getProducts().then(products => setProducts(products))
  }, [])

  const openModal = (product) => {
    setSelectedProduct(product) // establece el producto seleccionado en el estado
    setModalOpen(true)
  }

  const closeModal = () => {
    setSelectedProduct(null) // establece el producto seleccionado a null para cerrar el modal
    setModalOpen(false)
  }

  return (
    <article className='section-vitrine__article'>
      {/* muestra la lista de productos */}
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
      {/* muestra el modal si está abierto */}
      {isModalOpen && (
        <section className='section-modal'>
          <article className='section-modal__article'>
            <div className='section-modal__img' />
            <div className='section-modal__div'>
              {/* muestra los detalles del producto seleccionado */}
              <h3 className='section-modal__h3'>{selectedProduct.productName}</h3>
              <p className='section-modal__p'> R$ {selectedProduct.price}</p>
              <span className='section-modal__span'>{selectedProduct.description}</span>
              <a href='#' className='section-modal__a'>Veja mais detalhes do produta</a>
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
