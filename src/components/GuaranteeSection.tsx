import { motion } from "framer-motion";
import { Shield, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const GuaranteeSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-card mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <AlertCircle className="h-8 w-8 text-destructive animate-pulse" />
              <div className="bg-destructive text-destructive-foreground px-4 py-2 rounded-full font-bold">
                OFERTA LIMITADA
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">
              Apenas hoje por R$ 297,00
            </h3>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <Clock className="h-6 w-6 text-accent" />
              <span className="text-lg font-semibold text-accent">
                Oferta expira em: 23:59:45
              </span>
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border shadow-card mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-8 w-8 text-accent" />
              <h4 className="text-xl font-bold text-card-foreground">
                Garantia de 7 Dias
              </h4>
            </div>
            <p className="text-muted-foreground">
              Se você não ficar satisfeito, devolvemos 100% do seu dinheiro em até 7 dias.
            </p>
          </div>

          <Button 
            size="lg" 
            className="gradient-accent text-accent-foreground font-bold text-xl px-12 py-8 rounded-xl shadow-accent hover:scale-105 transition-all duration-300 animate-pulse-glow"
          >
            QUERO GARANTIR MINHA VAGA AGORA
          </Button>
        </motion.div>
      </div>
    </section>
  );
};