import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contato</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Fale Conosco
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Entre em contato para agendar seu horário ou tirar dúvidas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-8">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Endereço</div>
                      <div className="text-foreground/70">
                        Rua das Palmeiras, 123<br />
                        Centro - São Paulo, SP<br />
                        CEP: 01234-567
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Telefone / WhatsApp</div>
                      <div className="text-foreground/70">
                        (11) 98765-4321
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">E-mail</div>
                      <div className="text-foreground/70">
                        contato@barbershop.com.br
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Horário de Funcionamento</div>
                      <div className="text-foreground/70">
                        Segunda a Sexta: 9h às 20h<br />
                        Sábado: 9h às 18h<br />
                        Domingo: Fechado
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-card rounded-lg overflow-hidden border border-border h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975931780354!2d-46.65462092375477!3d-23.56159786207826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sSão%20Paulo%2C%20State%20of%20São%20Paulo!5e0!3m2!1sen!2sbr!4v1234567890123!5m2!1sen!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Barbearia"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nome</label>
                  <Input 
                    type="text" 
                    placeholder="Seu nome completo" 
                    className="bg-background"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">E-mail</label>
                  <Input 
                    type="email" 
                    placeholder="seu@email.com" 
                    className="bg-background"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Telefone</label>
                  <Input 
                    type="tel" 
                    placeholder="(11) 98765-4321" 
                    className="bg-background"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Mensagem</label>
                  <Textarea 
                    placeholder="Como podemos ajudar você?" 
                    className="bg-background min-h-32"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
