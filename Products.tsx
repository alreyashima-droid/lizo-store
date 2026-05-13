
const products = [
  {
    name: 'Sauvage',
    price: '199 SAR',
    image: '/products/black.jpg'
  },
  {
    name: 'White Musk',
    price: '189 SAR',
    image: '/products/white.jpg'
  }
]

export default function Products() {
  return (
    <section className="products">
      {products.map((product, index) => (
        <div className="card" key={index}>
          <img src={product.image} />
          <h3>{product.name}</h3>
          <span>{product.price}</span>
        </div>
      ))}
    </section>
  )
}
