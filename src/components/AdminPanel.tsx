
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// Mock data
const mockUsers = [
  { id: 1, email: 'user1@example.com', name: 'John Doe', pagesCreated: 3, lastLogin: '2025-05-01' },
  { id: 2, email: 'user2@example.com', name: 'Jane Smith', pagesCreated: 5, lastLogin: '2025-05-02' },
  { id: 3, email: 'user3@example.com', name: 'Michael Johnson', pagesCreated: 2, lastLogin: '2025-05-01' },
  { id: 4, email: 'user4@example.com', name: 'Emily Wilson', pagesCreated: 7, lastLogin: '2025-05-03' },
  { id: 5, email: 'user5@example.com', name: 'Robert Brown', pagesCreated: 1, lastLogin: '2025-04-29' },
  { id: 6, email: 'user6@example.com', name: 'Sarah Davis', pagesCreated: 4, lastLogin: '2025-05-02' },
  { id: 7, email: 'user7@example.com', name: 'James Miller', pagesCreated: 6, lastLogin: '2025-04-30' },
  { id: 8, email: 'user8@example.com', name: 'Lisa Taylor', pagesCreated: 2, lastLogin: '2025-05-01' },
];

const AdminPanel = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState(mockUsers);

  const filteredUsers = users.filter(user => 
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Stats data for the dashboard
  const stats = {
    totalUsers: users.length,
    totalPagesCreated: users.reduce((acc, user) => acc + user.pagesCreated, 0),
    activeUsers: users.filter(user => new Date(user.lastLogin) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length,
    averagePagesPerUser: (users.reduce((acc, user) => acc + user.pagesCreated, 0) / users.length).toFixed(1)
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.totalUsers}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Pages Created</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.totalPagesCreated}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Users (Last 7 Days)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.activeUsers}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Pages per User</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.averagePagesPerUser}</div>
          </CardContent>
        </Card>
      </div>
      
      {/* User list */}
      <Card className="mt-8">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">User Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center gap-4">
            <Input
              placeholder="Search users by email or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-sm"
            />
            <Button variant="outline">Export CSV</Button>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="text-center">Pages Created</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell className="text-center">{user.pagesCreated}</TableCell>
                  <TableCell>{user.lastLogin}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">View</Button>
                    <Button variant="ghost" size="sm" className="ml-2">Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
              
              {filteredUsers.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-6 text-muted-foreground">
                    No users found matching your search
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPanel;
