import { useProducts } from "../hooks/useProducts.jsx"
import { Card } from 'antd';
const { Meta } = Card;

export function Products() {
  const { products } = useProducts();

  return (
    <>
      <h1 className="text-4xl text-center mt-8">Pagina de productos</h1>

      <section className="border m-[100px] flex flex-wrap pb-[100px]">
        {
          products.map((product) => (
            <Card
              key={product.id}
              hoverable
              style={{ width: 300 }}
              cover={<img alt="example" src={product.image} className="w-[300px] h-[350px] object-contain"/>}
              className="m-8"
            >
              <Meta title={product.title} description={product.description} />
            </Card>
          ))
        }
      </section>

      {/* <ol className="grid grid-cols-2 gap-4">
          {
            products.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))
          }
        </ol> */}

    </>
  )
}
