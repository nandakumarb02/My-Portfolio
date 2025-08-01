import { Button } from "@/components/ui/button";
import { ArrowDown, Eye, Mail } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative code-bg">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                  <span className="text-gradient">Designing</span>
                  <br />
                  Purposeful
                  <br />
                  <span className="text-accent">Interfaces</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-muted-foreground">
                  That Just Work
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                UI/UX Designer focused on clean, intuitive digital products that bridge 
                the gap between users and technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  variant="cta" 
                  className="group"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  View Projects
                </Button>
                <Button 
                  size="lg" 
                  variant="glass"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden glass-card p-2 glow-accent">
                <img
                  src={profileImage}
                  alt="Nanda Kumar - UI/UX Designer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-full animate-pulse">
                <span className="text-sm font-semibold text-accent">UI/UX</span>
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-full animate-pulse delay-1000">
                <span className="text-sm font-semibold text-accent">Designer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-accent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;