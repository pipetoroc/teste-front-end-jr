export default function getProducts () {
  return fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
    .then(res => res.json())
    .then(response => {
      const { products } = response
      return products
    })
}
