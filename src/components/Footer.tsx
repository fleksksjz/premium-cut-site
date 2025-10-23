import { Instagram, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">B</span>
              </div>
              <span className="text-xl font-bold">Barber Shop</span>
            </div>
            <p className="text-foreground/70 text-sm">
              Tradição e modernidade em cada corte. Seu estilo é nossa arte.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-foreground/70 hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#team" className="text-foreground/70 hover:text-primary transition-colors">
                  Equipe
                </a>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h4 className="font-bold mb-4">Horário</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>Segunda - Sexta: 9h - 20h</li>
              <li>Sábado: 9h - 18h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-foreground/70">
                <Phone size={16} className="text-primary" />
                (11) 98765-4321
              </li>
              <li className="flex items-center gap-2 text-foreground/70">
                <Mail size={16} className="text-primary" />
                contato@barbershop.com.br
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
          <p>© 2024 Barber Shop. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
