
import React from 'react';
import { Code, Layout, Server, Database, Brush, Users, Smartphone, Globe, Layers, Star, LineChart, CopyCheck } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SkillCard from '@/components/SkillCard';
import AnimatedText from '@/components/AnimatedText';

const technicalSkills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 92 },
  { name: "React", level: 88 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "UI/UX Design", level: 82 },
  { name: "Responsive Design", level: 92 },
  { name: "Git", level: 85 },
  { name: "RESTful APIs", level: 83 },
  { name: "MongoDB", level: 78 },
];

const skillCategories = [
  {
    title: "Web Design",
    icon: <Layout />,
    description: "Creating beautiful, intuitive interfaces with a focus on usability and aesthetics.",
    skills: ["UI/UX Design", "Wireframing", "Prototyping", "Responsive Design"]
  },
  {
    title: "Frontend Development",
    icon: <Code />,
    description: "Building responsive, interactive websites using modern frontend technologies.",
    skills: ["HTML/CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Backend Development",
    icon: <Server />,
    description: "Implementing server-side logic and database integration for web applications.",
    skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"]
  },
  {
    title: "Database Management",
    icon: <Database />,
    description: "Designing and managing databases for efficient data storage and retrieval.",
    skills: ["MongoDB", "Firebase", "MySQL"]
  },
  {
    title: "Visual Design",
    icon: <Brush />,
    description: "Creating visually appealing graphics and designs for digital platforms.",
    skills: ["Figma", "Adobe XD", "Color Theory", "Typography"]
  },
  {
    title: "Soft Skills",
    icon: <Users />,
    description: "Essential interpersonal skills for effective collaboration and communication.",
    skills: ["Communication", "Problem Solving", "Time Management", "Teamwork"]
  },
  {
    title: "Mobile Development",
    icon: <Smartphone />,
    description: "Developing mobile-friendly websites and applications for various devices.",
    skills: ["Responsive Design", "Progressive Web Apps", "Mobile-First Approach"]
  },
  {
    title: "Languages",
    icon: <Globe />,
    description: "Fluent in multiple languages for effective global communication.",
    skills: ["English", "Amharic", "Oromo", "Italian"]
  }
];

const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary via-background to-background opacity-60 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedText
              text="My Skills"
              className="text-4xl md:text-5xl font-display font-semibold mb-6"
            />
            <AnimatedText
              text="A comprehensive overview of my technical expertise and capabilities."
              className="text-muted-foreground text-lg"
            />
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <AnimatedText
              text="Technical Proficiency"
              className="text-3xl font-display font-semibold mb-4"
            />
            <AnimatedText
              text="My level of expertise across various technologies and tools."
              className="text-muted-foreground max-w-2xl mx-auto"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Categories Section */}
      <section className="py-16 px-6 md:px-10 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <AnimatedText
              text="Skill Categories"
              className="text-3xl font-display font-semibold mb-4"
            />
            <AnimatedText
              text="A breakdown of my skills across different domains."
              className="text-muted-foreground max-w-2xl mx-auto"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={index}
                icon={category.icon}
                title={category.title}
                description={category.description}
                className={`animate-delay-${(index % 3) * 100}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <AnimatedText
              text="Services I Offer"
              className="text-3xl font-display font-semibold mb-4"
            />
            <AnimatedText
              text="Professional services tailored to meet your digital needs."
              className="text-muted-foreground max-w-2xl mx-auto"
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 subtle-shadow hover-lift text-center">
              <div className="bg-secondary/50 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto text-primary">
                <Layers size={24} />
              </div>
              <h3 className="text-lg font-medium mb-2">Website Development</h3>
              <p className="text-muted-foreground text-sm">
                Custom websites designed to meet your specific business needs.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 subtle-shadow hover-lift text-center">
              <div className="bg-secondary/50 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto text-primary">
                <Star size={24} />
              </div>
              <h3 className="text-lg font-medium mb-2">UI/UX Design</h3>
              <p className="text-muted-foreground text-sm">
                User-centered designs that enhance engagement and conversion.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 subtle-shadow hover-lift text-center">
              <div className="bg-secondary/50 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto text-primary">
                <LineChart size={24} />
              </div>
              <h3 className="text-lg font-medium mb-2">Performance Optimization</h3>
              <p className="text-muted-foreground text-sm">
                Speed up your site for better user experience and SEO rankings.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 subtle-shadow hover-lift text-center">
              <div className="bg-secondary/50 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto text-primary">
                <CopyCheck size={24} />
              </div>
              <h3 className="text-lg font-medium mb-2">Maintenance & Support</h3>
              <p className="text-muted-foreground text-sm">
                Ongoing support to keep your site running smoothly and securely.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Skills;
