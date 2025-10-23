import { Scissors, Wind, Sparkles, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Corte de Cabelo",
      description: "Cortes modernos e clássicos adaptados ao seu estilo",
      price: "R$ 60",
      duration: "45 min"
    },
    {
      icon: Wind,
      title: "Barba Completa",
      description: "Modelagem, aparar e finalização com toalha quente",
      price: "R$ 45",
      duration: "30 min"
    },
    {
      icon: Sparkles,
      title: "Combo Premium",
      description: "Corte + barba com tratamento facial incluído",
      price: "R$ 95",
      duration: "75 min",
      featured: true
    },
    {
      icon: Palette,
      title: "Pigmentação",
      description: "Cobertura de fios brancos e tonalização profissional",
      price: "R$ 80",
      duration: "60 min"
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Serviços</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Nossos Serviços Premium
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Experiências personalizadas com técnicas especializadas e produtos de alta qualidade
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className={`bg-card p-8 rounded-lg border transition-all duration-300 hover:scale-105 ${
                    service.featured 
                      ? 'border-primary shadow-gold' 
                      : 'border-border hover:border-primary'
                  }`}
                >
                  {service.featured && (
                    <div className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
                      MAIS POPULAR
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">{service.price}</div>
                      <div className="text-sm text-foreground/60">{service.duration}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-foreground/70 mb-6">{service.description}</p>

                  <Button 
                    variant={service.featured ? "default" : "outline"}
                    className={service.featured ? "w-full bg-primary hover:bg-primary/90" : "w-full"}
                  >
                    Agendar Serviço
                  </Button>
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="text-center bg-card p-8 rounded-lg border border-border">
            <p className="text-foreground/70 mb-4">
              <strong className="text-foreground">Não encontrou o serviço que procura?</strong> 
              {" "}Entre em contato conosco para consultas personalizadas e pacotes especiais.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
