export interface Product {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  category: string;
  badge: string;
  imageUrl: string;
  gallery?: string[];
  pros: string[];
  cons: string[];
  affiliateUrl: string;
  sourcePlatform: 'AliExpress';
}

export interface FilterState {
  category: string;
  searchQuery: string;
  sortBy: 'popular' | 'priceAsc' | 'latest';
}
