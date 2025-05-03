
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const DashboardAnalytics = () => {
  // Mock data for analytics
  const performanceData = {
    views: [120, 150, 180, 190, 210, 230, 250, 270, 290, 310, 320, 340],
    clicks: [50, 60, 70, 80, 90, 95, 110, 120, 130, 140, 150, 160],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  };
  
  const topLinks = [
    { title: 'Instagram', clicks: 248, ctr: '46%' },
    { title: 'YouTube', clicks: 187, ctr: '35%' },
    { title: 'Twitter', clicks: 124, ctr: '23%' },
    { title: 'Personal Website', clicks: 89, ctr: '17%' },
  ];
  
  const topLocations = [
    { location: 'United States', visitors: 450, percentage: '42%' },
    { location: 'United Kingdom', visitors: 210, percentage: '20%' },
    { location: 'Canada', visitors: 180, percentage: '17%' },
    { location: 'Australia', visitors: 120, percentage: '11%' },
    { location: 'Germany', visitors: 110, percentage: '10%' },
  ];
  
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Analytics</h1>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="links">Links</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Views</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">1,243</div>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="m6 9 6-6 6 6"></path><path d="M6 20h12"></path></svg>
                  12% this month
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Clicks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">568</div>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="m6 9 6-6 6 6"></path><path d="M6 20h12"></path></svg>
                  8% this month
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Click-through Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">45.7%</div>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="m6 9 6-6 6 6"></path><path d="M6 20h12"></path></svg>
                  2% this month
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Unique Visitors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">982</div>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="m6 9 6-6 6 6"></path><path d="M6 20h12"></path></svg>
                  15% this month
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full">
                {/* This would be a chart in a real application */}
                <div className="h-full bg-muted rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Performance Chart Placeholder</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="links" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Links</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left font-medium py-3">Link</th>
                      <th className="text-right font-medium py-3">Clicks</th>
                      <th className="text-right font-medium py-3">CTR</th>
                      <th className="text-right font-medium py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {topLinks.map((link, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3">{link.title}</td>
                        <td className="text-right py-3">{link.clicks}</td>
                        <td className="text-right py-3">{link.ctr}</td>
                        <td className="text-right py-3">
                          <Button variant="ghost" size="sm">Details</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Click Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full">
                {/* This would be a pie chart in a real application */}
                <div className="h-full bg-muted rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Click Distribution Chart Placeholder</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="audience" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Top Locations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topLocations.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span>{item.location}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-muted-foreground">{item.visitors} visitors</span>
                        <span className="text-brand-purple">{item.percentage}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Devices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-60 w-full">
                  {/* This would be a pie chart in a real application */}
                  <div className="h-full bg-muted rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Devices Chart Placeholder</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4 text-center">
                  <div>
                    <p className="text-muted-foreground text-sm">Mobile</p>
                    <p className="font-bold">68%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Desktop</p>
                    <p className="font-bold">24%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Tablet</p>
                    <p className="font-bold">8%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Audience Demographics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full">
                {/* This would be demographics charts in a real application */}
                <div className="h-full bg-muted rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Demographics Charts Placeholder</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardAnalytics;
