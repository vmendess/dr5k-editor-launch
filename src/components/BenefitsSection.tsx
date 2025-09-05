import { motion } from "framer-motion";
import { MessageCircle, Users, Video, BookOpen } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: MessageCircle,
      title: "Discord Exclusivo",
      description: "Servidor Discord privado com canais específicos para networking e trocas de experiência entre editores DR"
    },
    {
      icon: Users,
      title: "Grupo de Vagas no WhatsApp",
      description: "Oportunidades de trabalho em primeira mão direto no seu WhatsApp, com vagas exclusivas do mercado DR"
    },
    {
      icon: Video,
      title: "Calls Semanais com Samuel",
      description: "Sessões ao vivo semanais para tirar dúvidas e aprender estratégias avançadas de edição DR"
    },
    {
      icon: BookOpen,
      title: "Conteúdos e Materiais Exclusivos",
      description: "Templates, presets, tutoriais e materiais exclusivos que não estão disponíveis em nenhum outro lugar"
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            O que você terá acesso
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="gradient-card backdrop-blur-sm p-6 lg:p-8 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-premium group"
            >
              <div className="flex items-start gap-5">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-card-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};