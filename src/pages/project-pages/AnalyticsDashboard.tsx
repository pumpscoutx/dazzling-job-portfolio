
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedText from '@/components/AnimatedText';
import { ArrowLeft, BarChart2, PieChart, LineChart, TrendingUp, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AnalyticsDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
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
              text="Analytics Dashboard"
              className="text-3xl md:text-4xl font-display font-semibold mb-4"
            />
            <p className="text-muted-foreground">Comprehensive data visualization and analytics</p>
          </div>
          
          {/* Dashboard Tabs */}
          <Tabs defaultValue="overview" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="overview" onClick={() => setActiveTab('overview')}>Overview</TabsTrigger>
              <TabsTrigger value="traffic" onClick={() => setActiveTab('traffic')}>Traffic</TabsTrigger>
              <TabsTrigger value="demographics" onClick={() => setActiveTab('demographics')}>Demographics</TabsTrigger>
              <TabsTrigger value="reports" onClick={() => setActiveTab('reports')}>Reports</TabsTrigger>
            </TabsList>
            
            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Visitors</p>
                      <h3 className="text-2xl font-semibold mt-1">45,281</h3>
                      <p className="text-xs text-green-500 mt-1">+12.5% from last month</p>
                    </div>
                    <Users className="h-8 w-8 text-primary opacity-80" />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Sessions</p>
                      <h3 className="text-2xl font-semibold mt-1">87,429</h3>
                      <p className="text-xs text-green-500 mt-1">+8.3% from last month</p>
                    </div>
                    <BarChart2 className="h-8 w-8 text-primary opacity-80" />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Bounce Rate</p>
                      <h3 className="text-2xl font-semibold mt-1">32.8%</h3>
                      <p className="text-xs text-red-500 mt-1">+2.1% from last month</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-primary opacity-80" />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Avg. Session</p>
                      <h3 className="text-2xl font-semibold mt-1">4m 12s</h3>
                      <p className="text-xs text-green-500 mt-1">+0.8% from last month</p>
                    </div>
                    <LineChart className="h-8 w-8 text-primary opacity-80" />
                  </CardContent>
                </Card>
              </div>
              
              {/* Visitor Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Visitor Trends</span>
                    <Button variant="outline" size="sm" className="h-8">Last 30 Days</Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center h-64 bg-secondary/30 rounded-md">
                    <div className="text-center">
                      <LineChart className="mx-auto h-12 w-12 text-muted-foreground" />
                      <p className="text-muted-foreground mt-2">Visitor trend charts would appear here</p>
                      <p className="text-xs text-muted-foreground mt-1">With interactive data visualization</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Traffic Sources */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Traffic Sources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center h-64 bg-secondary/30 rounded-md">
                      <div className="text-center">
                        <PieChart className="mx-auto h-12 w-12 text-muted-foreground" />
                        <p className="text-muted-foreground mt-2">Traffic source charts would appear here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Geographic Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center h-64 bg-secondary/30 rounded-md">
                      <div className="text-center">
                        <Globe className="mx-auto h-12 w-12 text-muted-foreground" />
                        <p className="text-muted-foreground mt-2">Geographic distribution map would appear here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Placeholder for other tabs */}
            <TabsContent value="traffic" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Traffic Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <BarChart2 className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">Traffic Analysis Dashboard</h3>
                    <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                      This would be the detailed traffic analysis interface with source breakdowns, 
                      campaign performance, and traffic flow visualization.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="demographics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Demographics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Users className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">Demographics Dashboard</h3>
                    <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                      This would show user demographics data including age groups, gender distribution, 
                      interests, and behavioral patterns.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reports" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Custom Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <LineChart className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">Reports Generator</h3>
                    <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                      This would be the custom report builder with export options, scheduling, 
                      and template management.
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
                This Analytics Dashboard is designed to provide comprehensive insights into website or application performance. 
                It features interactive data visualization, custom reporting, and user behavior analysis.
              </p>
              <p className="text-muted-foreground mb-4">
                The dashboard is built with React and D3.js for advanced data visualization, featuring responsive design 
                that works on desktop and mobile devices. The interface uses TypeScript for type safety and includes 
                real-time data updates.
              </p>
              <p className="text-muted-foreground">
                Key features include: visitor analytics, traffic source analysis, geographic data visualization, 
                custom report generation, goal tracking, and campaign performance monitoring. The system integrates 
                with various data sources through APIs.
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
                  <span>D3.js</span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  <span>TypeScript</span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  <span>Firebase</span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  <span>RESTful APIs</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
                <p className="text-muted-foreground mb-4">
                  Interested in custom analytics for your business? Let's discuss how I can help.
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

export default AnalyticsDashboard;
