export interface Product {
  id: number;
  name: string;
  quantity: number;
  country: string;
  imageUrl: string;
}
export const productsData: Product[] = [
  {
    id: 1,
    name: 'Готовый завтрак French Toast Crunch с корицей 314гр ',
    quantity: 12,
    country: 'США',
    imageUrl: '/images/tests/french_toast.jpg',
  },
  {
    id: 2,
    name: 'Орео Печенье 154г с прослойкой клубничного крема (16)',
    quantity: 16,
    country: 'ПОЛЬША',
    imageUrl: '/images/tests/oreo.png',
  },
  {
    id: 3,
    name: 'Вафельные трубочки с Фундуком и Шоколадным кремом Каприз 115гр ж/б',
    quantity: 20,
    country: 'ГРЕЦИЯ',
    imageUrl: '/images/tests/caprice.png',
  },
  {
    id: 4,
    name: 'LOVE IS сливочные жевательные конфеты со вкусом клубники 85гр',
    quantity: 36,
    country: 'ТУРЦИЯ',
    imageUrl: '/images/tests/love_is.jpg',
  },
  {
    id: 5,
    name: 'Капсулы Nescafe Dolce Gusto Cafe au Lait Кофе с молоком 160гр',
    quantity: 7,
    country: 'ГЕРМАНИЯ',
    imageUrl: '/images/tests/dolce_gusto.jpg',
  },
  {
    id: 6,
    name: 'Жевательный Мармелад DAMLA Ремешки Арбуз бокс 300гр',
    quantity: 2,
    country: 'ТУРЦИЯ',
    imageUrl: '/images/tests/damla.jpg',
  },
];
