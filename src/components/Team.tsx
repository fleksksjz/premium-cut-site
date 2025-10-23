import barber1 from "@/assets/barber-1.jpg";
import barber2 from "@/assets/barber-2.jpg";
import barber3 from "@/assets/barber-3.jpg";
import { Instagram, Facebook } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Carlos Silva",
      role: "Master Barber",
      specialty: "Especialista em cortes clássicos",
      image: barber1,
      social: {
        instagram: "#",
        facebook: "#"
      }
    },
    {
      name: "Felipe Santos",
      role: "Senior Barber",
      specialty: "Expert em barbas e degradês",
      image: barber2,
      social: {
        instagram: "#",
        facebook: "#"
      }
    },
    {
      name: "Ricardo Costa",
      role: "Barber Stylist",
      specialty: "Cortes modernos e pigmentação",
      image: barber3,
      social: {
        instagram: "#",
        facebook: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nossa Equipe</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Barbeiros Especializados
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Profissionais apaixonados pelo que fazem, comprometidos em entregar excelência em cada atendimento
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg bg-background border border-border hover:border-primary transition-all duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Social Links */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={member.social.instagram}
                      className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors"
                    >
                      <Instagram size={18} />
                    </a>
                    <a 
                      href={member.social.facebook}
                      className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors"
                    >
                      <Facebook size={18} />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <div className="text-primary font-semibold text-sm mb-2">{member.role}</div>
                  <p className="text-foreground/70 text-sm">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 p-8 bg-background rounded-lg border border-border">
            <p className="text-foreground/70 text-lg">
              Todos os nossos barbeiros são certificados e passam por treinamentos regulares 
              para garantir sempre o melhor serviço para você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
