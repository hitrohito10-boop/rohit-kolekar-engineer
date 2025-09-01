import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cog, Thermometer, Battery, Calculator, Wrench, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Model-Based Design Consulting",
      description: "Expert consultation on model-based development methodologies for automotive and industrial applications, leveraging MATLAB/Simulink expertise.",
      icon: <Calculator className="w-6 h-6" />,
      skills: ["MATLAB/Simulink", "System Modeling", "Validation", "Automotive Applications"],
      color: "primary"
    },
    {
      title: "Thermal Management Solutions",
      description: "Advanced thermal analysis and management system design for batteries, electronics, and industrial processes with computational optimization.",
      icon: <Thermometer className="w-6 h-6" />,
      skills: ["CFD Analysis", "Heat Transfer", "Battery Systems", "Cryogenics"],
      color: "engineering-accent"
    },
    {
      title: "Embedded System Validation",
      description: "Comprehensive validation and testing services for embedded systems in automotive and industrial environments with focus on reliability.",
      icon: <Cog className="w-6 h-6" />,
      skills: ["System Validation", "Testing Protocols", "Quality Assurance", "IoT Systems"],
      color: "engineering-blue"
    },
    {
      title: "Sustainable Technology Development",
      description: "Consulting on zero-carbon technologies and sustainable engineering solutions for environmental compliance and efficiency optimization.",
      icon: <Battery className="w-6 h-6" />,
      skills: ["Zero-Carbon Tech", "Sustainability", "Emissions Control", "Green Engineering"],
      color: "primary"
    },
    {
      title: "CAD Design & Analysis",
      description: "Professional SOLIDWORKS design services including 3D modeling, simulation, and technical documentation for mechanical systems.",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["SOLIDWORKS Certified", "3D Modeling", "Simulation", "Technical Drawing"],
      color: "engineering-accent"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Services & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive engineering consulting services based on proven experience 
            in mechanical design, system validation, and sustainable technology development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="shadow-medium hover-lift border-0 card-gradient group cursor-pointer transition-smooth"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-${service.color}/10 text-${service.color} group-hover:scale-110 transition-bounce`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg text-primary group-hover:text-engineering-accent transition-smooth">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="outline"
                      className="text-xs border-muted-foreground/30 hover:border-primary/50 transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  size="sm"
                  className="w-full group-hover:bg-primary/10 transition-smooth"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="shadow-strong border-0 card-gradient max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Ready to Collaborate?
              </h3>
              <p className="text-muted-foreground mb-6">
                Looking for specialized mechanical engineering expertise? Let's discuss 
                how my experience in sustainable technologies and system development 
                can benefit your project.
              </p>
              <Button 
                size="lg"
                className="hero-gradient text-white border-0 hover:opacity-90 transition-smooth"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Get In Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;