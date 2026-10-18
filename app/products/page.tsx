type Product = {
  id: number;
  name: string;
  price: number;
};

async function getProducts(): Promise<Product[]> {
  const response = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  return response.json();
}

export default async function Products() {
  const products = await getProducts();

  return (
    <main style={{ padding: '20px' }}>
      <h1>Товары (из API)</h1>
      {products.map((product) => (
        <article key={product.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <h2>{product.name}</h2>
          <p>Цена: {product.price} BYN</p>
        </article>
      ))}
    </main>
  );
}