import Card from '../Card/Card'
import ProductosTitle from '../ProductosTitle/ProductosTitle'
import './Vitrine2.scss'

export function Vitrine2 () {
  return (
    <section className='section-vitrine'>
      <ProductosTitle />
      <p className='ver'>Ver todos</p>
      <Card />
    </section>
  )
}
