import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bot, ShoppingBag, ArrowUpRight } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: 'BALLZ SÜCÜK',
    description: 'Experience the perfect blend of spicy and savory with our signature Sücük flavored energy balls.',
    image: 'https://images.unsplash.com/photo-1581263518256-ba4a28ed5517?w=800&h=1000&fit=crop',
    price: '€2.99'
  },
  {
    name: 'BALLZ CHEESEJÄLAPEN',
    description: 'A fiery combination of creamy cheese and spicy jalapeños that will ignite your taste buds.',
    image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=800&h=1000&fit=crop',
    price: '€2.99'
  },
  {
    name: 'BALLZ BUBBLEGUM',
    description: 'Sweet, nostalgic, and packed with energy - our bubblegum flavor brings back childhood memories.',
    image: 'https://images.unsplash.com/photo-1581263518256-ba4a28ed5517?w=800&h=1000&fit=crop',
    price: '€2.99'
  },
  {
    name: 'ICETEA PEACH',
    description: 'Refresh yourself with our perfectly balanced peach ice tea, blending sweet and subtle flavors.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&h=1000&fit=crop',
    price: '€3.99'
  }
];

const ProductSection = ({ product, imageLeft = true, index }: { 
  product: typeof products[0];
  imageLeft?: boolean;
  index: number;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="grid md:grid-cols-2 gap-8 items-center"
    >
      {/* Image Section */}
      <div className={`relative aspect-[4/3] ${!imageLeft ? 'md:order-last' : ''}`}>
        <div className="absolute inset-0 rounded-3xl overflow-hidden group">
          <motion.img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-black/60" />
        </div>
      </div>

      {/* Content Section */}
      <div className={`space-y-6 ${imageLeft ? 'md:pl-8' : 'md:pr-8'}`}>
        <div className="space-y-2">
          <h3 className="text-3xl font-bold font-dynaPuff bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {product.name}
          </h3>
          <p className="text-xl text-gray-400 font-poppins">
            {product.description}
          </p>
        </div>
        <p className="inline-block text-xl font-bold text-blue-400 font-dynaPuff bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">
          {product.price}
        </p>
        <Button 
          className="bg-blue-500 hover:bg-blue-600 text-white font-poppins group relative overflow-hidden h-12 px-6"
        >
          <span className="relative z-10 flex items-center justify-center text-base font-medium">
            View Product
            <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </span>
        </Button>
      </div>
    </motion.div>
  );
};

const ServiceCard = ({ icon: Icon, title, description, link }: {
  icon: typeof Bot;
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Animated Border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
      
      {/* Card Content */}
      <div className="relative glass-card p-8 rounded-3xl group-hover:bg-black/60 transition duration-500">
        <div className="relative z-10">
          <Icon className="w-12 h-12 text-blue-500 mb-6 transform group-hover:scale-110 transition duration-500" />
          <h2 className="text-3xl font-bold mb-4 font-dynaPuff group-hover:text-blue-400 transition duration-300">
            {title}
          </h2>
          <p className="text-gray-400 mb-6 font-poppins group-hover:text-gray-300 transition duration-300">
            {description}
          </p>
          <Button
            className="font-poppins bg-blue-500/10 hover:bg-blue-500 text-blue-400 hover:text-white border border-blue-500/20 hover:border-blue-500 transition-all duration-300"
            size="lg"
            onClick={() => window.location.href = link}
          >
            Explore Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.marquee-text', {
        xPercent: -50,
        repeat: -1,
        duration: 15,
        ease: 'linear',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-black/80" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920"
          >
            <source src="https://your-video-url.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 font-dynaPuff bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            #VONBROS4BROS
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl font-poppins"
          >
            Join the revolution with our AI tools and energy drinks
          </motion.p>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          <ServiceCard
            icon={Bot}
            title="AI Tools"
            description="Experience the future with our cutting-edge AI tools at ai.4bro.de"
            link="https://ai.4bro.de"
          />
          <ServiceCard
            icon={ShoppingBag}
            title="4BRO Shop"
            description="Fuel your day with our energy drinks and snacks at shop.4bro.de"
            link="https://shop.4bro.de"
          />
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-20 font-dynaPuff bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Products
          </h2>
          <div className="space-y-32">
            {products.map((product, index) => (
              <ProductSection 
                key={product.name} 
                product={product} 
                imageLeft={index % 2 === 0}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* BRO APP Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-black/80" />
        </div>
        <div className="container mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-dynaPuff bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              DIE BRO APP
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-poppins">
              Lade dir jetzt deine 4BRO APP herunter. Mit der 4BRO APP sammelst du BRO POINTS, mit denen du dir exklusive Goodies kaufen kannst.
            </p>
            <p className="text-lg text-gray-400 mb-12 font-poppins">
              Setze die BRO POINTS für VIP Konzertkarten, Goodies, Gutscheine oder für 4BRO Food Boxen ein. Mit jedem Produkt geben wir dir was zurück!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="bg-blue-500 hover:bg-blue-600 text-white font-poppins px-8 h-14 text-lg"
                size="lg"
              >
                Download for iOS
              </Button>
              <Button 
                className="bg-blue-500 hover:bg-blue-600 text-white font-poppins px-8 h-14 text-lg"
                size="lg"
              >
                Download for Android
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}