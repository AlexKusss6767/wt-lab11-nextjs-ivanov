const products = [
  { id: 1, name: "Ноутбук", price: 2500 },
  { id: 2, name: "Мышь", price: 80 },
  { id: 3, name: "Клавиатура", price: 150 }
];

export async function GET() {
  return Response.json(products);
}