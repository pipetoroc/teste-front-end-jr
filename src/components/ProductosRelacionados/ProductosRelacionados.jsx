import './ProductoRelacionado.scss'
import React from 'react'
import ProductosTitle from '../ProductosTitle/ProductosTitle'

function ProductosRelacionados () {
  return (
    <>
      <ProductosTitle />
      <ul className='section-vitrine__ul'>
        <a className='section-vitrine__a' href='#'><li className='section-vitrine__li'>celular</li></a>
        <a className='section-vitrine__a' href='#'><li className='section-vitrine__li'>accesórios</li></a>
        <a className='section-vitrine__a' href='#'><li className='section-vitrine__li'>tablets</li></a>
        <a className='section-vitrine__a' href='#'><li className='section-vitrine__li'>notebooks</li></a>
        <a className='section-vitrine__a' href='#'><li className='section-vitrine__li'>tvs</li></a>
        <a className='section-vitrine__a' href='#'><li className='section-vitrine__li'>ver todos</li></a>
      </ul>
    </>
  )
}

export default ProductosRelacionados
