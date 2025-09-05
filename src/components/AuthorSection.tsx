import { motion } from "framer-motion";

export const AuthorSection = () => {
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
            Quem Sou Eu
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-card"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 bg-gradient-primary rounded-full flex items-center justify-center text-6xl font-bold text-primary-foreground">
              SA
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                Samuel Andrade
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Editor de vídeos com 6 anos de experiência em marketing digital, 
                focado em DR há mais de 2 anos. Agora compartilho todo meu conhecimento 
                para ajudar outros editores a aumentarem seu faturamento e migrarem 
                para o mercado mais lucrativo da edição.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};