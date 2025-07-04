import Image from 'next/image';
import thirdSectionImage from '../assets/third_section.png';

export default function AromatherapySection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between bg-white overflow-hidden py-12 md:py-20">
      {/* Left: Image/Shape */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative h-[260px] md:h-[500px]">
        {/* Green background shape */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Desktop shape */}
          <div className="hidden md:block w-[600px] h-[600px] rounded-tl-[400px] rounded-bl-[400px] rounded-br-[400px] bg-green -translate-x-1/4" />
          {/* Mobile shape */}
          <div className="block md:hidden w-[220px] h-[180px] bg-green rounded-[50%]" />
        </div>
        {/* Product image */}
        <div className="relative z-10 flex items-center justify-center w-[180px] h-[180px] md:w-[340px] md:h-[340px]">
          <Image
            src={thirdSectionImage}
            alt="Aromatherapy product"
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 180px, 340px"
            priority
          />
        </div>
      </div>
      {/* Right: Text and Button */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center px-6 md:px-16 mt-8 md:mt-0">
        <h2 className="text-green text-3xl md:text-5xl font-bold leading-tight text-center md:text-left mb-6">
          Improve your well-being<br className="hidden md:block" /> with Aromatherapy
        </h2>
        <p className="text-gray-text text-base md:text-[16px] max-w-md text-center md:text-left mb-8">
          Diffusing can be exactly what you need to add purpose and focus to your daily tasks. We've got tons of fun diffuser blends, with scents to suit every mood, day and situation.
        </p>
        <button className="bg-green text-white font-semibold rounded-md px-8 py-3 text-base md:text-lg shadow-md hover:bg-green/90 transition-colors">
          EXPLORE THE COLLECTION
        </button>
      </div>
    </section>
  );
} 