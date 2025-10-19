import { useState } from 'react';
import { MapView } from './components/MapView';
import { CardView } from './components/CardView';
import { BottomNav } from './components/BottomNav';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { Messages } from './components/Messages';
import { Profile } from './components/Profile';
import { ResourceDetailSheet } from './components/ResourceDetailSheet';
import { PostItemDialog } from './components/PostItemDialog';
import { mockResources } from './lib/mockData';

export default function App() {
  const [activeTab, setActiveTab] = useState('map');
  const [filter, setFilter] = useState('all');
  const [selectedResource, setSelectedResource] = useState(null);
  const [detailSheetOpen, setDetailSheetOpen] = useState(false);
  const [postDialogOpen, setPostDialogOpen] = useState(false);

  const handleResourceClick = (resource) => {
    setSelectedResource(resource);
    setDetailSheetOpen(true);
  };

  const showFilterBar = activeTab === 'map' || activeTab === 'cards';

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      {showFilterBar && <Header onAddResource={() => setPostDialogOpen(true)} />}
      
      {showFilterBar && (
        <FilterBar filter={filter} onFilterChange={setFilter} />
      )}
      
      <div className="flex-1 overflow-hidden">
        {activeTab === 'map' && (
          <MapView 
            resources={mockResources} 
            filter={filter}
            onResourceClick={handleResourceClick}
          />
        )}
        {activeTab === 'cards' && (
          <CardView 
            resources={mockResources} 
            filter={filter}
            onResourceClick={handleResourceClick}
          />
        )}
        {activeTab === 'messages' && <Messages />}
        {activeTab === 'profile' && <Profile />}
      </div>
      
      <BottomNav
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onAddResource={() => setPostDialogOpen(true)}
        messageCount={2}
      />
      
      <ResourceDetailSheet
        resource={selectedResource}
        open={detailSheetOpen}
        onOpenChange={setDetailSheetOpen}
      />
      
      <PostItemDialog
        open={postDialogOpen}
        onOpenChange={setPostDialogOpen}
      />
    </div>
  );
}
