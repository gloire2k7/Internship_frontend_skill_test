import Image from 'next/image';
import thirdSectionImage from '../assets/third_section.png';

export default function AromatherapySection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between bg-white overflow-hidden py-12 md:py-20">
      {/* Left: Image/Shape */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative h-[260px] md:h-[420px]">
        {/* Green background shape */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-full">
          {/* Desktop shape */}
          <div className="hidden md:block w-[350px] h-[350px] rounded-tr-[220px] rounded-br-[220px] rounded-bl-[220px] bg-green" />
          {/* Mobile shape */}
          <div className="block md:hidden mx-auto w-[180px] h-[140px] bg-green rounded-[50%]" />
        </div>
        {/* Product image */}
        <div className="relative z-10 flex items-center justify-center w-[210px] h-[210px] md:w-[340px] md:h-[340px]">
          <Image
            src={thirdSectionImage}
            alt="Aromatherapy product"
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 210px, 340px"
            priority
          />
        </div>
      </div>
      {/* Right: Text and Button */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-end justify-center px-6 md:px-16 mt-8 md:mt-0 text-center md:text-right">
        <h2 className="text-green text-2xl font-bold leading-tight mb-4 md:text-4xl md:mb-6">
          Improve your well-being with Aromatherapy
        </h2>
        <p className="text-gray-text text-base max-w-md mb-8 md:text-[15px]">
          Diffusing can be exactly what you need to add purpose and focus to your daily tasks. We've got tons of fun diffuser blends, with scents to suit every mood, day and situation.
        </p>
        <button className="w-full md:w-auto bg-green text-white font-semibold rounded-md px-8 py-3 text-base md:text-sm shadow-md hover:bg-green/90 transition-colors">
          EXPLORE THE COLLECTION
        </button>
      </div>
    </section>
  );
} 