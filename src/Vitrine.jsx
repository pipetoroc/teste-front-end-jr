import ProductosRelacionados from './components/ProductosRelacionados/ProductosRelacionados'
import './Vitrine.scss'
import Card from './components/Card/Card'

export function Vitrine () {
  return (
    <section className='section-vitrine'>
      <ProductosRelacionados />
      <Card />
    </section>
  )
}
