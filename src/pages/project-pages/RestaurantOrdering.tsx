
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedText from '@/components/AnimatedText';
import { ArrowLeft, Coffee, Pizza, Utensils, Calendar, TrendingUp, Clock, ShoppingCart, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const RestaurantOrdering = () => {
  const [activeTab, setActiveTab] = useState('menu');
  const [cart, setCart] = useState([]);
  
  const menuCategories = [
    { id: 'starters', name: 'Starters' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'pizzas', name: 'Pizzas' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'drinks', name: 'Drinks' }
  ];
  
  const [selectedCategory, setSelectedCategory] = useState('starters');
  
  const menuItems = {
    starters: [
      { id: 1, name: 'Bruschetta', description: 'Toasted bread with tomatoes, garlic, and fresh basil', price: 7.99, image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b49f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
      { id: 2, name: 'Caprese Salad', description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze', price: 9.99, image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
      { id: 3, name: 'Garlic Bread', description: 'Freshly baked bread with garlic butter and herbs', price: 5.99, image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' }
    ],
    mains: [
      { id: 4, name: 'Spaghetti Carbonara', description: 'Classic pasta with pancetta, egg, and pecorino romano', price: 15.99, image: 'https://images.unsplash.com/photo-1608756687911-aa1599ab3bd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
      { id: 5, name: 'Grilled Salmon', description: 'Fresh salmon fillet with herb butter and seasonal vegetables', price: 19.99, image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
      { id: 6, name: 'Eggplant Parmesan', description: 'Breaded eggplant with marinara sauce and melted mozzarella', price: 14.99, image: 'https://images.unsplash.com/photo-1625944525327-46eb52fd904c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' }
    ],
    pizzas: [
      { id: 7, name: 'Margherita', description: 'Classic tomato sauce, fresh mozzarella, and basil', price: 12.99, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
      { id: 8, name: 'Pepperoni', description: 'Tomato sauce, mozzarella, and spicy pepperoni', price: 14.99, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
      { id: 9, name: 'Vegetarian', description: 'Tomato sauce, mozzarella, bell peppers, mushrooms, and olives', price: 13.99, image: 'https://images.unsplash.com/photo-1604917877934-07d8d248d396?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' }
    ],
    desserts: [
      { id: 10, name: 'Tiramisu', description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone', price: 8.99, image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
      { id: 11, name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with a molten center, served with vanilla ice cream', price: 9.99, image: 'https://images.unsplash.com/photo-1617305855051-58ec537bdd6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' }
    ],
    drinks: [
      { id: 12, name: 'Sparkling Water', description: '500ml bottle', price: 3.99, image: 'https://images.unsplash.com/photo-1596803244687-b0b41ffba9a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
      { id: 13, name: 'Red Wine', description: 'Glass of house red wine', price: 7.99, image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' },
      { id: 14, name: 'Espresso', description: 'Single shot of espresso', price: 2.99, image: 'https://images.unsplash.com/photo-1596360819472-1f55f7f1d9a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' }
    ]
  };
  
  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 } 
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };
  
  const removeFromCart = (id) => {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem.quantity === 1) {
      setCart(cart.filter(item => item.id !== id));
    } else {
      setCart(cart.map(item => 
        item.id === id 
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      ));
    }
  };
  
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
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
              text="Restaurant Ordering System"
              className="text-3xl md:text-4xl font-display font-semibold mb-4"
            />
            <p className="text-muted-foreground">A complete solution for restaurant management and online ordering</p>
          </div>
          
          {/* App Tabs */}
          <Tabs defaultValue="menu" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="menu" onClick={() => setActiveTab('menu')}>Menu</TabsTrigger>
              <TabsTrigger value="reservations" onClick={() => setActiveTab('reservations')}>Reservations</TabsTrigger>
              <TabsTrigger value="admin" onClick={() => setActiveTab('admin')}>Admin</TabsTrigger>
            </TabsList>
            
            {/* Menu Tab */}
            <TabsContent value="menu" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  {/* Category Filters */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {menuCategories.map((category) => (
                      <Button 
                        key={category.id}
                        variant={selectedCategory === category.id ? "default" : "outline"}
                        onClick={() => setSelectedCategory(category.id)}
                        className="flex items-center"
                      >
                        {category.id === 'starters' && <Utensils className="mr-2 h-4 w-4" />}
                        {category.id === 'mains' && <Utensils className="mr-2 h-4 w-4" />}
                        {category.id === 'pizzas' && <Pizza className="mr-2 h-4 w-4" />}
                        {category.id === 'desserts' && <Coffee className="mr-2 h-4 w-4" />}
                        {category.id === 'drinks' && <Coffee className="mr-2 h-4 w-4" />}
                        {category.name}
                      </Button>
                    ))}
                  </div>
                  
                  {/* Menu Items */}
                  <div className="space-y-4">
                    {menuItems[selectedCategory].map((item) => (
                      <Card key={item.id} className="overflow-hidden hover-lift">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/3 aspect-video md:aspect-square">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="md:w-2/3 p-4 md:p-6 flex flex-col justify-between">
                            <div>
                              <h3 className="text-lg font-medium mb-1">{item.name}</h3>
                              <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
                              <p className="text-primary font-semibold">${item.price.toFixed(2)}</p>
                            </div>
                            <Button 
                              onClick={() => addToCart(item)}
                              className="mt-4 self-end"
                            >
                              Add to Order
                              <Plus className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
                
                {/* Order Summary */}
                <div>
                  <Card className="sticky top-24">
                    <CardHeader>
                      <CardTitle>Your Order</CardTitle>
                      <CardDescription>
                        {cart.length === 0 
                          ? "Your cart is empty" 
                          : `${cart.reduce((total, item) => total + item.quantity, 0)} item(s) in your cart`
                        }
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {cart.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-6">
                          <ShoppingCart className="h-12 w-12 text-muted-foreground mb-2" />
                          <p className="text-muted-foreground">Add items from the menu to get started</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {cart.map((item) => (
                            <div key={item.id} className="flex justify-between items-center">
                              <div className="flex items-center">
                                <div className="mr-3">
                                  <Button 
                                    variant="outline" 
                                    size="sm" 
                                    className="h-8 w-8 p-0"
                                    onClick={() => removeFromCart(item.id)}
                                  >
                                    <Minus className="h-3 w-3" />
                                  </Button>
                                  <span className="mx-2">{item.quantity}</span>
                                  <Button 
                                    variant="outline" 
                                    size="sm" 
                                    className="h-8 w-8 p-0"
                                    onClick={() => addToCart(item)}
                                  >
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                </div>
                                <div>
                                  <p className="font-medium">{item.name}</p>
                                </div>
                              </div>
                              <p>${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                          ))}
                          
                          <div className="border-t pt-4 mt-4">
                            <div className="flex justify-between mb-2">
                              <p>Subtotal</p>
                              <p>${getTotalPrice().toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between mb-2">
                              <p>Tax</p>
                              <p>${(getTotalPrice() * 0.07).toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between font-semibold">
                              <p>Total</p>
                              <p>${(getTotalPrice() * 1.07).toFixed(2)}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className="w-full" 
                        disabled={cart.length === 0}
                      >
                        Checkout
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            {/* Reservations Tab */}
            <TabsContent value="reservations" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Make a Reservation</CardTitle>
                  <CardDescription>Book a table at our restaurant</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                        <input
                          id="phone"
                          type="tel"
                          className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium mb-1">Date</label>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 absolute ml-3 text-muted-foreground" />
                          <input
                            id="date"
                            type="date"
                            className="w-full px-4 py-2 pl-10 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="time" className="block text-sm font-medium mb-1">Time</label>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 absolute ml-3 text-muted-foreground" />
                          <input
                            id="time"
                            type="time"
                            className="w-full px-4 py-2 pl-10 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium mb-1">Number of Guests</label>
                      <select
                        id="guests"
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="1">1 person</option>
                        <option value="2">2 people</option>
                        <option value="3">3 people</option>
                        <option value="4">4 people</option>
                        <option value="5">5 people</option>
                        <option value="6">6 people</option>
                        <option value="7+">7+ people</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="notes" className="block text-sm font-medium mb-1">Special Requests</label>
                      <textarea
                        id="notes"
                        rows={3}
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Any special requests or dietary requirements"
                      ></textarea>
                    </div>
                    
                    <Button className="w-full">Book Table</Button>
                  </form>
                </CardContent>
              </Card>
              
              <div className="text-center text-muted-foreground">
                <p>This is a demo reservation form. In a real application, it would connect to a reservation system.</p>
              </div>
            </TabsContent>
            
            {/* Admin Tab */}
            <TabsContent value="admin" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Admin Dashboard</CardTitle>
                  <CardDescription>Restaurant management interface</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Utensils className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">Restaurant Management Dashboard</h3>
                    <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                      This would be the full admin dashboard for managing the restaurant, including:
                      menu management, order tracking, table reservations, and customer management.
                    </p>
                    <div className="mt-6 flex justify-center space-x-4">
                      <Button variant="outline">Login Required</Button>
                    </div>
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
                This Restaurant Ordering System is a complete solution for restaurants to manage their menu, 
                take online orders, handle table reservations, and streamline operations. It provides a seamless 
                experience for both customers and restaurant staff.
              </p>
              <p className="text-muted-foreground mb-4">
                The system is built with React for the frontend and Node.js for the backend. It uses PostgreSQL 
                for database management and Stripe for payment processing. The interface is responsive and works 
                on all devices, making it easy for customers to order from anywhere.
              </p>
              <p className="text-muted-foreground">
                Key features include: digital menu management, online ordering, table reservations, kitchen order 
                management, payment processing, customer accounts, and analytics for restaurant owners.
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
                  <span>Node.js</span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  <span>Stripe</span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  <span>PostgreSQL</span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  <span>Tailwind CSS</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
                <p className="text-muted-foreground mb-4">
                  Interested in a custom ordering system for your restaurant? Let's discuss how I can help.
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

export default RestaurantOrdering;
