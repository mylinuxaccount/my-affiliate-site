import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col justify-between">
      <div>
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-10">
          <section className="text-center py-10">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              실패 없는 입문자 & 가성비 장비 조합 가이드
            </h1>
            <p className="text-gray-500 mt-3 text-sm sm:text-base">
              직접 검증된 가성비 PC 부품부터 레저/취미 장비까지 최저가로 확인해보세요.
            </p>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </section>
        </main>
      </div>
      <footer className="bg-white border-t border-gray-100 py-6 text-center text-xs text-gray-400">
        본 사이트는 제휴 마케팅 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받을 수 있으며 구매자에게 추가 비용이 발생하지 않습니다.
      </footer>
    </div>
  );
}
