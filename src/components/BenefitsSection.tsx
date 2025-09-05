import { motion } from "framer-motion";
import { MessageCircle, Users, Video, BookOpen } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: MessageCircle,
      title: "Discord Exclusivo",
      description: "Acesso ao servidor Discord privado da comunidade com canais específicos para networking e trocas de experiência"
    },
    {
      icon: Users,
      title: "Grupo de Vagas no WhatsApp",
      description: "Receba oportunidades de trabalho em primeira mão direto no seu WhatsApp"
    },
    {
      icon: Video,
      title: "Calls Semanais com Samuel",
      description: "Sessões ao vivo toda semana para tirar dúvidas e aprender estratégias avançadas"
    },
    {
      icon: BookOpen,
      title: "Conteúdos e Materiais Exclusivos",
      description: "Acesso a templates, presets, tutoriais e materiais que não estão disponíveis em lugar nenhum"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            O que você terá acesso
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-accent/50 transition-all duration-300 shadow-card hover:shadow-accent"
            >
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 p-3 rounded-lg">
                  <benefit.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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