import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

interface ProductCardProps {
  name: string;
  image: string;
  price: string;
}

export default function ProductCard({ name, image, price }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="relative overflow-hidden bg-gradient-to-br from-black/80 to-black/40 border border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300">
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <motion.img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700"
            whileHover={{ scale: 1.1 }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90" />

          {/* Product Info */}
          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-white font-dynaPuff group-hover:text-blue-400 transition-colors duration-300">
                  {name}
                </h3>
                <p className="mt-2 inline-block text-xl font-bold text-blue-400 font-dynaPuff bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">
                  {price}
                </p>
              </div>
              
              <Button 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-poppins group/btn relative overflow-hidden h-12"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center justify-center text-base font-medium">
                  View Product
                  <ArrowUpRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent" />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}