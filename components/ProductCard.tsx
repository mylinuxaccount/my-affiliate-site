'use client';

import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ExternalLink, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import type { Product } from '@/types/product';

const formatPrice = (price: number) => `${price.toLocaleString('ko-KR')}원`;

export default function ProductCard({ product }: { product: Product }) {
  const discount = Math.round((1 - product.price / product.originalPrice) * 100);
  const images = [product.imageUrl, ...(product.gallery ?? [])];
  const [activeImage, setActiveImage] = useState(0);
  const showPrevious = () => setActiveImage((current) => (current === 0 ? images.length - 1 : current - 1));
  const showNext = () => setActiveImage((current) => (current + 1) % images.length);

  return <article className="group overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-900/10">
    <div className="relative aspect-[1.35/1] overflow-hidden bg-zinc-100">
      <Image src={images[activeImage]} alt={`${product.title} 이미지 ${activeImage + 1}`} fill unoptimized sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-300" />
      {images.length > 1 ? <>
        <button type="button" onClick={showPrevious} aria-label="이전 상품 이미지" className="absolute left-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-md backdrop-blur transition hover:bg-white"><ArrowLeft size={18} /></button>
        <button type="button" onClick={showNext} aria-label="다음 상품 이미지" className="absolute right-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-md backdrop-blur transition hover:bg-white"><ArrowRight size={18} /></button>
        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-zinc-950/75 px-3 py-1 text-[11px] font-bold text-white">{activeImage + 1} / {images.length}</span>
      </> : null}
      <div className="absolute left-4 top-4 flex gap-2"><span className="rounded-full bg-[#d9f36b] px-3 py-1.5 text-xs font-black text-zinc-900">{product.badge}</span><span className="rounded-full bg-zinc-950/80 px-3 py-1.5 text-xs font-bold text-white">-{discount}%</span></div>
      <span className="absolute bottom-4 right-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-zinc-600 backdrop-blur">{product.sourcePlatform}</span>
    </div>
    {product.gallery?.length ? <div className="grid grid-cols-5 gap-2 bg-zinc-50 p-3">{product.gallery.map((image, index) => <button type="button" key={image} onClick={() => setActiveImage(index + 1)} aria-label={`${product.title} 상세 이미지 ${index + 2} 보기`} className={`relative aspect-square overflow-hidden rounded-lg bg-white ${activeImage === index + 1 ? 'ring-2 ring-[#53600e]' : ''}`}><Image src={image} alt={`${product.title} 상세 이미지 ${index + 1}`} fill unoptimized sizes="80px" className="object-cover" /></button>)}</div> : null}
    <div className="p-5 sm:p-6"><p className="mb-2 text-xs font-bold uppercase tracking-wider text-zinc-400">{product.category}</p><h2 className="text-xl font-black leading-tight tracking-[-0.04em] text-zinc-950">{product.title}</h2><p className="mt-2 text-sm text-zinc-500">{product.subtitle}</p><div className="mt-5 flex items-end gap-2"><span className="text-2xl font-black tracking-[-0.05em]">{formatPrice(product.price)}</span><span className="mb-1 text-sm text-zinc-400 line-through">{formatPrice(product.originalPrice)}</span></div><div className="my-5 grid gap-2 border-y border-zinc-100 py-4 text-sm"><div className="flex gap-2 text-zinc-700"><Check size={17} className="shrink-0 text-emerald-600" />{product.pros[0]}</div><div className="flex gap-2 text-zinc-700"><Check size={17} className="shrink-0 text-emerald-600" />{product.pros[1]}</div><div className="flex gap-2 text-zinc-500"><X size={17} className="shrink-0 text-rose-500" />{product.cons[0]}</div></div><a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow sponsored" className="flex items-center justify-between rounded-xl bg-zinc-950 px-4 py-3.5 text-sm font-bold text-white transition hover:bg-[#53600e]">알리익스프레스 최저가 확인하기 <ArrowUpRight size={18} /></a><div className="mt-3 flex items-center justify-center gap-1 text-[11px] text-zinc-400"><ExternalLink size={11} /> 알리익스프레스에서 상품 정보 확인</div></div>
  </article>;
}
