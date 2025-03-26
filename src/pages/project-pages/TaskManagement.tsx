
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedText from '@/components/AnimatedText';
import { ArrowLeft, CheckSquare, Calendar, TrendingUp, Users, BarChart2, Plus, X, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TaskManagement = () => {
  const [activeTab, setActiveTab] = useState('tasks');
  const [tasks, setTasks] = useState([
    { 
      id: 1, 
      title: 'Design system update', 
      description: 'Update the design system components to the latest version',
      status: 'in-progress',
      priority: 'high',
      dueDate: '2023-08-25',
      assignee: 'Alex Chen',
      tags: ['design', 'ui']
    },
    { 
      id: 2, 
      title: 'API integration', 
      description: 'Integrate the payment gateway API with the checkout flow',
      status: 'todo',
      priority: 'medium',
      dueDate: '2023-08-28',
      assignee: 'Sarah Johnson',
      tags: ['backend', 'api']
    },
    { 
      id: 3, 
      title: 'User testing', 
      description: 'Conduct user testing for the new onboarding flow',
      status: 'todo',
      priority: 'medium',
      dueDate: '2023-08-30',
      assignee: 'Michael Lee',
      tags: ['research', 'ux']
    },
    { 
      id: 4, 
      title: 'Bug fixes for v2.1', 
      description: 'Address the critical bugs reported in the latest release',
      status: 'completed',
      priority: 'high',
      dueDate: '2023-08-20',
      assignee: 'Jamie Taylor',
      tags: ['bugs', 'maintenance']
    },
    { 
      id: 5, 
      title: 'Documentation update', 
      description: 'Update the documentation for the new features',
      status: 'in-progress',
      priority: 'low',
      dueDate: '2023-08-27',
      assignee: 'Alex Chen',
      tags: ['docs']
    }
  ]);
  
  const [completedTasks, setCompletedTasks] = useState([
    { 
      id: 6, 
      title: 'Landing page redesign', 
      description: 'Redesign the landing page to improve conversion',
      status: 'completed',
      priority: 'high',
      dueDate: '2023-08-15',
      assignee: 'Sarah Johnson',
      tags: ['design', 'ui']
    },
    { 
      id: 7, 
      title: 'Security audit', 
      description: 'Perform a security audit of the application',
      status: 'completed',
      priority: 'high',
      dueDate: '2023-08-12',
      assignee: 'Michael Lee',
      tags: ['security', 'audit']
    }
  ]);
  
  const [taskView, setTaskView] = useState('kanban');
  
  const activeUsers = [
    { id: 1, name: 'Alex Chen', avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', status: 'online' },
    { id: 2, name: 'Sarah Johnson', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', status: 'online' },
    { id: 3, name: 'Michael Lee', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', status: 'offline' },
    { id: 4, name: 'Jamie Taylor', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80', status: 'online' }
  ];
  
  const todoTasks = tasks.filter(task => task.status === 'todo');
  const inProgressTasks = tasks.filter(task => task.status === 'in-progress');
  
  const markAsComplete = (id) => {
    const taskToComplete = tasks.find(task => task.id === id);
    
    if (taskToComplete) {
      const updatedTask = { ...taskToComplete, status: 'completed' };
      setCompletedTasks([updatedTask, ...completedTasks]);
      setTasks(tasks.filter(task => task.id !== id));
    }
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
              text="Task Management Platform"
              className="text-3xl md:text-4xl font-display font-semibold mb-4"
            />
            <p className="text-muted-foreground">Collaborative task management with real-time updates</p>
          </div>
          
          {/* App Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
            <div className="flex space-x-2">
              <Button
                variant={taskView === 'kanban' ? 'default' : 'outline'}
                onClick={() => setTaskView('kanban')}
              >
                Kanban
              </Button>
              <Button
                variant={taskView === 'list' ? 'default' : 'outline'}
                onClick={() => setTaskView('list')}
              >
                List
              </Button>
            </div>
            
            <div className="flex space-x-2">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Task
              </Button>
            </div>
          </div>
          
          {/* App Tabs */}
          <Tabs defaultValue="tasks" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="tasks" onClick={() => setActiveTab('tasks')}>Tasks</TabsTrigger>
              <TabsTrigger value="calendar" onClick={() => setActiveTab('calendar')}>Calendar</TabsTrigger>
              <TabsTrigger value="analytics" onClick={() => setActiveTab('analytics')}>Analytics</TabsTrigger>
              <TabsTrigger value="team" onClick={() => setActiveTab('team')}>Team</TabsTrigger>
            </TabsList>
            
            {/* Tasks Tab */}
            <TabsContent value="tasks" className="space-y-6">
              {/* Active Users */}
              <div className="flex items-center space-x-2 mb-6">
                <p className="text-sm text-muted-foreground mr-2">Active users:</p>
                <div className="flex -space-x-2">
                  {activeUsers.map((user) => (
                    <div key={user.id} className="relative">
                      <img 
                        src={user.avatar} 
                        alt={user.name} 
                        className="w-8 h-8 rounded-full border-2 border-background"
                        title={user.name}
                      />
                      {user.status === 'online' && (
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-background"></span>
                      )}
                    </div>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="text-xs">
                  Invite +
                </Button>
              </div>
              
              {taskView === 'kanban' ? (
                // Kanban View
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* To Do Column */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium">To Do ({todoTasks.length})</h3>
                      <Button variant="ghost" size="sm">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="space-y-3">
                      {todoTasks.map((task) => (
                        <Card key={task.id} className="hover-lift">
                          <CardContent className="p-4 space-y-2">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium">{task.title}</h4>
                                <p className="text-xs text-muted-foreground">{task.description}</p>
                              </div>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="h-8 w-8 p-0"
                                onClick={() => markAsComplete(task.id)}
                              >
                                <CheckSquare className="h-4 w-4" />
                              </Button>
                            </div>
                            
                            <div className="flex flex-wrap gap-1 mt-2">
                              {task.tags.map((tag, index) => (
                                <span 
                                  key={index}
                                  className="text-xs px-2 py-0.5 bg-secondary rounded-full text-muted-foreground"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            
                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center">
                                <Clock className="h-3 w-3 text-muted-foreground mr-1" />
                                <span className="text-xs text-muted-foreground">{task.dueDate}</span>
                              </div>
                              <div>
                                <span className={`text-xs px-2 py-0.5 rounded-full ${
                                  task.priority === 'high' ? 'bg-red-100 text-red-800' :
                                  task.priority === 'medium' ? 'bg-amber-100 text-amber-800' :
                                  'bg-blue-100 text-blue-800'
                                }`}>
                                  {task.priority}
                                </span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                      
                      {todoTasks.length === 0 && (
                        <div className="border border-dashed rounded-md p-6 text-center bg-secondary/10">
                          <p className="text-muted-foreground">No tasks in this column</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* In Progress Column */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium">In Progress ({inProgressTasks.length})</h3>
                      <Button variant="ghost" size="sm">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="space-y-3">
                      {inProgressTasks.map((task) => (
                        <Card key={task.id} className="hover-lift">
                          <CardContent className="p-4 space-y-2">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium">{task.title}</h4>
                                <p className="text-xs text-muted-foreground">{task.description}</p>
                              </div>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="h-8 w-8 p-0"
                                onClick={() => markAsComplete(task.id)}
                              >
                                <CheckSquare className="h-4 w-4" />
                              </Button>
                            </div>
                            
                            <div className="flex flex-wrap gap-1 mt-2">
                              {task.tags.map((tag, index) => (
                                <span 
                                  key={index}
                                  className="text-xs px-2 py-0.5 bg-secondary rounded-full text-muted-foreground"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            
                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center">
                                <Clock className="h-3 w-3 text-muted-foreground mr-1" />
                                <span className="text-xs text-muted-foreground">{task.dueDate}</span>
                              </div>
                              <div>
                                <span className={`text-xs px-2 py-0.5 rounded-full ${
                                  task.priority === 'high' ? 'bg-red-100 text-red-800' :
                                  task.priority === 'medium' ? 'bg-amber-100 text-amber-800' :
                                  'bg-blue-100 text-blue-800'
                                }`}>
                                  {task.priority}
                                </span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                      
                      {inProgressTasks.length === 0 && (
                        <div className="border border-dashed rounded-md p-6 text-center bg-secondary/10">
                          <p className="text-muted-foreground">No tasks in this column</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Completed Column */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium">Completed ({completedTasks.length})</h3>
                      <Button variant="ghost" size="sm">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="space-y-3">
                      {completedTasks.slice(0, 2).map((task) => (
                        <Card key={task.id} className="hover-lift opacity-70">
                          <CardContent className="p-4 space-y-2">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-medium line-through">{task.title}</h4>
                                <p className="text-xs text-muted-foreground">{task.description}</p>
                              </div>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="h-8 w-8 p-0"
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                            
                            <div className="flex flex-wrap gap-1 mt-2">
                              {task.tags.map((tag, index) => (
                                <span 
                                  key={index}
                                  className="text-xs px-2 py-0.5 bg-secondary rounded-full text-muted-foreground"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            
                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center">
                                <Clock className="h-3 w-3 text-muted-foreground mr-1" />
                                <span className="text-xs text-muted-foreground">{task.dueDate}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                      
                      {completedTasks.length > 2 && (
                        <Button variant="ghost" className="w-full text-sm">
                          View all {completedTasks.length} completed tasks
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                      
                      {completedTasks.length === 0 && (
                        <div className="border border-dashed rounded-md p-6 text-center bg-secondary/10">
                          <p className="text-muted-foreground">No completed tasks yet</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                // List View
                <Card>
                  <CardHeader>
                    <CardTitle>All Tasks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {[...tasks, ...completedTasks].map((task) => (
                        <div 
                          key={task.id} 
                          className={`flex items-center justify-between p-3 rounded-md border ${
                            task.status === 'completed' ? 'opacity-60' : ''
                          }`}
                        >
                          <div className="flex items-center">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-8 w-8 p-0 mr-3"
                              onClick={() => task.status !== 'completed' && markAsComplete(task.id)}
                            >
                              {task.status === 'completed' ? (
                                <CheckSquare className="h-4 w-4 text-green-500" />
                              ) : (
                                <div className="h-4 w-4 border rounded" />
                              )}
                            </Button>
                            <div>
                              <h4 className={`font-medium ${task.status === 'completed' ? 'line-through' : ''}`}>
                                {task.title}
                              </h4>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <span className="mr-2">Due: {task.dueDate}</span>
                                <span className={`px-2 py-0.5 rounded-full ${
                                  task.priority === 'high' ? 'bg-red-100 text-red-800' :
                                  task.priority === 'medium' ? 'bg-amber-100 text-amber-800' :
                                  'bg-blue-100 text-blue-800'
                                }`}>
                                  {task.priority}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <span className="text-xs bg-secondary px-2 py-1 rounded-full">
                              {task.assignee}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            
            {/* Calendar Tab */}
            <TabsContent value="calendar" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Calendar View</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Calendar className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">Task Calendar</h3>
                    <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                      This would be a full calendar view showing all tasks and deadlines. 
                      You would be able to view by day, week, or month.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Productivity Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <BarChart2 className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">Team Productivity</h3>
                    <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                      This would show productivity metrics, task completion rates, and performance trends.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Team Tab */}
            <TabsContent value="team" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Team Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Users className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">Team Workspace</h3>
                    <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                      This would show team member profiles, roles, workload distribution, and collaboration tools.
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
                This Task Management Platform is designed to help teams collaborate on projects, track tasks, 
                and increase productivity. It features real-time updates, team workspaces, and analytics 
                to monitor progress.
              </p>
              <p className="text-muted-foreground mb-4">
                The platform is built with React for the frontend, Firebase for real-time updates and authentication, 
                and Redux for state management. The interface uses Material UI components for a clean, 
                modern design that's easy to use.
              </p>
              <p className="text-muted-foreground">
                Key features include: Kanban boards, list views, calendar integration, task assignments, 
                priority settings, due dates, file attachments, and team collaboration tools. The platform also 
                includes productivity analytics to track performance over time.
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
                  <span>Firebase</span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  <span>Redux</span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  <span>Material UI</span>
                </li>
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  <span>Tailwind CSS</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
                <p className="text-muted-foreground mb-4">
                  Interested in a custom task management solution for your team? Let's discuss how I can help.
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

export default TaskManagement;
