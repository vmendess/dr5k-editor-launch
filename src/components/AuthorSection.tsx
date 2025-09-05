import { motion } from "framer-motion";

export const AuthorSection = () => {
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
            Quem Sou Eu
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="gradient-card backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-border shadow-premium"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Professional Photo Container */}
            <div className="flex-shrink-0">
              <div className="photo-container w-48 h-48 md:w-56 md:h-56">
                <div className="photo-inner w-full h-full">
                  <img 
                    src="/samuel.png" 
                    alt="Samuel Andrade - Editor DR5K" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback para quando a imagem não existir
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `
                        <div class="w-full h-full bg-gradient-primary rounded-full flex items-center justify-center text-4xl font-bold text-primary-foreground">
                          SA
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-card-foreground">
                Samuel Andrade
              </h3>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Editor de vídeos com <span className="text-accent font-semibold">6 anos de experiência</span> em marketing digital, 
                  especializado em DR há mais de 2 anos.
                </p>
                <p>
                  Agora compartilho todo meu conhecimento para ajudar outros editores a 
                  <span className="text-primary font-semibold"> aumentarem seu faturamento</span> e migrarem 
                  para o mercado mais lucrativo da edição.
                </p>
              </div>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-6 mt-8 justify-center md:justify-start">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">6+</div>
                  <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">Anos em DR</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">R$ 5K+</div>
                  <div className="text-sm text-muted-foreground">Meta Mensal</div>
                </div>
              </div>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};