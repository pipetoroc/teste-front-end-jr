import './Modal.scss'

function Modal ({ isModalOpen, openModal }) {
  if (isModalOpen) {
    return (
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
}

export default Modal
