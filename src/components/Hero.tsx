import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import headshot from "@/assets/rohit-headshot.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative">
      <div className="section-container text-center text-white">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img
              src={headshot}
              alt="Rohit Rajaram Kolekar - Mechanical Engineer"
              className="w-48 h-48 rounded-full mx-auto mb-6 shadow-strong border-4 border-white/20 hover-lift"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Rohit Rajaram Kolekar
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-white/90 font-light">
            Mechanical Engineer
          </p>
          
          <p className="text-lg md:text-xl mb-8 text-white/80 max-w-3xl mx-auto leading-relaxed">
            Mechanical Engineer with ~4 years of experience in model-based development, 
            embedded system validation, and automotive applications, focused on sustainable 
            system development and zero-carbon technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToAbout}
              variant="secondary"
              size="lg"
              className="bg-white/10 text-white border-white/20 hover:bg-white hover:text-primary transition-bounce"
            >
              Learn More About Me
              <ArrowDown className="ml-2 w-4 h-4" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="bg-transparent text-white border-white/40 hover:bg-white/10 transition-bounce"
            >
              <Download className="mr-2 w-4 h-4" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;