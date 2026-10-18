type ProductCardProps = {
  name: string;
  price: number;
};

export default function ProductCard({ name, price }: ProductCardProps) {
  return (
    <article style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h2>{name}</h2>
      <p>Цена: {price} BYN</p>
    </article>
  );
}