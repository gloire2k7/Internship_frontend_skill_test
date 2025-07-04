import Image from 'next/image';
import heroSectionImage from '../assets/hero_section_image.png';

export default function HeroSection() {
  return (
    <section className="w-full min-h-[70vh] flex flex-col md:flex-row items-center justify-between bg-white overflow-hidden">
      {/* Left: Text */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center px-6 md:px-16 py-12 md:py-0 z-10">
        <h1 className="text-green text-5xl md:text-7xl font-bold leading-tight md:leading-[1.1] text-center md:text-left mb-6">
          Pear kiwi<br />& Mint
        </h1>
        <p className="text-gray-text text-base md:text-[16px] max-w-md text-center md:text-left">
          They say that home is where the heart is. Perhaps that's why a feeling of loss is so apparent when you are far from the ones you love.
        </p>
      </div>
      {/* Right: Image/Graphics */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative h-[340px] md:h-[700px]">
        {/* Green background shape */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Desktop shape */}
          <div className="hidden md:block w-[700px] h-[700px] rounded-tl-[400px] rounded-bl-[400px] rounded-br-[400px] bg-green translate-x-1/4 -translate-y-1/4" />
          {/* Mobile shape */}
          <div className="block md:hidden w-[340px] h-[240px] bg-green rounded-[50%]" />
        </div>
        {/* Actual product/fruit image */}
        <div className="relative z-10 flex items-center justify-center w-[260px] h-[260px] md:w-[520px] md:h-[520px]">
          <Image
            src={heroSectionImage}
            alt="Pear kiwi & Mint product"
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 260px, 520px"
            priority
          />
        </div>
      </div>
    </section>
  );
} 