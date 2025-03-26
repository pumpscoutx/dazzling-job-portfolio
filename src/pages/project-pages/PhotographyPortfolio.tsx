
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedText from '@/components/AnimatedText';
import { ArrowLeft, Image, Camera, TrendingUp, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PhotographyPortfolio = () => {
  const [activeTab, setActiveTab] = useState('gallery');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "landscape",
      title: "Mountain Vista"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "portrait",
      title: "Urban Portrait"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "landscape",
      title: "Beach Sunrise"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1517329782449-810562a4ec2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "wildlife",
      title: "Curious Bird"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "landscape",
      title: "Tropical Beach"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "architecture",
      title: "Paris Street"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "portrait",
      title: "Pensive Moment"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "landscape",
      title: "Starry Mountains"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "wildlife",
      title: "Arctic Fox"
    }
  ];
  
  const categories = ["all", "landscape", "portrait", "wildlife", "architecture"];
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);
  
  const openLightbox = (src) => {
    setCurrentImage(src);
    setLightboxOpen(true);
    document.body.classList.add('overflow-hidden');
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.classList.remove('overflow-hidden');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <div className="mb-6">
            <Link to="/projects" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </div>
          
          {/* Project Title */}
          <div className="mb-10">
            <AnimatedText
              text="Photography Portfolio"
              className="text-3xl md:text-4xl font-display font-semibold mb-4"
            />
            <p className="text-muted-foreground">A minimalist showcase for photographers</p>
          </div>
          
          {/* Portfolio Tabs */}
          <Tabs defaultValue="gallery" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="gallery" onClick={() => setActiveTab('gallery')}>Gallery</TabsTrigger>
              <TabsTrigger value="about" onClick={() => setActiveTab('about')}>About</TabsTrigger>
              <TabsTrigger value="contact" onClick={() => setActiveTab('contact')}>Contact</TabsTrigger>
            </TabsList>
            
            {/* Gallery Tab */}
            <TabsContent value="gallery" className="space-y-6">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((category) => (
                  <Button 
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    onClick={() => setActiveCategory(category)}
                    className="capitalize"
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              {/* Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredImages.map((image) => (
                  <div 
                    key={image.id}
                    className="group relative aspect-square overflow-hidden rounded-md cursor-pointer hover-lift"
                    onClick={() => openLightbox(image.src)}
                  >
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <h3 className="text-white text-lg font-medium">{image.title}</h3>
                        <p className="text-white/70 text-sm capitalize">{image.category}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            {/* About Tab */}
            <TabsContent value="about" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">About the Photographer</h2>
                  <p className="text-muted-foreground mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
                    Sed eget mauris vel nisi tincidunt ultrices. In hac habitasse platea dictumst. 
                    Praesent euismod, nisl at feugiat rhoncus, nibh nunc fermentum nisi, at 
                    elementum odio enim vitae tellus.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Fusce faucibus, sapien in elementum sagittis, nulla tellus tempor nisl, 
                    at eleifend nisi enim eget nunc. Integer ac neque eu turpis elementum 
                    ultricies at id dui. Vestibulum ante ipsum primis in faucibus orci luctus 
                    et ultrices posuere cubilia curae.
                  </p>
                  <p className="text-muted-foreground">
                    Proin tincidunt, arcu at placerat rhoncus, lacus urna porttitor augue, 
                    sed gravida dui mauris at erat. Etiam ut est ac justo sagittis dignissim.
                  </p>
                </div>
                
                <div>
                  <div className="aspect-square rounded-md overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                      alt="Photographer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-xl font-medium mb-2">Equipment</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <Camera className="h-5 w-5 mr-2 text-primary" />
                      <span>Canon EOS R5</span>
                    </li>
                    <li className="flex items-center">
                      <Camera className="h-5 w-5 mr-2 text-primary" />
                      <span>Sony Alpha a7 III</span>
                    </li>
                    <li className="flex items-center">
                      <Camera className="h-5 w-5 mr-2 text-primary" />
                      <span>Various prime lenses</span>
                    </li>
                    <li className="flex items-center">
                      <Camera className="h-5 w-5 mr-2 text-primary" />
                      <span>Professional lighting equipment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            {/* Contact Tab */}
            <TabsContent value="contact" className="space-y-6">
              <div className="max-w-xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4 text-center">Get in Touch</h2>
                <p className="text-muted-foreground text-center mb-8">
                  Interested in a photoshoot or have a question? Fill out the form below.
                </p>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                    <input
                      id="subject"
                      type="text"
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="What is this regarding?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <Button className="w-full">Send Message</Button>
                </form>
                
                <div className="mt-8 text-center text-muted-foreground">
                  <p>This is a demo form. To get in touch with me, please use the contact page.</p>
                  <Button variant="outline" className="mt-2" asChild>
                    <Link to="/contact">Go to Contact Page</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Project Details */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-4">About This Project</h2>
              <p className="text-muted-foreground mb-4">
                This Photography Portfolio is designed to showcase a photographer's work in a clean, minimalist interface. 
                It features a responsive gallery with category filtering, lightbox for full-size image viewing, 
                and contact functionality.
              </p>
              <p className="text-muted-foreground mb-4">
                The site is built with React and features smooth animations with Framer Motion for an engaging user experience. 
                The gallery uses a masonry layout that adapts to different screen sizes, ensuring images look great on 
                any device.
              </p>
              <p className="text-muted-foreground">
                Key features include: category filtering, image lightbox, contact form, responsive design, 
                and fast image loading with lazy loading and optimized images.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  <span>React</span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  <span>Framer Motion</span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  <span>Cloudinary</span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  <span>Netlify</span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  <span>Tailwind CSS</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
                <p className="text-muted-foreground mb-4">
                  Interested in a similar portfolio website? Let's discuss how I can help.
                </p>
                <Button asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <img 
            src={currentImage} 
            alt="Enlarged view" 
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default PhotographyPortfolio;
