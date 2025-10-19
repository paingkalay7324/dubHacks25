export type ResourceType = 'free-item' | 'food-bank' | 'shelter' | 'lawyer' | 'volunteer';

export interface Resource {
  id: string;
  type: ResourceType;
  title: string;
  description: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  verified?: boolean;
  value?: number;
  // For lawyers
  bio?: string;
  expertise?: string[];
  contact?: string;
  // For volunteers
  availability?: string;
  skills?: string[];
  // For food banks and shelters
  hours?: string;
  services?: string[];
  image?: string;
}

export type FilterType = 'all' | ResourceType;
