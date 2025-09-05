import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Sobre a Comunidade Editor DR5K
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-12"></div>
          
          <div className="gradient-card backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-border shadow-premium">
            <p className="text-xl leading-relaxed text-card-foreground max-w-4xl mx-auto">
              A Comunidade Editor DR5K é feita para editores de vídeo que querem migrar 
              para o mercado de edição <span className="text-accent font-semibold">DR</span>, onde os ganhos podem ser até 
              <span className="text-primary font-semibold"> 10x maiores</span> que no mercado tradicional.
            </p>
            <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
              Aprenda tudo para fazer seus primeiros <span className="text-accent font-semibold">R$ 5.000/mês</span> nesse mercado.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};