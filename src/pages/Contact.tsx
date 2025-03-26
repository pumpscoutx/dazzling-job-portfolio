
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedText from '@/components/AnimatedText';
import { sendEmail } from '@/utils/emailService';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Call the email service to send the email
      const result = await sendEmail({
        ...formData,
        toEmail: 'naolray@gmail.com' // Your email address
      });
      
      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
          action: (
            <div className="h-8 w-8 bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
          ),
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        toast({
          title: "Message failed to send",
          description: result.message,
          variant: "destructive",
          action: (
            <div className="h-8 w-8 bg-destructive/20 rounded-full flex items-center justify-center">
              <AlertCircle className="h-5 w-5 text-destructive" />
            </div>
          ),
        });
      }
    } catch (error) {
      console.error("Error in form submission:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
        action: (
          <div className="h-8 w-8 bg-destructive/20 rounded-full flex items-center justify-center">
            <AlertCircle className="h-5 w-5 text-destructive" />
          </div>
        ),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary via-background to-background opacity-60 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedText
              text="Get In Touch"
              className="text-4xl md:text-5xl font-display font-semibold mb-6"
            />
            <AnimatedText
              text="Have a project in mind or want to discuss a collaboration? I'd love to hear from you."
              className="text-muted-foreground text-lg"
            />
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-8 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 subtle-shadow hover-lift text-center">
              <div className="bg-secondary/50 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto text-primary">
                <Mail size={24} />
              </div>
              <h3 className="text-lg font-medium mb-2">Email</h3>
              <a href="mailto:naolray@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                naolray@gmail.com
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-6 subtle-shadow hover-lift text-center">
              <div className="bg-secondary/50 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto text-primary">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg font-medium mb-2">Location</h3>
              <p className="text-muted-foreground">Ancona, Italy</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 subtle-shadow hover-lift text-center">
              <div className="bg-secondary/50 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto text-primary">
                <Phone size={24} />
              </div>
              <h3 className="text-lg font-medium mb-2">Phone</h3>
              <a href="tel:+393509525512" className="text-muted-foreground hover:text-primary transition-colors">
                +39 350 952 5512
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-8 px-6 md:px-10 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <AnimatedText
                text="Send Me a Message"
                className="text-3xl font-display font-semibold mb-4"
              />
              <AnimatedText
                text="Fill out the form below and I'll get back to you as soon as possible."
                className="text-muted-foreground mb-8"
              />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="rounded-lg border-muted/50 focus-visible:ring-1 focus-visible:ring-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="rounded-lg border-muted/50 focus-visible:ring-1 focus-visible:ring-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="rounded-lg border-muted/50 focus-visible:ring-1 focus-visible:ring-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="rounded-lg border-muted/50 focus-visible:ring-1 focus-visible:ring-primary resize-none"
                  />
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="rounded-full">
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
            
            <div className="hidden lg:block">
              <div className="h-full rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46773.76252539244!2d13.484717273279773!3d43.61688839356693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132d80233dd931ef%3A0x161719e4f3f5daaf!2sAncona%2C%20Province%20of%20Ancona%2C%20Italy!5e0!3m2!1sen!2sus!4v1656362079729!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map of Ancona, Italy"
                  className="rounded-xl shadow-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
