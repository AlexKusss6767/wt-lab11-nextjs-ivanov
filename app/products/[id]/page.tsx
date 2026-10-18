import Link from "next/link";

type Product = { id: number; name: string; price: number; };

async function getProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:3000/api/products", { cache: "no-store" });
  return res.json();
}

// Обрати внимание: тип params теперь Promise
export default async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const products = await getProducts();
  
  // Достаем id из Promise
  const resolvedParams = await params;
  
  // Ищем товар, сравнивая числа
  const product = products.find((p) => p.id === Number(resolvedParams.id));

  if (!product) {
    return (
      <main style={{ padding: '20px' }}>
        <h1>Товар не найден (404)</h1>
        <Link href="/products">← Вернуться в каталог</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: '20px' }}>
      <h1>Подробности товара</h1>
      <div style={{ border: '1px solid #ccc', padding: '20px', marginTop: '20px', borderRadius: '8px' }}>
        <h2>{product.name}</h2>
        <p style={{ fontSize: '24px' }}>Цена: <strong>{product.price} BYN</strong></p>
        <p>ID товара: {product.id}</p>
      </div>
      <br />
      <Link href="/products">← Назад к товарам</Link>
    </main>
  );
}