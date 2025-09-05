import { motion } from "framer-motion";
import { Shield, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const GuaranteeSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="gradient-card backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-border shadow-premium mb-8">
            <div className="flex items-center justify-center gap-3 mb-8">
              <AlertCircle className="h-7 w-7 text-destructive" />
              <div className="bg-destructive text-destructive-foreground px-4 py-2 rounded-lg font-bold text-sm">
                OFERTA LIMITADA
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-card-foreground">
              Apenas hoje por R$ 297,00
            </h3>
            
            <div className="flex items-center justify-center gap-3 mb-8">
              <Clock className="h-5 w-5 text-accent" />
              <span className="text-lg font-semibold text-accent">
                Oferta expira em: 23:59:45
              </span>
            </div>
          </div>

          <div className="gradient-card backdrop-blur-sm p-6 md:p-8 rounded-xl border border-border shadow-card mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-7 w-7 text-primary" />
              <h4 className="text-xl font-bold text-card-foreground">
                Garantia de 7 Dias
              </h4>
            </div>
            <p className="text-muted-foreground text-lg">
              Se você não ficar satisfeito, devolvemos 100% do seu dinheiro em até 7 dias.
            </p>
          </div>

          <Button 
            size="lg" 
            className="gradient-accent text-accent-foreground font-bold text-xl px-12 py-6 rounded-xl shadow-accent hover:scale-105 transition-all duration-300"
          >
            QUERO GARANTIR MINHA VAGA AGORA
          </Button>
        </motion.div>
      </div>
    </section>
  );
};