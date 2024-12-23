'use client';

import { useEffect, useState, useRef, useCallback, Suspense } from 'react';
import { Container, HStack, Spinner, Center, useBreakpointValue } from '@chakra-ui/react';

import SimpleSidebar from '@/components/ui/sideBar/SideBar';
import { Api } from '@/services/api-client';
import { Product, Categories } from '@/types/api';
import SearchParamsWrapper from '@/components/SearchParams';
import CategoryCarousel from '@/components/ui/category/CategoryCarousel';
import CatalogGrid from '@/components/ui/CatalogGrid';

const ITEMS_PER_PAGE = 6;

const Catalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number>();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [brandId, setBrandId] = useState<string | null>(null); // Состояние для brandId
  const observer = useRef<IntersectionObserver | null>(null);
  const [prevCategory, setPrevCategory] = useState<number | undefined>(selectedCategory);
  const [categories, setCategories] = useState<Categories[] | undefined>(undefined);

  const categoriesSetRef = useRef(false);

  const isMobileOrTablet = useBreakpointValue({ base: true, md: true, lg: false });

  const loadProducts = useCallback(async () => {
    if (brandId === null) {
      return;
    }
    try {
      setLoading(true);
      const data = await Api.catalog.getProducts({
        page,
        size: ITEMS_PER_PAGE,
        category_id: selectedCategory,
        brand_id: brandId || undefined,
      });

      setProducts((prev) => (page === 0 ? data.products : [...prev, ...data.products]));
      setHasMore(data.products.length === ITEMS_PER_PAGE);

      if (!categoriesSetRef.current) {
        setCategories(data.all_categories);
        categoriesSetRef.current = true;
      }
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  }, [page, selectedCategory, brandId]);

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
  }, [selectedCategory, page, brandId]);

  return (
    <Suspense
      fallback={
        <Center py={8}>
          <Spinner size="xl" />
        </Center>
      }
    >
      <Container maxW="container.xl">
        {isMobileOrTablet ? (
          <>
            <CategoryCarousel
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />

            <CatalogGrid products={products} loading={loading} lastProductRef={lastProductRef} />
          </>
        ) : (
          <HStack alignItems={'start'} mt={['60px', '0']}>
            <SimpleSidebar
              categories={categories}
              onCategorySelect={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
            <CatalogGrid products={products} loading={loading} lastProductRef={lastProductRef} />
          </HStack>
        )}
      </Container>
      <SearchParamsWrapper setBrandId={setBrandId} />
    </Suspense>
  );
};

export default Catalog;
