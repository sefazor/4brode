import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <div className="fixed w-full top-0 z-50 flex justify-center pt-10">
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-[80%] rounded-full backdrop-blur-lg bg-black/50 border border-blue-500/20 animate-pulse-glow"
      >
        <div className="px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <a href="/" className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-blue-500 hover:to-purple-600 transition-all duration-300">
                4BRO
              </a>
            </motion.div>

            <nav className="hidden md:flex items-center gap-8">
              <motion.a 
                href="https://ai.4bro.de" 
                className="text-lg hover:text-blue-400 transition-colors relative group"
                whileHover={{ scale: 1.05 }}
              >
                AI Tools
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.a>
              <motion.a 
                href="https://shop.4bro.de" 
                className="text-lg hover:text-blue-400 transition-colors relative group"
                whileHover={{ scale: 1.05 }}
              >
                Shop
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button 
                  variant="outline" 
                  className="bg-blue-500/10 hover:bg-blue-500/20 rounded-full font-poppins border-blue-500/50 hover:border-blue-500 text-lg px-8"
                >
                  Join the Club
                </Button>
              </motion.div>
            </nav>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </motion.header>
    </div>
  );
}