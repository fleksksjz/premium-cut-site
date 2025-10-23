import { Scissors, Award, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Scissors,
      title: "Técnicas Premium",
      description: "Cortes clássicos e modernos executados com precisão e estilo"
    },
    {
      icon: Award,
      title: "Barbeiros Especializados",
      description: "Profissionais certificados e em constante atualização"
    },
    {
      icon: Users,
      title: "Atendimento Exclusivo",
      description: "Experiência personalizada para cada cliente"
    }
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Sobre Nós</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Tradição e Modernidade
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Há mais de 15 anos transformando o cuidado masculino em uma experiência premium. 
              Combinamos técnicas tradicionais da barbearia clássica com tendências contemporâneas.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-background p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Story */}
          <div className="bg-background p-8 md:p-12 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-4">Nossa História</h3>
            <div className="space-y-4 text-foreground/70">
              <p>
                Fundada em 2009, nossa barbearia nasceu do sonho de criar um espaço onde o cuidado masculino 
                fosse elevado a uma verdadeira arte. Começamos com um único barbeiro e a visão de oferecer 
                não apenas cortes de cabelo, mas uma experiência completa.
              </p>
              <p>
                Hoje, somos referência na região, conhecidos pela excelência técnica, ambiente sofisticado 
                e atendimento diferenciado. Cada cliente é tratado com atenção exclusiva, garantindo que 
                saia não apenas com um visual impecável, mas também com sua confiança renovada.
              </p>
              <p>
                Nosso compromisso é com a qualidade, tradição e inovação constante, sempre buscando 
                superar expectativas e criar momentos memoráveis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
