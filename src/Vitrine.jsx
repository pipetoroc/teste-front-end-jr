import ProductosRelacionados from './components/ProductosRelacionados/ProductosRelacionados'
import './Vitrine.scss'
import Card from './components/Card/Card'

export function Vitrine ({ isModalOpen }) {
  return (
    <section className='section-vitrine'>
      <ProductosRelacionados />
      <article className='section-vitrine__article'>
        <Card />
      </article>
    </section>
  )
}
