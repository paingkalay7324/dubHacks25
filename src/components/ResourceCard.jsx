import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { MapPin, Clock, Briefcase, Heart, Scale, Package } from 'lucide-react';

const typeConfig = {
  'free-item': { label: 'Free Item', icon: Package, color: 'bg-emerald-100 text-emerald-700' },
  'food-bank': { label: 'Food Bank', icon: Heart, color: 'bg-amber-100 text-amber-700' },
  'shelter': { label: 'Shelter', icon: MapPin, color: 'bg-blue-100 text-blue-700' },
  'lawyer': { label: 'Legal Aid', icon: Scale, color: 'bg-purple-100 text-purple-700' },
  'volunteer': { label: 'Volunteer', icon: Briefcase, color: 'bg-pink-100 text-pink-700' },
};

export function ResourceCard({ resource, onClick }) {
  const config = typeConfig[resource.type];
  const Icon = config.icon;

  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col" onClick={onClick}>
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge className={config.color}>
            <Icon className="w-3 h-3 mr-1" />
            {config.label}
          </Badge>
          {resource.value && resource.value > 100 && (
            <Badge variant="outline" className="text-orange-600 border-orange-600">
              Verification Required
            </Badge>
          )}
        </div>
        <CardTitle>{resource.title}</CardTitle>
        <CardDescription className="line-clamp-2">{resource.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="flex items-start gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span className="line-clamp-1">{resource.location.address}</span>
          </div>
          
          {resource.hours && (
            <div className="flex items-start gap-2 text-muted-foreground">
              <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span className="line-clamp-1">{resource.hours}</span>
            </div>
          )}
          
          {resource.expertise && (
            <div className="flex flex-wrap gap-1 mt-2">
              {resource.expertise.slice(0, 3).map((exp, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {exp}
                </Badge>
              ))}
              {resource.expertise.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{resource.expertise.length - 3} more
                </Badge>
              )}
            </div>
          )}
          
          {resource.skills && (
            <div className="flex flex-wrap gap-1 mt-2">
              {resource.skills.slice(0, 2).map((skill, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          )}
          
          {resource.value && (
            <div className="mt-2">
              <Badge variant={resource.value > 100 ? 'destructive' : 'default'}>
                Value: ${resource.value}
              </Badge>
            </div>
          )}
        </div>
        
        <Button className="w-full mt-4" size="sm">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}
