import Image from 'next/image';
import soapImage from '../assets/fifth_section.png';

export default function LuxurySoapsSection() {
  return (
    <section className="w-full min-h-[340px] flex flex-col md:flex-row items-stretch overflow-hidden">
      {/* Left: Text and Button (desktop), overlay (mobile) */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center bg-green px-4 md:px-0 py-12 md:py-0">
        {/* Mobile: overlay text on image */}
        <div className="absolute inset-0 md:hidden">
          <Image src={soapImage} alt="Luxury soaps" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-green/70" />
        </div>
        <div className="relative z-10 flex flex-col items-center md:items-start justify-center w-full max-w-md mx-auto">
          <h2 className="text-white text-2xl md:text-4xl font-bold text-center md:text-left mb-8 leading-tight">
            Our luxury soaps are<br />100% natural providing<br />nourishing benefits for<br />your skin.
          </h2>
          <button className="bg-white text-dark-text font-semibold rounded-md px-10 py-3 text-base md:text-lg shadow-md hover:bg-gray-100 transition-colors">
            SHOP ALL
          </button>
        </div>
      </div>
      {/* Right: Image (desktop only) */}
      <div className="hidden md:block w-1/2 relative min-h-[340px]">
        <Image src={soapImage} alt="Luxury soaps" fill className="object-cover" priority />
      </div>
    </section>
  );
} 