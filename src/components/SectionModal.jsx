import {useState} from 'react'

export default function SectionModal ({product.photo, product.productName}) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return(
    {
      isModalOpen && (
        <section className='section-modal'>
        <article className='section-modal__article'>
          <img src={product.photo} alt={product.productName}  className='section-modal__img'/>
          <div className='section-modal__div'>
            <h3 className='section-modal__h3'></h3>
            <p className='section-modal__p'></p>
            <span className='section-modal__span'></span>
            <a href="#" className='section-modal__a'></a>
          </div>
        </article>
      </section>
    }
  )
  )
}