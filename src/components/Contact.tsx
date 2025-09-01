import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "rohitrajaram.kolekar@gmail.com",
      link: "mailto:rohitrajaram.kolekar@gmail.com",
      color: "engineering-accent"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone", 
      value: "+353 899607044",
      link: "tel:+353899607044",
      color: "primary"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Dublin, Ireland", 
      link: "",
      color: "engineering-blue"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/rohit-rajaram-kolekar",
      link: "https://linkedin.com/in/rohit-rajaram-kolekar",
      color: "engineering-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss potential collaborations, projects, or opportunities 
            in mechanical engineering and sustainable technologies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <Card key={index} className="shadow-medium hover-lift border-0 card-gradient group">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-3 rounded-full bg-${item.color}/10 text-${item.color} mb-4 group-hover:scale-110 transition-bounce`}>
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{item.label}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`text-sm text-muted-foreground hover:text-${item.color} transition-smooth break-all`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="shadow-strong border-0 card-gradient">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Ready to Start a Project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always interested in discussing innovative engineering solutions, 
                research collaborations, and opportunities to apply my expertise in 
                sustainable technology development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="hero-gradient text-white border-0 hover:opacity-90 transition-smooth"
                  onClick={() => window.location.href = 'mailto:rohitrajaram.kolekar@gmail.com'}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-primary/30 text-primary hover:bg-primary/10 transition-smooth"
                  onClick={() => window.open('https://linkedin.com/in/rohit-rajaram-kolekar', '_blank')}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn Profile
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;