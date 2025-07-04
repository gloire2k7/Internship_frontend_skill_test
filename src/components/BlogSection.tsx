import Image from 'next/image';
import blogImage from '../assets/blog_section.png';

const blogPosts = [
  {
    title: 'How to create your own essential oil diffuser blends',
    excerpt: `As you begin creating your own diffuser blends, it's important to keep a few ...`,
    image: blogImage,
  },
  {
    title: 'How to create your own essential oil diffuser blends',
    excerpt: `As you begin creating your own diffuser blends, it's important to keep a few ...`,
    image: blogImage,
  },
  {
    title: 'How to create your own essential oil diffuser blends',
    excerpt: `As you begin creating your own diffuser blends, it's important to keep a few ...`,
    image: blogImage,
  },
];

export default function BlogSection() {
  return (
    <section className="w-full py-12 md:py-20 bg-white flex flex-col items-center">
      <h2 className="text-green text-3xl md:text-4xl font-bold mb-10 text-center">BLOG</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
            <div className="relative w-full h-[180px] md:h-[200px]">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-green text-lg font-semibold mb-2 leading-snug">{post.title}</h3>
              <hr className="my-2 border-background-gray" />
              <p className="text-gray-text text-sm flex-1">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 