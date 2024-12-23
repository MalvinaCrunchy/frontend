'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { Container, HStack, SimpleGrid, Spinner, Center } from '@chakra-ui/react';

import ProductCard from '@/components/ui/cards/ProductCard';
import SimpleSidebar from '@/components/ui/sideBar/SideBar';
import { Api } from '@/services/api-client';
import { Product, Categories } from '@/types/api';

const ITEMS_PER_PAGE = 6;

const Catalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number>();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);
  const [prevCategory, setPrevCategory] = useState<number | undefined>(selectedCategory);
  const [categories, setCategories] = useState<Categories[] | undefined>(undefined);

  // Ref to track if categories are already set
  const categoriesSetRef = useRef(false);

  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      const data = await Api.catalog.getProducts({
        page,
        size: ITEMS_PER_PAGE,
        category_id: selectedCategory,
      });

      setProducts((prev) => (page === 0 ? data.products : [...prev, ...data.products]));
      setHasMore(data.products.length === ITEMS_PER_PAGE);

      // Set categories only if they haven't been set before
      if (!categoriesSetRef.current) {
        setCategories(data.all_categories);
        categoriesSetRef.current = true; // Mark that categories have been set
      }
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  }, [page, selectedCategory]);

  const lastProductRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    if (selectedCategory !== prevCategory) {
      setPage(0);
      setProducts([]);
      setPrevCategory(selectedCategory);
    }
    loadProducts();
  }, [selectedCategory, page]);

  return (
    <Container maxW="container.xl">
      <HStack alignItems={'start'} mt={['60px', '0']}>
        <SimpleSidebar
          categories={categories}
          onCategorySelect={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        <Container maxW="container.lg" py={8}>
          <SimpleGrid columns={[1, 2, 3]} spacing={8}>
            {products.map((product, index) => (
              <div
                ref={index === products.length - 1 ? lastProductRef : undefined}
                key={product.id}
              >
                <ProductCard
                  id={product.id}
                  name={product.name}
                  country={product.country}
                  price={product.price}
                  discount={product.discount}
                  final_price={product.final_price}
                  imageUrl={product.image_url}
                />
              </div>
            ))}
          </SimpleGrid>
          {loading && (
            <Center py={8}>
              <Spinner size="xl" />
            </Center>
          )}
        </Container>
      </HStack>
    </Container>
  );
};

export default Catalog;
