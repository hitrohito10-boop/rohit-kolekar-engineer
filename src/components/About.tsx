import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, MapPin, Calendar } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "MSc in Mechanical Engineering",
      institution: "Trinity College Dublin",
      period: "2024-25",
      status: "Ongoing",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      degree: "B.E. in Mechanical Engineering",
      institution: "University of Mumbai",
      period: "2020-23",
      status: "Completed",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      degree: "Diploma in Mechanical Engineering",
      institution: "University of Mumbai",
      period: "2016-19", 
      status: "Completed",
      icon: <GraduationCap className="w-5 h-5" />
    }
  ];

  const skills = [
    "Model-Based Development",
    "Embedded System Validation",
    "SOLIDWORKS (Certified)",
    "Automotive Applications",
    "Thermal Management",
    "Computational Analysis",
    "Zero-Carbon Technologies",
    "MATLAB/Simulink",
    "Product Development",
    "System Optimization"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A dedicated mechanical engineer with expertise in advanced product development, 
            computational analysis, and sustainable engineering solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="animate-slide-in">
            <Card className="shadow-medium hover-lift border-0 card-gradient">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
                  <Award className="w-6 h-6 engineering-accent" />
                  Professional Background
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    With approximately four years of experience in mechanical engineering, 
                    I specialize in model-based development and embedded system validation 
                    for automotive applications. My expertise spans from conceptual design 
                    to implementation of sustainable engineering solutions.
                  </p>
                  <p>
                    I hold a Professional SOLIDWORKS Certificate and am currently pursuing 
                    an MSc in Mechanical Engineering at Trinity College Dublin, focusing 
                    on zero-carbon technologies and advanced computational analysis.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-engineering-accent">
                    <MapPin className="w-4 h-4" />
                    Based in Dublin, Ireland
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="mt-6 shadow-medium hover-lift border-0 card-gradient">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-primary">
                  Key Skills & Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education Timeline */}
          <div className="animate-slide-in">
            <h3 className="text-2xl font-semibold mb-8 text-primary flex items-center gap-2">
              <GraduationCap className="w-6 h-6 engineering-accent" />
              Educational Journey
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <Card key={index} className="shadow-medium hover-lift border-0 card-gradient">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-engineering-accent mt-1">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-primary">{item.degree}</h4>
                          <Badge 
                            variant={item.status === "Ongoing" ? "default" : "secondary"}
                            className={item.status === "Ongoing" 
                              ? "bg-engineering-accent text-white" 
                              : "bg-muted text-muted-foreground"
                            }
                          >
                            {item.status}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-2">{item.institution}</p>
                        <div className="flex items-center gap-1 text-sm text-engineering-grey">
                          <Calendar className="w-4 h-4" />
                          {item.period}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;