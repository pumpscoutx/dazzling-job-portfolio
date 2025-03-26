
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedText from '@/components/AnimatedText';
import { ArrowLeft, Map, Image, Calendar, Navigation, TrendingUp, MapPin, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TravelJournal = () => {
  const [activeTab, setActiveTab] = useState('journal');
  
  const journalEntries = [
    {
      id: 1,
      title: "Rome Adventure",
      date: "June 15, 2023",
      location: "Rome, Italy",
      description: "Explored the ancient ruins of the Roman Forum and visited the magnificent Colosseum.",
      images: [
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1555992336-fb0d29498b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      ]
    },
    {
      id: 2,
      title: "Venice Canals",
      date: "June 18, 2023",
      location: "Venice, Italy",
      description: "Took a gondola ride through the picturesque canals and explored the colorful island of Burano.",
      images: [
        "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      ]
    },
    {
      id: 3,
      title: "Amalfi Coast",
      date: "June 22, 2023",
      location: "Positano, Italy",
      description: "Drove along the stunning Amalfi Coast, with its breathtaking views and colorful villages clinging to cliffs.",
      images: [
        "https://images.unsplash.com/photo-1533934229021-9f7b1b74019a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1538681271054-d196ee6359f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      ]
    }
  ];
  
  const upcomingTrips = [
    {
      id: 1,
      destination: "Barcelona, Spain",
      dates: "September 10-17, 2023",
      notes: "Explore Gaudi's architecture, visit La Rambla, enjoy the beaches"
    },
    {
      id: 2,
      destination: "Santorini, Greece",
      dates: "October 5-12, 2023",
      notes: "Watch the sunset in Oia, visit black sand beaches, explore ancient ruins"
    }
  ];

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
              text="Travel Journal App"
              className="text-3xl md:text-4xl font-display font-semibold mb-4"
            />
            <p className="text-muted-foreground">Document your adventures and plan your next trip</p>
          </div>
          
          {/* App Tabs */}
          <Tabs defaultValue="journal" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="journal" onClick={() => setActiveTab('journal')}>Journal</TabsTrigger>
              <TabsTrigger value="map" onClick={() => setActiveTab('map')}>Map</TabsTrigger>
              <TabsTrigger value="trips" onClick={() => setActiveTab('trips')}>Trips</TabsTrigger>
              <TabsTrigger value="gallery" onClick={() => setActiveTab('gallery')}>Gallery</TabsTrigger>
            </TabsList>
            
            {/* Journal Tab */}
            <TabsContent value="journal" className="space-y-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">My Travel Journal</h2>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  New Entry
                </Button>
              </div>
              
              <div className="space-y-6">
                {journalEntries.map((entry) => (
                  <Card key={entry.id} className="hover-lift">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{entry.title}</CardTitle>
                          <CardDescription className="flex items-center mt-1">
                            <Calendar className="h-4 w-4 mr-1" />
                            {entry.date}
                            <MapPin className="h-4 w-4 ml-3 mr-1" />
                            {entry.location}
                          </CardDescription>
                        </div>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{entry.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {entry.images.map((image, idx) => (
                          <div key={idx} className="aspect-video rounded-md overflow-hidden">
                            <img 
                              src={image} 
                              alt={`${entry.title} image ${idx + 1}`} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {/* Map Tab */}
            <TabsContent value="map" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Travel Map</CardTitle>
                  <CardDescription>Visualize all your travel destinations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-video rounded-md overflow-hidden bg-secondary/30">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Map className="mx-auto h-12 w-12 text-muted-foreground" />
                        <p className="text-muted-foreground mt-2">Interactive travel map would appear here</p>
                        <p className="text-xs text-muted-foreground mt-1">With pins for all visited locations</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="p-4 flex items-center">
                        <div className="bg-primary/10 rounded-full p-2 mr-3">
                          <Navigation className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Countries</p>
                          <p className="text-2xl font-semibold">12</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 flex items-center">
                        <div className="bg-primary/10 rounded-full p-2 mr-3">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Cities</p>
                          <p className="text-2xl font-semibold">37</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 flex items-center">
                        <div className="bg-primary/10 rounded-full p-2 mr-3">
                          <Calendar className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Trips</p>
                          <p className="text-2xl font-semibold">9</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Trips Tab */}
            <TabsContent value="trips" className="space-y-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Upcoming Trips</h2>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Plan New Trip
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingTrips.map((trip) => (
                  <Card key={trip.id} className="hover-lift">
                    <CardHeader>
                      <CardTitle>{trip.destination}</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {trip.dates}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{trip.notes}</p>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">Add Itinerary</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <Card className="border-dashed hover-lift bg-secondary/10">
                  <CardContent className="flex flex-col items-center justify-center h-full p-6">
                    <Plus className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-muted-foreground text-center">Add a new trip plan</p>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Trip Ideas</CardTitle>
                  <CardDescription>Destinations you might want to explore next</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative aspect-square rounded-md overflow-hidden group">
                      <img 
                        src="https://images.unsplash.com/photo-1542659626-48d5b5e9e3b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                        alt="Kyoto, Japan" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-end p-3">
                        <p className="text-white font-medium">Kyoto, Japan</p>
                      </div>
                    </div>
                    <div className="relative aspect-square rounded-md overflow-hidden group">
                      <img 
                        src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                        alt="Paris, France" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-end p-3">
                        <p className="text-white font-medium">Paris, France</p>
                      </div>
                    </div>
                    <div className="relative aspect-square rounded-md overflow-hidden group">
                      <img 
                        src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                        alt="Marrakech, Morocco" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-end p-3">
                        <p className="text-white font-medium">Marrakech</p>
                      </div>
                    </div>
                    <div className="relative aspect-square rounded-md overflow-hidden group">
                      <img 
                        src="https://images.unsplash.com/photo-1500039436846-25ae2563c3a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                        alt="Reykjavik, Iceland" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-end p-3">
                        <p className="text-white font-medium">Iceland</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Gallery Tab */}
            <TabsContent value="gallery" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Travel Gallery</CardTitle>
                  <CardDescription>All your travel memories in one place</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Image className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">Photo Gallery</h3>
                    <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                      This would be a complete photo gallery with filtering by location, date, and tags.
                      With a masonry layout and full-screen preview functionality.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          {/* Project Details */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-4">About This Project</h2>
              <p className="text-muted-foreground mb-4">
                This Travel Journal application is designed to help travelers document their adventures and plan future trips. 
                It features location tracking, photo galleries, interactive maps, and trip planning tools.
              </p>
              <p className="text-muted-foreground mb-4">
                The app is built with Next.js and MongoDB for storing journal entries and trip data. It includes Mapbox 
                integration for interactive maps and location tracking. The interface is responsive and works on all devices, 
                so you can update your journal on the go.
              </p>
              <p className="text-muted-foreground">
                Key features include: journal entries with photos, interactive maps showing visited places, 
                trip planning tools, photo galleries, and social sharing options. The app can work offline and 
                sync when back online.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  <span>Next.js</span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  <span>MongoDB</span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  <span>Mapbox</span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  <span>Vercel</span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  <span>Tailwind CSS</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
                <p className="text-muted-foreground mb-4">
                  Interested in a custom travel app for your business? Let's discuss how I can help.
                </p>
                <Button asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TravelJournal;
