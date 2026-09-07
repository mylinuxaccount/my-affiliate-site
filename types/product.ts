export interface Product {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  category: string;
  badge: string;
  imageUrl: string;
  pros: string[];
  cons: string[];
  affiliateUrl: string;
  sourcePlatform: 'Coupang' | 'AliExpress';
}
