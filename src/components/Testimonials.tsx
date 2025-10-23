import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "João Pereira",
      role: "Cliente há 3 anos",
      text: "Melhor barbearia da região! Atendimento impecável e o Carlos sempre acerta no corte. Virei cliente fiel.",
      rating: 5
    },
    {
      name: "André Lima",
      role: "Cliente há 2 anos",
      text: "Ambiente top, profissionais qualificados e aquele cafézinho na espera. Vale cada centavo!",
      rating: 5
    },
    {
      name: "Rafael Souza",
      role: "Cliente há 1 ano",
      text: "Nunca mais troquei de barbearia. Felipe é especialista em degradê e sempre fico satisfeito com o resultado.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Depoimentos</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              A satisfação dos nossos clientes é nossa maior conquista
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-background p-8 rounded-lg border border-border hover:border-primary transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground/80 mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-primary">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Reviews CTA */}
          <div className="text-center mt-12 p-8 bg-background rounded-lg border border-border">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-2xl font-bold">4.9</span>
              <span className="text-foreground/60">/ 5.0</span>
            </div>
            <p className="text-foreground/70">
              Baseado em mais de 300 avaliações no Google
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
