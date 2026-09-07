'use client';
import { SlidersHorizontal } from 'lucide-react';
import { useMemo, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import { products } from '@/data/products';
import type { FilterState } from '@/types/product';

const categories = ['전체', 'PC 부품', '낚시·레저', '캠핑·레저', '운동·건강'];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [filters, setFilters] = useState<FilterState>({ category: '전체', searchQuery: '', sortBy: 'popular' });
  const filteredProducts = useMemo(() => {
    const query = filters.searchQuery.trim().toLowerCase();
    return products.filter((product) => (selectedCategory === '전체' || product.category === selectedCategory) && (!query || `${product.title} ${product.subtitle} ${product.category}`.toLowerCase().includes(query))).sort((a, b) => filters.sortBy === 'priceAsc' ? a.price - b.price : filters.sortBy === 'latest' ? b.id.localeCompare(a.id) : a.id.localeCompare(b.id));
  }, [filters.searchQuery, filters.sortBy, selectedCategory]);
  const selectCategory = (category: string) => { setSelectedCategory(category); setFilters((current) => ({ ...current, category })); };
  return <div className="min-h-screen bg-[#f8f8f5] text-zinc-950"><Header searchQuery={filters.searchQuery} selectedCategory={selectedCategory} onSearchChange={(searchQuery) => setFilters((current) => ({ ...current, searchQuery }))} onCategorySelect={selectCategory} /><main><Hero selectedCategory={selectedCategory} onCategorySelect={selectCategory} /><section id="picks" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24"><div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><div><p className="mb-2 text-sm font-black uppercase tracking-[0.16em] text-[#788622]">ALIEXPRESS PICKS</p><h2 className="text-4xl font-black tracking-[-0.06em]">지금 많이 찾는 직구 장비</h2></div><div className="flex items-center gap-2 text-sm"><SlidersHorizontal size={16} className="text-zinc-400" /><select value={filters.sortBy} onChange={(event) => setFilters((current) => ({ ...current, sortBy: event.target.value as FilterState['sortBy'] }))} className="rounded-full border border-zinc-200 bg-white px-4 py-2.5 font-semibold outline-none"><option value="popular">인기순</option><option value="priceAsc">낮은 가격순</option><option value="latest">최신순</option></select></div></div><div className="mb-8 flex gap-2 overflow-x-auto pb-1">{categories.map((category) => <button key={category} onClick={() => selectCategory(category)} className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-bold transition ${selectedCategory === category ? 'bg-[#d9f36b] text-zinc-950' : 'border border-zinc-200 bg-white text-zinc-600 hover:border-zinc-950 hover:text-zinc-950'}`}>{category}</button>)}</div><ProductGrid products={filteredProducts} /></section></main><Footer /></div>;
}
