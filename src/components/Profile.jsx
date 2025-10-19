import { Camera, MapPin, Package, MessageCircle, Heart, Bell, Shield, HelpCircle, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import { Switch } from './ui/switch';

export function Profile() {
  return (
    <ScrollArea className="h-full bg-background">
      <div className="max-w-2xl mx-auto">
        {/* Profile Header */}
        <div className="p-6 flex flex-col items-center text-center">
          <div className="relative mb-4">
            <Avatar className="w-24 h-24">
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              variant="secondary"
              className="absolute bottom-0 right-0 w-8 h-8 rounded-full shadow-md"
            >
              <Camera className="w-4 h-4" />
            </Button>
          </div>
          <h2>John Doe</h2>
          <p className="text-muted-foreground">john.doe@email.com</p>
          <div className="flex items-center gap-1 text-muted-foreground mt-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">New York, NY</span>
          </div>
        </div>

        <Separator />

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 p-6">
          <Card className="p-4 text-center">
            <Package className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
            <p className="text-muted-foreground text-sm">Items Shared</p>
            <p>12</p>
          </Card>
          <Card className="p-4 text-center">
            <Heart className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
            <p className="text-muted-foreground text-sm">Items Received</p>
            <p>5</p>
          </Card>
          <Card className="p-4 text-center">
            <MessageCircle className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
            <p className="text-muted-foreground text-sm">Messages</p>
            <p>28</p>
          </Card>
        </div>

        <Separator />

        {/* Settings */}
        <div className="p-6 space-y-2">
          <h3 className="mb-4">Settings</h3>
          
          {/* Notifications */}
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <div>
                <p>Push Notifications</p>
                <p className="text-sm text-muted-foreground">Get notified about new items nearby</p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          {/* Location */}
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <div>
                <p>Location Services</p>
                <p className="text-sm text-muted-foreground">Allow inStep to access your location</p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          {/* Privacy */}
          <button className="flex items-center gap-3 py-3 w-full hover:bg-muted/50 rounded-lg px-2 -mx-2 transition-colors">
            <Shield className="w-5 h-5 text-muted-foreground" />
            <div className="text-left flex-1">
              <p>Privacy & Safety</p>
              <p className="text-sm text-muted-foreground">Manage your privacy settings</p>
            </div>
          </button>

          <Separator />

          {/* Help */}
          <button className="flex items-center gap-3 py-3 w-full hover:bg-muted/50 rounded-lg px-2 -mx-2 transition-colors">
            <HelpCircle className="w-5 h-5 text-muted-foreground" />
            <div className="text-left flex-1">
              <p>Help & Support</p>
              <p className="text-sm text-muted-foreground">Get help or send feedback</p>
            </div>
          </button>
        </div>

        <Separator />

        {/* Verification Status */}
        <div className="p-6">
          <h3 className="mb-4">Verification</h3>
          <Card className="p-4">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-amber-500 mt-0.5" />
              <div className="flex-1">
                <p>Unverified Account</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Verify your account to post items over $100
                </p>
                <Button size="sm" variant="outline" className="mt-3">
                  Start Verification
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <Separator />

        {/* Logout */}
        <div className="p-6 pb-8">
          <Button variant="outline" className="w-full" size="lg">
            <LogOut className="w-4 h-4 mr-2" />
            Log Out
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
}
