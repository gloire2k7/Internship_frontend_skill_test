import Image from 'next/image';
import product1 from '../assets/forth_section_1.png';
import product2 from '../assets/forth_section_2.png';
import plantBg from '../assets/forth_section_background.png';
import addToCartIcon from '../assets/Add to Cart.png';

const products = [
  {
    name: 'Aroma Diffuser',
    price: '$20',
    description: 'Original product comes in three styles of color, usb charger',
    image: product1,
  },
  {
    name: 'Lux Aroma Diffuser',
    price: '$15',
    description: 'Beautiful decorative object, perfumes the space with your favorite fragrance.',
    image: product2,
  },
];

export default function BestsellersSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between bg-white overflow-hidden py-12 md:py-20">
      {/* Left: Title, Button, Plant BG */}
      <div className="relative w-full md:w-1/3 flex flex-col items-center md:items-start justify-center px-0 md:pl-0 md:pr-12 mb-8 md:mb-0 min-h-[260px] md:min-h-[400px]">
        {/* Plant background */}
        <div className="absolute inset-0 left-0 flex items-center justify-center md:justify-start pointer-events-none select-none">
          <Image src={plantBg} alt="Plant background" fill className="object-contain object-left opacity-20 md:opacity-100" />
        </div>
        <div className="relative z-10 w-full flex flex-col items-center md:items-start md:pl-12">
          <h2 className="text-green text-4xl md:text-5xl font-bold mb-6 text-center md:text-left">Bestsellers</h2>
          <button className="bg-green text-white font-semibold rounded-md px-12 py-3 text-base md:text-md shadow-md hover:bg-green/90 transition-colors">
            SHOP ALL
          </button>
        </div>
      </div>
      {/* Right: Product Cards */}
      <div className="w-full md:w-2/3 flex flex-col items-center md:items-end px-4 md:pr-12">
        <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8 max-w-3xl">
          {products.map((product) => (
            <div key={product.name} className="relative bg-background-gray rounded-[24px] shadow-md flex flex-col w-full md:w-1/2 overflow-hidden">
              <div className="relative w-full h-[220px] md:h-[260px]">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              </div>
              <div className="flex flex-row items-center justify-between px-4 py-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-dark-text text-lg md:text-xl">{product.name}</span>
                    <span className="bg-green text-white text-xs font-semibold rounded-full px-2 py-0.5 ml-1">{product.price}</span>
                  </div>
                  <div className="text-gray-text text-xs md:text-sm max-w-[180px] md:max-w-[220px]">{product.description}</div>
                </div>
                <button className="ml-2 flex items-center justify-center">
                  <Image src={addToCartIcon} alt="Add to cart" width={32} height={32} className="object-contain" />
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Carousel dots (centered) */}
        <div className="flex gap-2 mt-6 md:mt-8 w-full justify-center">
          <span className="w-3 h-3 rounded-full bg-green inline-block" />
          <span className="w-3 h-3 rounded-full bg-gray-text/40 inline-block" />
          <span className="w-3 h-3 rounded-full bg-gray-text/40 inline-block" />
        </div>
      </div>
    </section>
  );
} 