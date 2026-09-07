import React from 'react';
import { Product } from '@/types/product';

export default function ProductCard({ product }: { product: Product }) {
  const discountRate = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
      <div>
        <div className="relative aspect-video bg-gray-100 overflow-hidden">
          <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
          <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
            {product.badge}
          </span>
        </div>
        <div className="p-5">
          <div className="text-xs text-gray-400 mb-1">{product.category} · {product.sourcePlatform}</div>
          <h3 className="font-bold text-gray-900 text-lg line-clamp-1">{product.title}</h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.subtitle}</p>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-blue-600">{product.price.toLocaleString()}원</span>
            <span className="text-sm text-gray-400 line-through">{product.originalPrice.toLocaleString()}원</span>
            <span className="text-xs font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded">-{discountRate}%</span>
          </div>
          <div className="mt-4 space-y-1.5 pt-3 border-t border-gray-50">
            {product.pros.map((pro, i) => (
              <div key={i} className="text-xs text-emerald-600 flex items-center gap-1 font-medium">✓ {pro}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-5 pt-0">
        <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow sponsored" className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-sm">
          최저가 및 할인 혜택 확인하기
        </a>
      </div>
    </div>
  );
}
