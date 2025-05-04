
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const backgroundOptions = [
  { id: 'gradient1', name: 'Purple Gradient', value: 'linear-gradient(135deg, #9b87f5 0%, #6E59A5 100%)' },
  { id: 'gradient2', name: 'Ocean Blue', value: 'linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%)' },
  { id: 'gradient3', name: 'Sunset', value: 'linear-gradient(90deg, hsla(24, 100%, 83%, 1) 0%, hsla(341, 91%, 68%, 1) 100%)' },
  { id: 'solid1', name: 'Dark Purple', value: '#1A1F2C' },
  { id: 'solid2', name: 'Light Gray', value: '#f3f3f3' },
  { id: 'solid3', name: 'White', value: '#ffffff' },
];

const buttonStyleOptions = [
  { id: 'filled', name: 'Filled', preview: 'bg-primary text-white' },
  { id: 'outline', name: 'Outline', preview: 'bg-transparent border border-primary text-primary' },
  { id: 'soft', name: 'Soft', preview: 'bg-primary/10 text-primary' },
  { id: 'minimal', name: 'Minimal', preview: 'bg-transparent text-primary hover:underline' },
];

const fontOptions = [
  { id: 'sans', name: 'Sans-serif', value: 'font-sans' },
  { id: 'serif', name: 'Serif', value: 'font-serif' },
  { id: 'mono', name: 'Monospace', value: 'font-mono' },
];

const Appearance = () => {
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [profileImagePreview, setProfileImagePreview] = useState<string | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<File | null>(null);
  const [backgroundImagePreview, setBackgroundImagePreview] = useState<string | null>(null);
  const [selectedBackground, setSelectedBackground] = useState(backgroundOptions[0].id);
  const [buttonStyle, setButtonStyle] = useState(buttonStyleOptions[0].id);
  const [fontStyle, setFontStyle] = useState(fontOptions[0].id);
  const [accentColor, setAccentColor] = useState('#9b87f5');
  const { toast } = useToast();

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBackgroundImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setBackgroundImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    // In a real app, this would save the changes to a database
    toast({
      title: "Changes saved",
      description: "Your appearance settings have been saved.",
    });
  };

  const getSelectedBackgroundStyle = () => {
    const selected = backgroundOptions.find(bg => bg.id === selectedBackground);
    return selected ? selected.value : backgroundOptions[0].value;
  };

  const getSelectedButtonStyle = () => {
    const selected = buttonStyleOptions.find(btn => btn.id === buttonStyle);
    return selected ? selected.preview : buttonStyleOptions[0].preview;
  };

  const getSelectedFontStyle = () => {
    const selected = fontOptions.find(font => font.id === fontStyle);
    return selected ? selected.value : fontOptions[0].value;
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Customize Appearance</h2>
      
      <Tabs defaultValue="profile">
        <TabsList className="mb-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="background">Background</TabsTrigger>
          <TabsTrigger value="buttons">Buttons</TabsTrigger>
          <TabsTrigger value="fonts">Typography</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="profileImage">Profile Image</Label>
                  <div className="mt-2 flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border bg-muted flex items-center justify-center">
                      {profileImagePreview ? (
                        <img src={profileImagePreview} alt="Profile Preview" className="w-full h-full object-cover" />
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <Input 
                        id="profileImage" 
                        type="file" 
                        accept="image/*" 
                        onChange={handleProfileImageChange} 
                      />
                      <p className="text-sm text-muted-foreground mt-1">Recommended: 400×400px, max 2MB</p>
                    </div>
                  </div>
                </div>

                {/* <div>
                  <Label htmlFor="accentColor">Accent Color</Label>
                  <div className="mt-2 flex items-center gap-4">
                    <div 
                      className="w-10 h-10 rounded border" 
                      style={{ backgroundColor: accentColor }}
                    />
                    <div className="flex-1">
                      <Input 
                        id="accentColor" 
                        type="color" 
                        value={accentColor}
                        onChange={(e) => setAccentColor(e.target.value)}
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="background" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <Label>Background Style</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                    {backgroundOptions.map((bg) => (
                      <div 
                        key={bg.id}
                        className={`cursor-pointer rounded-md p-4 border h-24 flex items-end ${selectedBackground === bg.id ? 'ring-2 ring-brand-purple' : ''}`}
                        style={{ background: bg.value }}
                        onClick={() => setSelectedBackground(bg.id)}
                      >
                        <span className={`text-xs font-medium ${bg.id.startsWith('solid') && bg.id !== 'solid1' ? 'text-foreground' : 'text-white'}`}>
                          {bg.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="backgroundImage">Custom Background Image</Label>
                  <div className="mt-2">
                    <Input 
                      id="backgroundImage" 
                      type="file" 
                      accept="image/*" 
                      onChange={handleBackgroundImageChange} 
                    />
                    <p className="text-sm text-muted-foreground mt-1">Recommended: 1080×1920px, max 3MB</p>
                  </div>
                  
                  {backgroundImagePreview && (
                    <div className="mt-4">
                      <p className="text-sm font-medium mb-2">Preview:</p>
                      <div className="relative w-full h-32 rounded-md overflow-hidden">
                        <img 
                          src={backgroundImagePreview} 
                          alt="Background Preview" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="buttons" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <Label>Button Style</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                    {buttonStyleOptions.map((btn) => (
                      <div 
                        key={btn.id}
                        className={`cursor-pointer rounded-md border p-1 ${buttonStyle === btn.id ? 'ring-2 ring-brand-purple' : ''}`}
                        onClick={() => setButtonStyle(btn.id)}
                      >
                        <div className={`rounded ${btn.preview} py-2 px-4 text-center text-sm`}>
                          {btn.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="fonts" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <Label>Font Style</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                    {fontOptions.map((font) => (
                      <div 
                        key={font.id}
                        className={`cursor-pointer rounded-md border p-4 ${fontStyle === font.id ? 'ring-2 ring-brand-purple' : ''} ${font.value}`}
                        onClick={() => setFontStyle(font.id)}
                      >
                        <p className="text-lg">The quick brown fox</p>
                        <p className="text-sm mt-1">{font.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="border rounded-md p-6">
        <h3 className="text-lg font-medium mb-4">Preview</h3>
        <div 
          className="border rounded-2xl overflow-hidden mx-auto max-w-sm aspect-[9/16]"
          style={{ 
            background: backgroundImagePreview ? `url(${backgroundImagePreview})` : getSelectedBackgroundStyle(),
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex flex-col items-center p-6 h-full">
            <div className="mt-8 mb-4">
              <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-white">
                {profileImagePreview ? (
                  <img src={profileImagePreview} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )}
              </div>
            </div>
            
            <h3 className={`font-bold text-lg text-white mb-1 ${getSelectedFontStyle()}`}>
              @username
            </h3>
            <p className={`text-white/80 text-sm mb-6 ${getSelectedFontStyle()}`}>
              Digital Creator
            </p>
            
            <div className="w-full space-y-3 mb-4">
              <div className={`w-full py-3 px-4 rounded-lg text-center ${getSelectedButtonStyle()}`}>
                Instagram
              </div>
              <div className={`w-full py-3 px-4 rounded-lg text-center ${getSelectedButtonStyle()}`}>
                YouTube
              </div>
              <div className={`w-full py-3 px-4 rounded-lg text-center ${getSelectedButtonStyle()}`}>
                Twitter
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button onClick={handleSaveChanges}>Save Changes</Button>
      </div>
    </div>
  );
};

export default Appearance;
