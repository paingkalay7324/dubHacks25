import { Resource } from '../types';

export const mockResources: Resource[] = [
  // Free Items
  {
    id: '1',
    type: 'free-item',
    title: 'Gently Used Couch',
    description: 'Brown leather couch in good condition. Must pick up.',
    location: {
      lat: 40.7589,
      lng: -73.9851,
      address: '123 W 45th St, New York, NY'
    },
    value: 50,
    verified: true
  },
  {
    id: '2',
    type: 'free-item',
    title: 'Refrigerator',
    description: 'Working refrigerator, 5 years old. Requires verification.',
    location: {
      lat: 40.7614,
      lng: -73.9776,
      address: '789 5th Ave, New York, NY'
    },
    value: 150,
    verified: false
  },
  {
    id: '3',
    type: 'free-item',
    title: 'Kids Clothes (Size 4-6)',
    description: 'Bag of gently used kids clothes',
    location: {
      lat: 40.7489,
      lng: -73.9680,
      address: '456 E 42nd St, New York, NY'
    },
    value: 20,
    verified: true
  },
  // Food Banks
  {
    id: '4',
    type: 'food-bank',
    title: 'City Harvest Food Bank',
    description: 'Community food pantry providing fresh produce and groceries',
    location: {
      lat: 40.7580,
      lng: -73.9855,
      address: '150 W 46th St, New York, NY'
    },
    hours: 'Mon-Fri: 9am-5pm, Sat: 10am-2pm',
    services: ['Fresh produce', 'Canned goods', 'Dairy products']
  },
  {
    id: '5',
    type: 'food-bank',
    title: 'Community Kitchen',
    description: 'Hot meals served daily, no questions asked',
    location: {
      lat: 40.7529,
      lng: -73.9772,
      address: '234 Madison Ave, New York, NY'
    },
    hours: 'Daily: 11am-1pm, 5pm-7pm',
    services: ['Hot meals', 'Take-home groceries', 'Nutrition counseling']
  },
  // Shelters
  {
    id: '6',
    type: 'shelter',
    title: 'Safe Haven Shelter',
    description: 'Emergency shelter for individuals and families',
    location: {
      lat: 40.7505,
      lng: -73.9934,
      address: '567 W 38th St, New York, NY'
    },
    hours: '24/7',
    services: ['Emergency housing', 'Case management', 'Job assistance']
  },
  {
    id: '7',
    type: 'shelter',
    title: 'Family First Shelter',
    description: 'Shelter specifically for families with children',
    location: {
      lat: 40.7648,
      lng: -73.9808,
      address: '890 W 52nd St, New York, NY'
    },
    hours: '24/7',
    services: ['Family rooms', 'Childcare', 'School enrollment help']
  },
  // Lawyers
  {
    id: '8',
    type: 'lawyer',
    title: 'Sarah Martinez, Esq.',
    description: 'Pro bono attorney specializing in housing and tenant rights',
    location: {
      lat: 40.7545,
      lng: -73.9840,
      address: '321 7th Ave, New York, NY'
    },
    bio: 'Sarah has been practicing law for 12 years, focusing on tenant rights and housing discrimination. She has helped over 500 families avoid eviction and secure safe housing.',
    expertise: ['Tenant Rights', 'Housing Discrimination', 'Eviction Defense', 'Landlord Disputes'],
    contact: 'sarah.martinez@legalaid.org'
  },
  {
    id: '9',
    type: 'lawyer',
    title: 'David Chen, Esq.',
    description: 'Immigration law specialist offering pro bono consultations',
    location: {
      lat: 40.7498,
      lng: -73.9765,
      address: '654 Lexington Ave, New York, NY'
    },
    bio: 'David is dedicated to helping immigrants navigate the complex legal system. He provides free consultations and representation for asylum cases, DACA applications, and family reunification.',
    expertise: ['Immigration Law', 'Asylum Cases', 'DACA', 'Family Reunification', 'Deportation Defense'],
    contact: 'dchen@immigrantlegal.org'
  },
  {
    id: '10',
    type: 'lawyer',
    title: 'Jennifer Wilson, Esq.',
    description: 'Family law attorney focusing on domestic violence cases',
    location: {
      lat: 40.7620,
      lng: -73.9712,
      address: '999 Park Ave, New York, NY'
    },
    bio: 'Jennifer specializes in family law with a focus on protecting victims of domestic violence. She provides free legal services for restraining orders, custody battles, and divorce proceedings.',
    expertise: ['Family Law', 'Domestic Violence', 'Restraining Orders', 'Child Custody', 'Divorce'],
    contact: 'jwilson@familylaw.org'
  },
  // Volunteers
  {
    id: '11',
    type: 'volunteer',
    title: 'Maria Rodriguez - Social Worker',
    description: 'Volunteer social worker offering support and guidance',
    location: {
      lat: 40.7556,
      lng: -73.9889,
      address: '111 W 44th St, New York, NY'
    },
    availability: 'Weekday evenings and weekends',
    skills: ['Case management', 'Benefits navigation', 'Mental health support']
  },
  {
    id: '12',
    type: 'volunteer',
    title: 'John Thompson - Resume Help',
    description: 'Professional offering free resume and interview coaching',
    location: {
      lat: 40.7590,
      lng: -73.9720,
      address: '222 E 49th St, New York, NY'
    },
    availability: 'Saturdays 10am-4pm',
    skills: ['Resume writing', 'Interview prep', 'LinkedIn profiles', 'Job search strategies']
  },
  {
    id: '13',
    type: 'volunteer',
    title: 'Community Cleanup Initiative',
    description: 'Volunteer opportunity: Join us in cleaning local parks',
    location: {
      lat: 40.7527,
      lng: -73.9772,
      address: 'Bryant Park, New York, NY'
    },
    availability: 'Every Sunday 9am-12pm',
    skills: ['Community service', 'Environmental care']
  }
];
