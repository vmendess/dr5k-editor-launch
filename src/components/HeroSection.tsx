import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, Target, TrendingUp } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-neon-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-neon-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary-glow rounded-full animate-neon-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-accent-glow rounded-full animate-neon-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="mb-12"
        >
          <div className="relative">
            <div className="w-24 h-24 mx-auto mb-8 gradient-primary rounded-2xl flex items-center justify-center text-3xl font-black text-primary-foreground shadow-neon rotate-3 hover:rotate-0 transition-all duration-500">
              EDR5K
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-pulse-glow" />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-glow leading-tight">
            <span className="gradient-primary bg-clip-text text-transparent">ONDE EDITORES</span>
            <br />
            <span className="text-accent-glow">APRENDEM A LUCRAR</span>
            <br />
            <span className="animate-neon-pulse text-foreground">DE VERDADE</span>
          </h1>
        </motion.div>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {[
            { icon: Target, text: "FOQUE NO DR" },
            { icon: TrendingUp, text: "10X MAIS LUCRO" },
            { icon: Zap, text: "RESULTADOS RÁPIDOS" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="flex items-center gap-3 bg-card/40 backdrop-blur-xl px-6 py-3 rounded-2xl border border-primary/30 neon-border"
            >
              <item.icon className="w-6 h-6 text-accent animate-cyber-flicker" />
              <span className="font-bold text-sm text-card-foreground">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
        >
          Migre para o mercado de edição <span className="text-accent font-bold">DR</span> e 
          multiplique seus ganhos em até <span className="text-primary font-bold animate-neon-pulse">10x</span>
        </motion.p>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-12"
        >
          <div className="relative max-w-md mx-auto">
            <div className="gradient-card backdrop-blur-2xl p-8 rounded-3xl border border-primary/20 shadow-premium neon-border">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-3xl text-muted-foreground line-through font-light">
                  R$ 997,00
                </span>
                <div className="bg-destructive/90 backdrop-blur-sm px-4 py-2 rounded-2xl text-sm font-black animate-pulse-glow shadow-neon">
                  🔥 OFERTA LIMITADA
                </div>
              </div>
              <div className="text-7xl font-black text-accent mb-3 animate-neon-pulse">
                R$ 297
              </div>
              <p className="text-muted-foreground text-lg font-medium">Apenas nas próximas 24 horas!</p>
            </div>
            {/* Floating indicators */}
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-accent rounded-full animate-pulse-glow" />
            <div className="absolute -bottom-3 -right-3 w-4 h-4 bg-primary rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, type: "spring", bounce: 0.4 }}
          className="relative"
        >
          <Button 
            size="lg" 
            className="gradient-accent text-accent-foreground font-black text-2xl px-16 py-8 rounded-3xl shadow-accent hover:scale-110 hover:shadow-neon transition-all duration-500 animate-pulse-glow border-2 border-accent/50 backdrop-blur-xl"
          >
            <Zap className="w-8 h-8 mr-4 animate-cyber-flicker" />
            GARANTIR MINHA VAGA AGORA
            <div className="absolute inset-0 bg-gradient-glow rounded-3xl opacity-0 hover:opacity-20 transition-opacity duration-300" />
          </Button>
          
          {/* Floating elements around button */}
          <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary rounded-full animate-bounce" />
          <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
        </motion.div>
      </div>
    </section>
  );
};