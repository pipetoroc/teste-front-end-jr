import { useState, useEffect } from 'react'

export default function useFetch () {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
      .then(res => res.json())
      .then(response => {
        const { products } = response
        setProducts(products)
      }, [])
  })
  return { products }
}
