import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img 
            src="/src/assets/logo-edr5k.png" 
            alt="Comunidade Editor DR5K" 
            className="mx-auto mb-8 h-20 w-auto"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-6 gradient-primary bg-clip-text text-transparent"
        >
          Onde editores aprendem a lucrar de verdade
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Transforme sua carreira de editor: saia do mercado tradicional e 
          migre para o DR, onde os ganhos podem ser até 10x maiores
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-2xl text-muted-foreground line-through">
              De R$ 997,00
            </span>
            <div className="bg-destructive px-3 py-1 rounded-full text-sm font-bold">
              OFERTA LIMITADA
            </div>
          </div>
          <div className="text-5xl font-bold text-accent mb-2">
            R$ 297,00
          </div>
          <p className="text-muted-foreground">Apenas hoje!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button 
            size="lg" 
            className="gradient-accent text-accent-foreground font-bold text-lg px-8 py-6 rounded-xl shadow-accent hover:scale-105 transition-all duration-300"
          >
            FAÇA PARTE DA COMUNIDADE EDR5K
          </Button>
        </motion.div>
      </div>
    </section>
  );
};