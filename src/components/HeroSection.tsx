import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, Target, TrendingUp } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Clean Logo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="relative inline-block">
            <div className="w-20 h-20 mx-auto mb-8 gradient-primary rounded-xl flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-premium transition-all duration-300 hover:scale-105">
              EDR5K
            </div>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="gradient-primary bg-clip-text text-transparent">ONDE EDITORES</span>
            <br />
            <span className="text-accent font-bold">APRENDEM A LUCRAR</span>
            <br />
            <span className="text-foreground">DE VERDADE</span>
          </h1>
        </motion.div>

        {/* Clean Key Points */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {[
            { icon: Target, text: "FOQUE NO DR" },
            { icon: TrendingUp, text: "GANHOS 10X MAIORES" },
            { icon: Zap, text: "RESULTADOS REAIS" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="flex items-center gap-3 bg-card/60 backdrop-blur-sm px-5 py-3 rounded-xl border border-border shadow-card"
            >
              <item.icon className="w-5 h-5 text-accent" />
              <span className="font-semibold text-sm text-card-foreground">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed"
        >
          Migre para o mercado de edição <span className="text-accent font-semibold">DR</span> e 
          multiplique seus ganhos em até <span className="text-primary font-semibold">10x</span>
        </motion.p>

        {/* Clean Pricing Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="relative max-w-sm mx-auto">
            <div className="gradient-card backdrop-blur-sm p-8 rounded-2xl border border-border shadow-premium">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-2xl text-muted-foreground line-through">
                  R$ 997,00
                </span>
                <div className="bg-destructive px-3 py-1 rounded-lg text-sm font-bold">
                  🔥 OFERTA LIMITADA
                </div>
              </div>
              <div className="text-6xl font-bold text-accent mb-4">
                R$ 297
              </div>
              <p className="text-muted-foreground">Apenas nas próximas 24 horas!</p>
            </div>
          </div>
        </motion.div>

        {/* Clean CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button 
            size="lg" 
            className="gradient-accent text-accent-foreground font-bold text-xl px-12 py-6 rounded-xl shadow-accent hover:scale-105 transition-all duration-300"
          >
            <Zap className="w-6 h-6 mr-3" />
            GARANTIR MINHA VAGA AGORA
          </Button>
        </motion.div>
      </div>
    </section>
  );
};