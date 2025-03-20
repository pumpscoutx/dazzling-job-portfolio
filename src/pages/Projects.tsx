
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import AnimatedText from '@/components/AnimatedText';

const projectsData = [
  {
    title: "E-commerce Website",
    description: "A fully responsive e-commerce platform with product filtering, cart functionality, and payment integration.",
    imageSrc: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Tailwind CSS", "Stripe", "Node.js"],
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "A minimalist portfolio website for a photographer with gallery and contact form.",
    imageSrc: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Framer Motion", "GSAP", "Firebase"],
    link: "#"
  },
  {
    title: "Dashboard UI",
    description: "An admin dashboard with data visualization, user management, and analytics.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "D3.js", "Material UI", "Express"],
    link: "#"
  },
  {
    title: "Travel Blog",
    description: "A travel blog with content management system and social sharing features.",
    imageSrc: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Next.js", "Contentful", "Vercel", "TypeScript"],
    link: "#"
  },
  {
    title: "Restaurant Website",
    description: "A restaurant website with menu, reservation system, and location map.",
    imageSrc: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    link: "#"
  },
  {
    title: "Task Manager App",
    description: "A task management application with authentication and real-time updates.",
    imageSrc: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Firebase", "Redux", "SCSS"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary via-background to-background opacity-60 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedText
              text="My Projects"
              className="text-4xl md:text-5xl font-display font-semibold mb-6"
            />
            <AnimatedText
              text="A showcase of my best work, featuring web applications, websites, and UI/UX designs."
              className="text-muted-foreground text-lg"
            />
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                tags={project.tags}
                link={project.link}
                className={`animate-delay-${index * 100}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 md:px-10 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <AnimatedText
              text="Client Testimonials"
              className="text-3xl font-display font-semibold mb-4"
            />
            <AnimatedText
              text="What clients say about working with me"
              className="text-muted-foreground max-w-2xl mx-auto"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 subtle-shadow hover-lift">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
                    alt="Client" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">John Smith</h3>
                  <p className="text-sm text-muted-foreground">CEO, Tech Solutions</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "Naol delivered exactly what we needed. He was professional, responsive, and the final product exceeded our expectations. I would definitely work with him again."
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 subtle-shadow hover-lift">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
                    alt="Client" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">Sarah Johnson</h3>
                  <p className="text-sm text-muted-foreground">Marketing Director, Brand Co.</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "Working with Naol was a pleasure. He understood our vision immediately and transformed it into a beautiful website that perfectly represents our brand. Highly recommended!"
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
