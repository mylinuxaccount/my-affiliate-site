import type { Product } from '@/types/product';
import ProductCard from './ProductCard';
export default function ProductGrid({ products }: { products: Product[] }) { if (!products.length) return <div className="rounded-[1.5rem] border border-dashed border-zinc-300 bg-white py-24 text-center"><p className="text-lg font-bold text-zinc-900">조건에 맞는 장비가 없어요.</p><p className="mt-2 text-sm text-zinc-500">다른 검색어 또는 카테고리를 선택해보세요.</p></div>; return <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>; }
