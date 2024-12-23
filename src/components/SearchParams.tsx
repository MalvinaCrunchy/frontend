'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

interface SearchParamsWrapperProps {
  setBrandId: (brandId: string | '') => void;
}

const SearchParamsWrapper: React.FC<SearchParamsWrapperProps> = ({ setBrandId }) => {
  const searchParams = useSearchParams();
  const brandId = searchParams.get('brand_id') || '';

  useEffect(() => {
    setBrandId(brandId || '');
  }, [brandId, setBrandId]);

  return null;
};

export default SearchParamsWrapper;
