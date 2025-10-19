import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Alert, AlertDescription } from './ui/alert';
import { AlertTriangle } from 'lucide-react';

interface PostItemDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PostItemDialog({ open, onOpenChange }: PostItemDialogProps) {
  const [itemValue, setItemValue] = useState('');
  const requiresVerification = itemValue && parseInt(itemValue) > 100;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Post a Free Item</DialogTitle>
          <DialogDescription>
            Share items with your community. All listings are reviewed before posting.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="title">Item Title</Label>
            <Input id="title" placeholder="e.g. Gently Used Couch" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description" 
              placeholder="Describe the item's condition and any details..."
              rows={3}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="value">Estimated Value ($)</Label>
            <Input 
              id="value" 
              type="number" 
              placeholder="0"
              value={itemValue}
              onChange={(e) => setItemValue(e.target.value)}
            />
          </div>
          
          {requiresVerification && (
            <Alert className="border-orange-200 bg-orange-50">
              <AlertTriangle className="h-4 w-4 text-orange-600" />
              <AlertDescription className="text-orange-900">
                Items valued over $100 require recipients to provide income verification (pay stub or similar documentation) to ensure fair distribution to those in need.
              </AlertDescription>
            </Alert>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="address">Pickup Address</Label>
            <Input id="address" placeholder="Street address" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="contact">Contact Method</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select contact method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="phone">Phone</SelectItem>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="app">In-app messaging</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
            Cancel
          </Button>
          <Button className="flex-1">
            Post Item
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
