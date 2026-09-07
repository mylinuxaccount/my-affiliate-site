import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    title: '입문용 가성비 볼락/아징 루어 낚싯대 세트',
    subtitle: '초보자도 쉽게 다루는 고탄성 탄소 섬유 로드 + 스피닝 릴',
    price: 48500,
    originalPrice: 75000,
    category: '레저/낚시',
    badge: '가성비 1위',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=80',
    pros: ['경량 설계로 장시간 사용 시 피로도 적음', '초릿대 감도가 뛰어나 입질 파악 용이'],
    cons: ['원터치 케이스 미포함'],
    affiliateUrl: 'https://s.click.aliexpress.com',
    sourcePlatform: 'AliExpress'
  },
  {
    id: '2',
    title: 'DDR5 32GB (16GBx2) 데스크탑 고성능 메모리',
    subtitle: '게이밍 및 영상 편집을 위한 최적의 5600MHz 순정 램',
    price: 118000,
    originalPrice: 145000,
    category: 'PC부품',
    badge: '에디터 추천',
    imageUrl: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500&q=80',
    pros: ['호환성 높음', '방열판 장착 시 오버클럭 잠재력 우수'],
    cons: ['RGB 조명 미지원'],
    affiliateUrl: 'https://link.coupang.com',
    sourcePlatform: 'Coupang'
  },
  {
    id: '3',
    title: '초소형 다기능 알루미늄 낚시 플라이어 (합사 가위)',
    subtitle: '티타늄 코팅 방수 녹방지 루어용 멀티툴',
    price: 12900,
    originalPrice: 22000,
    category: '레저/낚시',
    badge: '최저가 세일',
    imageUrl: 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=500&q=80',
    pros: ['합사 라인 깔끔한 절단', '내구성 뛰어난 티타늄 피막'],
    cons: ['손이 큰 경우 그립감이 다소 작을 수 있음'],
    affiliateUrl: 'https://s.click.aliexpress.com',
    sourcePlatform: 'AliExpress'
  }
];
