
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedText from '@/components/AnimatedText';
import { ArrowLeft, ShoppingCart, Users, Truck, DollarSign, BarChart2, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const EcommerceDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const dummyData = {
    revenue: 24680,
    orders: 186,
    customers: 2405,
    pendingShipments: 42,
    topProducts: [
      { id: 1, name: 'Wireless Earbuds', sales: 234, stock: 45, price: 89.99 },
      { id: 2, name: 'Smart Watch', sales: 187, stock: 32, price: 199.99 },
      { id: 3, name: 'Bluetooth Speaker', sales: 156, stock: 67, price: 129.99 },
      { id: 4, name: 'Laptop Stand', sales: 134, stock: 23, price: 49.99 },
      { id: 5, name: 'Phone Charger', sales: 120, stock: 98, price: 19.99 },
    ],
    recentOrders: [
      { id: '#ORD-7829', customer: 'Sarah Johnson', date: '2023-08-14', status: 'Delivered', amount: 299.99 },
      { id: '#ORD-7830', customer: 'Michael Brown', date: '2023-08-14', status: 'Processing', amount: 149.50 },
      { id: '#ORD-7831', customer: 'Emma Wilson', date: '2023-08-13', status: 'Shipped', amount: 89.99 },
      { id: '#ORD-7832', customer: 'David Miller', date: '2023-08-13', status: 'Delivered', amount: 199.99 },
      { id: '#ORD-7833', customer: 'Lisa Garcia', date: '2023-08-12', status: 'Processing', amount: 349.99 },
    ]
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
              text="E-commerce Dashboard"
              className="text-3xl md:text-4xl font-display font-semibold mb-4"
            />
            <p className="text-muted-foreground">A comprehensive dashboard for managing your online store</p>
          </div>
          
          {/* Dashboard Tabs */}
          <Tabs defaultValue="dashboard" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="dashboard" onClick={() => setActiveTab('dashboard')}>Dashboard</TabsTrigger>
              <TabsTrigger value="products" onClick={() => setActiveTab('products')}>Products</TabsTrigger>
              <TabsTrigger value="orders" onClick={() => setActiveTab('orders')}>Orders</TabsTrigger>
              <TabsTrigger value="customers" onClick={() => setActiveTab('customers')}>Customers</TabsTrigger>
            </TabsList>
            
            {/* Dashboard Content */}
            <TabsContent value="dashboard" className="space-y-6">
              {/* Stats Overview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Revenue</p>
                      <h3 className="text-2xl font-semibold mt-1">${dummyData.revenue.toLocaleString()}</h3>
                      <p className="text-xs text-green-500 mt-1">+12.4% from last month</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-primary opacity-80" />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Orders</p>
                      <h3 className="text-2xl font-semibold mt-1">{dummyData.orders}</h3>
                      <p className="text-xs text-green-500 mt-1">+8.2% from last month</p>
                    </div>
                    <ShoppingCart className="h-8 w-8 text-primary opacity-80" />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Customers</p>
                      <h3 className="text-2xl font-semibold mt-1">{dummyData.customers.toLocaleString()}</h3>
                      <p className="text-xs text-green-500 mt-1">+5.7% from last month</p>
                    </div>
                    <Users className="h-8 w-8 text-primary opacity-80" />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Pending Shipments</p>
                      <h3 className="text-2xl font-semibold mt-1">{dummyData.pendingShipments}</h3>
                      <p className="text-xs text-amber-500 mt-1">+2 from yesterday</p>
                    </div>
                    <Truck className="h-8 w-8 text-primary opacity-80" />
                  </CardContent>
                </Card>
              </div>
              
              {/* Sales Chart Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Sales Overview</span>
                    <Button variant="outline" size="sm" className="h-8">Last 30 Days</Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center h-64 bg-secondary/30 rounded-md">
                    <div className="text-center">
                      <BarChart2 className="mx-auto h-12 w-12 text-muted-foreground" />
                      <p className="text-muted-foreground mt-2">Sales charts would appear here</p>
                      <p className="text-xs text-muted-foreground mt-1">With interactive data visualization</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Recent Orders Table */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-medium text-sm">Order ID</th>
                          <th className="text-left py-3 px-4 font-medium text-sm">Customer</th>
                          <th className="text-left py-3 px-4 font-medium text-sm">Date</th>
                          <th className="text-left py-3 px-4 font-medium text-sm">Status</th>
                          <th className="text-right py-3 px-4 font-medium text-sm">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dummyData.recentOrders.map((order, index) => (
                          <tr key={index} className="border-b last:border-0 hover:bg-muted/20">
                            <td className="py-3 px-4 text-sm">{order.id}</td>
                            <td className="py-3 px-4 text-sm">{order.customer}</td>
                            <td className="py-3 px-4 text-sm">{order.date}</td>
                            <td className="py-3 px-4 text-sm">
                              <span className={`px-2 py-1 rounded-full text-xs 
                                ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                                  order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : 
                                  'bg-amber-100 text-amber-800'}`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-sm text-right">${order.amount.toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 text-right">
                    <Button variant="outline" size="sm">View All Orders</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Products Tab */}
            <TabsContent value="products" className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Products Inventory</CardTitle>
                  <Button>Add New Product</Button>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-medium text-sm">Product Name</th>
                          <th className="text-left py-3 px-4 font-medium text-sm">Sales</th>
                          <th className="text-left py-3 px-4 font-medium text-sm">Stock</th>
                          <th className="text-right py-3 px-4 font-medium text-sm">Price</th>
                          <th className="text-right py-3 px-4 font-medium text-sm">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dummyData.topProducts.map((product, index) => (
                          <tr key={index} className="border-b last:border-0 hover:bg-muted/20">
                            <td className="py-3 px-4 text-sm">{product.name}</td>
                            <td className="py-3 px-4 text-sm">{product.sales}</td>
                            <td className="py-3 px-4 text-sm">
                              <span className={`px-2 py-1 rounded-full text-xs 
                                ${product.stock > 50 ? 'bg-green-100 text-green-800' : 
                                  product.stock > 20 ? 'bg-blue-100 text-blue-800' : 
                                  'bg-amber-100 text-amber-800'}`}>
                                {product.stock} in stock
                              </span>
                            </td>
                            <td className="py-3 px-4 text-sm text-right">${product.price.toFixed(2)}</td>
                            <td className="py-3 px-4 text-sm text-right">
                              <Button variant="ghost" size="sm" className="h-8">Edit</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-6 text-center text-muted-foreground">
                    <p>This is a demo interface. Product data is for display purposes only.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Orders Tab */}
            <TabsContent value="orders" className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Orders Management</CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="outline">Export</Button>
                    <Button>Create Order</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Truck className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">Orders Management Interface</h3>
                    <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                      This would be the full orders interface with filtering, searching, and detailed order management.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Customers Tab */}
            <TabsContent value="customers" className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Customer Management</CardTitle>
                  <Button>Add Customer</Button>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Users className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">Customers Database Interface</h3>
                    <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                      This would be the full customer management interface with detailed customer profiles, 
                      purchasing history, and segment analysis.
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
                This E-commerce Dashboard is designed to help online stores manage their entire business from a single interface. 
                It provides real-time analytics, inventory management, order processing, and customer insights.
              </p>
              <p className="text-muted-foreground mb-4">
                The dashboard is built with React and features responsive design that works on desktop and mobile devices. 
                The interface uses Tailwind CSS for styling and includes interactive charts for data visualization.
              </p>
              <p className="text-muted-foreground">
                Key features include: real-time sales tracking, inventory management, customer profiles, order processing, 
                and analytics reporting. The system is designed to integrate with various payment processors and 
                shipping providers.
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
                  <span>Tailwind CSS</span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  <span>Chart.js</span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  <span>Redux</span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  <span>REST API</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
                <p className="text-muted-foreground mb-4">
                  Interested in a similar solution for your business? Let's discuss how I can help.
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

export default EcommerceDashboard;
