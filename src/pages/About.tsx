
import React, { useEffect, useRef } from 'react';
import { Calendar, Globe, Briefcase, Book, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedText from '@/components/AnimatedText';

const About = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-blur-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary via-background to-background opacity-60 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedText
              text="About Me"
              className="text-4xl md:text-5xl font-display font-semibold mb-6"
            />
            <AnimatedText
              text="Get to know more about my journey, skills, and experiences."
              className="text-muted-foreground text-lg"
            />
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div ref={imageRef} className="opacity-0 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Naol Getahun"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            </div>
            
            <div>
              <div className="space-y-6">
                <AnimatedText
                  text="Who I Am"
                  className="text-3xl font-display font-semibold"
                />
                <AnimatedText
                  text="I'm Naol Getahun, a passionate frontend developer based in Ancona, Italy. With expertise in web design and development, I strive to create exceptional digital experiences that help businesses succeed online."
                  className="text-muted-foreground"
                />
                <AnimatedText
                  text="My journey in web development began with a curiosity about how websites work, which evolved into a passion for creating them. I enjoy the perfect blend of logical problem-solving and creative design that web development offers."
                  className="text-muted-foreground"
                />
                <AnimatedText
                  text="Currently pursuing Digital Economics and Business at UNIVPM, I'm constantly expanding my knowledge and skills to stay at the forefront of web technologies."
                  className="text-muted-foreground"
                />
                
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="bg-secondary/70 rounded-full p-2 mr-3">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Location</h3>
                      <p className="text-sm text-muted-foreground">Ancona, Italy</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-secondary/70 rounded-full p-2 mr-3">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Experience</h3>
                      <p className="text-sm text-muted-foreground">3+ Years</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-secondary/70 rounded-full p-2 mr-3">
                      <Book className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Education</h3>
                      <p className="text-sm text-muted-foreground">UNIVPM Digital Economics</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-secondary/70 rounded-full p-2 mr-3">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Availability</h3>
                      <p className="text-sm text-muted-foreground">Full-time, Remote</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button asChild className="rounded-full">
                    <Link to="/contact">
                      Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-16 px-6 md:px-10 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <AnimatedText
              text="Languages"
              className="text-3xl font-display font-semibold mb-4"
            />
            <AnimatedText
              text="I'm fluent in multiple languages, which helps me work with clients globally."
              className="text-muted-foreground max-w-2xl mx-auto"
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 subtle-shadow hover-lift">
              <h3 className="text-xl font-medium mb-2">English</h3>
              <p className="text-muted-foreground">Fluent</p>
            </div>
            <div className="bg-white rounded-xl p-6 subtle-shadow hover-lift">
              <h3 className="text-xl font-medium mb-2">Amharic</h3>
              <p className="text-muted-foreground">Fluent</p>
            </div>
            <div className="bg-white rounded-xl p-6 subtle-shadow hover-lift">
              <h3 className="text-xl font-medium mb-2">Oromo</h3>
              <p className="text-muted-foreground">Fluent</p>
            </div>
            <div className="bg-white rounded-xl p-6 subtle-shadow hover-lift">
              <h3 className="text-xl font-medium mb-2">Italian</h3>
              <p className="text-muted-foreground">Conversational</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <AnimatedText
              text="Education"
              className="text-3xl font-display font-semibold mb-4"
            />
            <AnimatedText
              text="My academic journey that has shaped my skills and knowledge."
              className="text-muted-foreground max-w-2xl mx-auto"
            />
          </div>
          
          <div className="bg-white rounded-xl p-8 subtle-shadow">
            <div className="border-l-2 border-primary/30 pl-6 relative">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
              <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium mb-2">2023 - 2026 (expected)</span>
              <h3 className="text-xl font-medium mb-2">Digital Economics and Business</h3>
              <h4 className="text-primary mb-3">UNIVPM</h4>
              <p className="text-muted-foreground max-w-2xl">
                Studying the intersection of technology and business, focusing on how digital solutions drive economic growth and business transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-10 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedText
            text="Interested in working together?"
            className="text-3xl md:text-4xl font-display font-semibold mb-6"
          />
          <AnimatedText
            text="Let's discuss how I can help bring your ideas to life and create exceptional digital experiences for your business."
            className="text-muted-foreground mb-8 max-w-2xl mx-auto"
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/projects">
                View My Work
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
