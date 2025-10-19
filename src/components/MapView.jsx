import { useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { X, MapPin } from 'lucide-react';

const markerColors = {
  'free-item': '#10b981',
  'food-bank': '#f59e0b',
  'shelter': '#3b82f6',
  'lawyer': '#8b5cf6',
  'volunteer': '#ec4899',
};

// Convert lat/lng to pixel coordinates (simplified projection)
const latLngToPixel = (lat, lng, bounds) => {
  const x = ((lng - bounds.minLng) / (bounds.maxLng - bounds.minLng)) * 100;
  const y = ((bounds.maxLat - lat) / (bounds.maxLat - bounds.minLat)) * 100;
  return { x, y };
};

export function MapView({ resources, filter, onResourceClick }) {
  const [selectedMarker, setSelectedMarker] = useState(null);
  
  const filteredResources = filter === 'all' 
    ? resources 
    : resources.filter(r => r.type === filter);

  // Define map bounds based on data
  const bounds = {
    minLat: 40.745,
    maxLat: 40.765,
    minLng: -73.995,
    maxLng: -73.965,
  };

  return (
    <div className="h-full w-full relative bg-slate-100 overflow-hidden">
      {/* Map Background with Grid */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e2e8f0 1px, transparent 1px),
              linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        >
          {/* Street-like patterns */}
          <div className="absolute top-1/3 left-0 w-full h-1 bg-slate-300"></div>
          <div className="absolute top-2/3 left-0 w-full h-1 bg-slate-300"></div>
          <div className="absolute left-1/4 top-0 w-1 h-full bg-slate-300"></div>
          <div className="absolute left-1/2 top-0 w-2 h-full bg-slate-400"></div>
          <div className="absolute left-3/4 top-0 w-1 h-full bg-slate-300"></div>
          
          {/* Park area */}
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-emerald-200 rounded-lg opacity-50"></div>
        </div>
      </div>

      {/* Markers */}
      {filteredResources.map((resource) => {
        const pos = latLngToPixel(
          resource.location.lat,
          resource.location.lng,
          bounds
        );

        return (
          <button
            key={resource.id}
            className="absolute transform -translate-x-1/2 -translate-y-full transition-transform hover:scale-110 cursor-pointer z-10"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
            }}
            onClick={() => setSelectedMarker(resource)}
          >
            <div
              className="w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center"
              style={{
                backgroundColor: markerColors[resource.type] || '#6b7280',
                transform: 'rotate(-45deg)',
                borderRadius: '50% 50% 50% 0',
              }}
            >
              <MapPin 
                className="w-4 h-4 text-white" 
                style={{ transform: 'rotate(45deg)' }}
              />
            </div>
          </button>
        );
      })}

      {/* Popup Card */}
      {selectedMarker && (() => {
        const pos = latLngToPixel(
          selectedMarker.location.lat,
          selectedMarker.location.lng,
          bounds
        );
        
        return (
          <Card
            className="absolute z-20 w-72 shadow-xl"
            style={{
              left: `${Math.min(Math.max(pos.x, 10), 70)}%`,
              top: `${Math.min(Math.max(pos.y - 10, 10), 70)}%`,
            }}
          >
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="flex-1">{selectedMarker.title}</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 -mt-1 -mr-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedMarker(null);
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-muted-foreground mb-3">{selectedMarker.description}</p>
              {selectedMarker.value && (
                <Badge 
                  variant={selectedMarker.value > 100 ? 'destructive' : 'default'} 
                  className="mb-3"
                >
                  ${selectedMarker.value} {selectedMarker.value > 100 && '- Verification Required'}
                </Badge>
              )}
              {selectedMarker.hours && (
                <p className="mb-3">
                  <span>Hours:</span> {selectedMarker.hours}
                </p>
              )}
              <Button
                onClick={() => {
                  onResourceClick(selectedMarker);
                  setSelectedMarker(null);
                }}
                size="sm"
                className="w-full"
              >
                View Details
              </Button>
            </div>
          </Card>
        );
      })()}

      {/* Map Controls */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2 z-10">
        <Button
          variant="secondary"
          size="icon"
          className="bg-white shadow-md"
          onClick={() => {}}
        >
          +
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="bg-white shadow-md"
          onClick={() => {}}
        >
          −
        </Button>
      </div>

      {/* Attribution */}
      <div className="absolute bottom-4 left-4 text-xs text-muted-foreground bg-white/80 px-2 py-1 rounded">
        Map View
      </div>
    </div>
  );
}
