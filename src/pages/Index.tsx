
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Layout, Database, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedText from '@/components/AnimatedText';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SkillCard from '@/components/SkillCard';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading for animation purposes
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary via-background to-background opacity-60 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <div className="inline-block px-3 py-1 rounded-full bg-secondary text-sm font-medium mb-6 animate-fade-in">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                Available for work
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight mb-6 text-balance">
                Frontend Developer with an eye for <span className="text-gradient">design</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg text-balance">
                I create beautiful, responsive, and user-friendly websites that help businesses grow online.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/projects">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link to="/contact">
                    Contact Me
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <div className="relative z-10 aspect-square rounded-3xl overflow-hidden bg-muted shadow-2xl animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/30 mix-blend-overlay"></div>
                <img
                  src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Naol Getahun"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-20 px-6 md:px-10 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <AnimatedText 
              text="My Expertise"
              className="text-3xl md:text-4xl font-display font-semibold mb-4"
            />
            <AnimatedText
              text="Specialized in bringing digital experiences to life"
              className="text-muted-foreground max-w-lg mx-auto"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard
              icon={<Layout size={24} />}
              title="Web Design"
              description="Creating beautiful, intuitive interfaces with a focus on user experience."
              className="animate-delay-100"
            />
            <SkillCard
              icon={<Code size={24} />}
              title="Frontend Development"
              description="Building responsive websites with modern technologies like React."
              className="animate-delay-200"
            />
            <SkillCard
              icon={<Database size={24} />}
              title="Backend Development"
              description="Implementing server-side logic and database integration."
              className="animate-delay-300"
            />
            <SkillCard
              icon={<Star size={24} />}
              title="Digital Experience"
              description="Creating end-to-end digital experiences that delight users."
              className="animate-delay-400"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/skills">
                View All Skills <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            <div className="text-center p-6 rounded-xl bg-secondary/40">
              <h3 className="text-3xl md:text-4xl font-display font-semibold mb-2">3+</h3>
              <p className="text-muted-foreground text-sm">Years Experience</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-secondary/40">
              <h3 className="text-3xl md:text-4xl font-display font-semibold mb-2">50+</h3>
              <p className="text-muted-foreground text-sm">Projects Completed</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-secondary/40">
              <h3 className="text-3xl md:text-4xl font-display font-semibold mb-2">20+</h3>
              <p className="text-muted-foreground text-sm">Happy Clients</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-secondary/40">
              <h3 className="text-3xl md:text-4xl font-display font-semibold mb-2">4</h3>
              <p className="text-muted-foreground text-sm">Languages Spoken</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-10 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedText
            text="Let's Work Together"
            className="text-3xl md:text-4xl font-display font-semibold mb-6"
          />
          <AnimatedText
            text="Have a project in mind? Let's create something amazing together. I'm available for freelance work."
            className="text-muted-foreground mb-8 max-w-2xl mx-auto"
          />
          <Button asChild size="lg" className="rounded-full">
            <Link to="/contact">
              Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
