import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from './ui/sheet';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { MapPin, Clock, Mail, Phone, AlertTriangle, CheckCircle } from 'lucide-react';
import { Separator } from './ui/separator';

export function ResourceDetailSheet({ resource, open, onOpenChange }) {
  if (!resource) return null;

  const renderContent = () => {
    switch (resource.type) {
      case 'lawyer':
        return (
          <>
            <div className="space-y-4">
              <div>
                <h4 className="mb-2">About</h4>
                <p className="text-muted-foreground">{resource.bio}</p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="mb-3">Areas of Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {resource.expertise?.map((exp, idx) => (
                    <Badge key={idx} variant="secondary">
                      {exp}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="mb-2">Contact Information</h4>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>{resource.contact}</span>
                </div>
              </div>
              
              <Button className="w-full" size="lg">
                <Mail className="w-4 h-4 mr-2" />
                Request Consultation
              </Button>
            </div>
          </>
        );
      
      case 'free-item':
        return (
          <>
            <div className="space-y-4">
              {resource.value && resource.value > 100 && (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-orange-900 mb-1">Verification Required</h4>
                      <p className="text-orange-700">
                        Items valued over $100 require income verification (pay stub or equivalent) to ensure fair distribution.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {resource.value && resource.value <= 100 && resource.verified && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-emerald-900 mb-1">No Verification Needed</h4>
                      <p className="text-emerald-700">
                        This item is available to everyone. Contact the poster to arrange pickup.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              <div>
                <h4 className="mb-2">Estimated Value</h4>
                <Badge variant={resource.value && resource.value > 100 ? 'destructive' : 'default'}>
                  ${resource.value}
                </Badge>
              </div>
              
              <Separator />
              
              <Button className="w-full" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                Contact Poster
              </Button>
            </div>
          </>
        );
      
      case 'volunteer':
        return (
          <>
            <div className="space-y-4">
              <div>
                <h4 className="mb-2">Availability</h4>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{resource.availability}</span>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="mb-3">Skills & Services</h4>
                <div className="flex flex-wrap gap-2">
                  {resource.skills?.map((skill, idx) => (
                    <Badge key={idx} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <Button className="w-full" size="lg">
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </Button>
            </div>
          </>
        );
      
      case 'food-bank':
      case 'shelter':
        return (
          <>
            <div className="space-y-4">
              <div>
                <h4 className="mb-2">Hours of Operation</h4>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{resource.hours}</span>
                </div>
              </div>
              
              <Separator />
              
              {resource.services && (
                <>
                  <div>
                    <h4 className="mb-3">Services Provided</h4>
                    <div className="space-y-2">
                      {resource.services.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                </>
              )}
              
              <Button className="w-full" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                Call for Information
              </Button>
            </div>
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[80vh] overflow-y-auto">
        <SheetHeader className="text-left">
          <SheetTitle>{resource.title}</SheetTitle>
          <SheetDescription>{resource.description}</SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 space-y-4">
          <div>
            <h4 className="mb-2">Location</h4>
            <div className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
              <span>{resource.location.address}</span>
            </div>
          </div>
          
          <Separator />
          
          {renderContent()}
        </div>
      </SheetContent>
    </Sheet>
  );
}
