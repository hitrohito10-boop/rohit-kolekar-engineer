import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Zap, Thermometer, Snowflake, Shield, BarChart3 } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Battery Thermal Management",
      description: "Advanced thermal management system for electric vehicle batteries, focusing on optimal temperature control and battery life extension through innovative cooling solutions.",
      icon: <Thermometer className="w-6 h-6" />,
      tags: ["Thermal Analysis", "Battery Systems", "Electric Vehicles", "SOLIDWORKS"],
      achievement: "Enhanced battery efficiency by 15%",
      color: "engineering-accent"
    },
    {
      title: "RadiAir",
      description: "Revolutionary radiator design optimization project that achieved significant performance improvements through computational fluid dynamics and innovative heat exchanger configurations.",
      icon: <Zap className="w-6 h-6" />,
      tags: ["CFD Analysis", "Heat Transfer", "Performance Optimization", "MATLAB"],
      achievement: "120% power increase achieved",
      color: "primary"
    },
    {
      title: "CryoSync",
      description: "Cryogenic temperature synchronization system for industrial applications, featuring precise temperature control and monitoring for critical manufacturing processes.",
      icon: <Snowflake className="w-6 h-6" />,
      tags: ["Cryogenics", "Temperature Control", "Industrial Systems", "Embedded Systems"],
      achievement: "±0.1°C precision maintained",
      color: "engineering-blue"
    },
    {
      title: "VaxVac",
      description: "Vaccine storage and distribution system with advanced temperature monitoring and fail-safe mechanisms to ensure pharmaceutical product integrity throughout the supply chain.",
      icon: <Shield className="w-6 h-6" />,
      tags: ["Medical Devices", "Cold Chain", "Quality Assurance", "IoT Systems"],
      achievement: "99.9% storage reliability",
      color: "engineering-accent"
    },
    {
      title: "Optimizing Vehicle Emissions",
      description: "Comprehensive emission reduction project focusing on engine optimization, combustion efficiency improvements, and sustainable automotive technologies for environmental compliance.",
      icon: <BarChart3 className="w-6 h-6" />,
      tags: ["Emissions Control", "Engine Optimization", "Sustainability", "Automotive"],
      achievement: "9.6% emission reduction",
      color: "primary"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Portfolio & Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative engineering solutions and research projects that demonstrate 
            expertise in sustainable technologies and advanced system development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="shadow-medium hover-lift border-0 card-gradient group cursor-pointer transition-smooth"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-${project.color}/10 text-${project.color} group-hover:scale-110 transition-bounce`}>
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg text-primary group-hover:text-engineering-accent transition-smooth">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className={`text-sm font-semibold text-${project.color} bg-${project.color}/10 px-3 py-1 rounded-full inline-block`}>
                    🎯 {project.achievement}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="outline"
                      className="text-xs border-muted-foreground/30 hover:border-primary/50 transition-smooth"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  size="sm"
                  className="w-full group-hover:bg-primary/10 transition-smooth"
                >
                  View Details
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 text-primary hover:bg-primary/10 transition-smooth"
          >
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;