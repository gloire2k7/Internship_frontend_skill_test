import Image from 'next/image';
import icon1 from '../assets/second_section_1.png';
import icon2 from '../assets/second_section_2.png';
import icon3 from '../assets/second_section_3.png';
import icon4 from '../assets/second_section_4.png';

const categories = [
  {
    label: 'Essential oils',
    icon: icon1,
    highlighted: false,
  },
  {
    label: 'Natural cosmetics',
    icon: icon2,
    highlighted: false,
  },
  {
    label: 'Diffusers',
    icon: icon3,
    highlighted: true,
  },
  {
    label: 'Aromatherapy',
    icon: icon4,
    highlighted: false,
  },
];

export default function CategoryCardsSection() {
  return (
    <section className="w-full flex flex-col items-center py-8 md:py-16 bg-white">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-8 w-full max-w-5xl px-4">
        {categories.map((cat, idx) => (
          <div
            key={cat.label}
            className={`rounded-[20px] shadow-md flex flex-col items-center justify-center py-8 px-4 transition-all
              ${cat.highlighted
                ? 'bg-green text-white shadow-lg'
                : 'bg-background-gray text-dark-text hover:shadow-lg'}
              ${cat.highlighted ? 'md:-mt-2' : ''}
            `}
          >
            <div className="mb-4 flex items-center justify-center">
              <Image
                src={cat.icon}
                alt={cat.label}
                width={90}
                height={90}
                className="object-contain"
                priority={idx === 2}
              />
            </div>
            <span className={`mt-2 text-base font-medium ${cat.highlighted ? 'text-white' : 'text-green'}`}>{cat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
} 