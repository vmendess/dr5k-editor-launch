import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            Sobre a Comunidade Editor DR5K
          </h2>
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-card">
            <p className="text-lg leading-relaxed text-card-foreground">
              A Comunidade Editor DR5K é feita para editores de vídeo que querem migrar 
              para o mercado de edição DR, onde os ganhos podem ser até 10x maiores que 
              no mercado tradicional. Aprenda tudo para fazer seus primeiros R$ 5.000/mês 
              nesse mercado.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};