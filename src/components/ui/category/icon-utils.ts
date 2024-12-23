import { IconType } from 'react-icons';
import {
  FiMenu,
  FiHeart,
  FiCoffee,
  FiBox,
  FiCircle,
  FiDroplet,
  FiPackage,
  FiSunrise,
  FiGift,
  FiCloud,
  FiSmile,
  FiHexagon,
  FiSquare,
  FiBattery,
  FiLayers,
  FiStar,
  FiClipboard,
  FiTrash,
  FiPieChart,
  FiCopy,
  FiOctagon,
  FiShoppingBag,
  FiPocket,
  FiTarget,
} from 'react-icons/fi';

interface LinkItemProps {
  name: string;
  icon: IconType;
  categoryId: number;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Сладости', icon: FiHeart, categoryId: 1 },
  { name: 'Кофе', icon: FiCoffee, categoryId: 2 },
  { name: 'Шоколад и батончики', icon: FiBox, categoryId: 3 },
  { name: 'Печенье', icon: FiCircle, categoryId: 4 },
  { name: 'Напитки', icon: FiDroplet, categoryId: 5 },
  { name: 'Чипсы и снэки', icon: FiPackage, categoryId: 6 },
  { name: 'Готовые завтраки', icon: FiSunrise, categoryId: 7 },
  { name: 'Конфеты', icon: FiGift, categoryId: 8 },
  { name: 'Маршмеллоу', icon: FiCloud, categoryId: 10 },
  { name: 'Жвачки', icon: FiSmile, categoryId: 11 },
  { name: 'Пасты', icon: FiBox, categoryId: 13 },
  { name: 'Соусы', icon: FiDroplet, categoryId: 15 },
  { name: 'Лапша', icon: FiBox, categoryId: 16 },
  { name: 'Мармелад', icon: FiHexagon, categoryId: 17 },
  { name: 'Крекеры', icon: FiSquare, categoryId: 19 },
  { name: 'Батарейки', icon: FiBattery, categoryId: 20 },
  {
    name: 'Вафли',
    icon: FiLayers,
    categoryId: 22,
  },
  {
    name: 'Батончики',
    icon: FiClipboard,
    categoryId: 23,
  },
  {
    name: 'Леденцы',
    icon: FiStar,
    categoryId: 24,
  },
  {
    name: 'Суфле',
    icon: FiPieChart,
    categoryId: 25,
  },
  {
    name: 'Бисквит',
    icon: FiCopy,
    categoryId: 26,
  },
  {
    name: 'Драже',
    icon: FiOctagon,
    categoryId: 27,
  },
  {
    name: 'Кофе и какао',
    icon: FiCoffee,
    categoryId: 28,
  },
  {
    name: 'Паста',
    icon: FiShoppingBag,
    categoryId: 29,
  },
  {
    name: 'Сухофрукты',
    icon: FiTarget,
    categoryId: 30,
  },
  {
    name: 'Хлопья',
    icon: FiPocket,
    categoryId: 31,
  },
  {
    name: 'Зефир',
    icon: FiCloud,
    categoryId: 32,
  },
  {
    name: 'Уксус',
    icon: FiTrash,
    categoryId: 33,
  },
  {
    name: 'Масло',
    icon: FiHexagon,
    categoryId: 34,
  },
];

// Функция для определения иконки по categoryId.
// Для категории "Все" (id=0) вернём, например, FiMenu.
export const getIconByCategoryId = (categoryId: number): IconType | undefined => {
  if (categoryId === 0) {
    return FiMenu; // Или любой другой значок, который хотите для "Все"
  }
  const linkItem = LinkItems.find((item) => item.categoryId === categoryId);
  return linkItem ? linkItem.icon : undefined;
};
