
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

interface Link {
  id: string;
  title: string;
  url: string;
  icon?: string;
}

const LinkEditor = () => {
  const [links, setLinks] = useState<Link[]>([
    { id: '1', title: 'Instagram', url: 'https://instagram.com/username' },
    { id: '2', title: 'YouTube', url: 'https://youtube.com/c/username' },
    { id: '3', title: 'Twitter', url: 'https://twitter.com/username' },
  ]);
  const [newTitle, setNewTitle] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const { toast } = useToast();

  const handleAddLink = () => {
    if (!newTitle.trim() || !newUrl.trim()) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in both title and URL fields",
      });
      return;
    }
    
    if (!newUrl.startsWith('http://') && !newUrl.startsWith('https://')) {
      toast({
        variant: "destructive",
        title: "Invalid URL",
        description: "URL must start with http:// or https://",
      });
      return;
    }
    
    const newLink = {
      id: Date.now().toString(),
      title: newTitle,
      url: newUrl,
    };
    
    setLinks([...links, newLink]);
    setNewTitle('');
    setNewUrl('');
    
    toast({
      title: "Link added",
      description: "Your new link has been added successfully.",
    });
  };

  const handleDeleteLink = (id: string) => {
    setLinks(links.filter(link => link.id !== id));
    toast({
      title: "Link deleted",
      description: "The link has been removed from your page.",
    });
  };

  const handleEditLink = (id: string) => {
    const linkToEdit = links.find(link => link.id === id);
    if (linkToEdit) {
      setNewTitle(linkToEdit.title);
      setNewUrl(linkToEdit.url);
      setEditingId(id);
    }
  };

  const handleUpdateLink = () => {
    if (!editingId) return;
    
    if (!newTitle.trim() || !newUrl.trim()) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in both title and URL fields",
      });
      return;
    }
    
    if (!newUrl.startsWith('http://') && !newUrl.startsWith('https://')) {
      toast({
        variant: "destructive",
        title: "Invalid URL",
        description: "URL must start with http:// or https://",
      });
      return;
    }
    
    setLinks(links.map(link => 
      link.id === editingId ? { ...link, title: newTitle, url: newUrl } : link
    ));
    
    setNewTitle('');
    setNewUrl('');
    setEditingId(null);
    
    toast({
      title: "Link updated",
      description: "Your link has been updated successfully.",
    });
  };

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;
    
    const newLinks = [...links];
    const draggedItem = newLinks[draggedIndex];
    
    // Remove the dragged item
    newLinks.splice(draggedIndex, 1);
    // Insert it at the new position
    newLinks.splice(index, 0, draggedItem);
    
    setLinks(newLinks);
    setDraggedIndex(index);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Manage Your Links</h2>
      
      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="linkTitle">Link Title</Label>
              <Input
                id="linkTitle"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Instagram"
              />
            </div>
            <div>
              <Label htmlFor="linkUrl">URL</Label>
              <Input
                id="linkUrl"
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
                placeholder="https://instagram.com/username"
              />
            </div>
          </div>
          
          {editingId ? (
            <div className="flex gap-2">
              <Button onClick={handleUpdateLink}>Update Link</Button>
              <Button variant="outline" onClick={() => {
                setNewTitle('');
                setNewUrl('');
                setEditingId(null);
              }}>Cancel</Button>
            </div>
          ) : (
            <Button onClick={handleAddLink}>Add Link</Button>
          )}
        </CardContent>
      </Card>
      
      <div className="border rounded-md">
        <h3 className="text-lg font-medium p-4 border-b">Your Links</h3>
        <div className="p-2">
          {links.length > 0 ? (
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li 
                  key={link.id} 
                  className="border rounded-md p-4 bg-background flex items-center justify-between"
                  draggable
                  onDragStart={() => handleDragStart(index)}
                  onDragOver={(e) => handleDragOver(e, index)}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-grab">
                        <circle cx="9" cy="12" r="1" />
                        <circle cx="9" cy="5" r="1" />
                        <circle cx="9" cy="19" r="1" />
                        <circle cx="15" cy="12" r="1" />
                        <circle cx="15" cy="5" r="1" />
                        <circle cx="15" cy="19" r="1" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">{link.title}</div>
                      <div className="text-sm text-muted-foreground">{link.url}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" onClick={() => handleEditLink(link.id)}>
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleDeleteLink(link.id)}>
                      Delete
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center py-10 text-muted-foreground">
              No links added yet. Add your first link above.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LinkEditor;
