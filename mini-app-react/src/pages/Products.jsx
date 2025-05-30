import { useProducts } from "../hooks/useProducts.jsx"

export function Products() {
  const { products } = useProducts();

  return (
    <>
        <h1>Pagina de productos</h1>

        <ol className="grid grid-cols-2 gap-4">
          {
            products.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))
          }
        </ol>

    </>
  )
}
