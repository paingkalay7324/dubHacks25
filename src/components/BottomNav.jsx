import { Map, List, Plus, MessageCircle, User } from 'lucide-react';
import { cn } from './ui/utils';

export function BottomNav({ activeTab, onTabChange, onAddResource, messageCount = 2 }) {
  return (
    <div className="border-t bg-background">
      <div className="px-4 py-3 flex items-center justify-center gap-0 max-w-2xl mx-auto">
        {/* Map */}
        <button
          onClick={() => onTabChange('map')}
          className="flex flex-col items-center justify-center gap-1 flex-1"
        >
          <Map className={cn("w-6 h-6", activeTab === 'map' ? 'text-foreground' : 'text-muted-foreground')} />
          <span className={cn(
            "text-xs",
            activeTab === 'map' ? 'text-foreground' : 'text-muted-foreground'
          )}>
            Map
          </span>
        </button>

        {/* List */}
        <button
          onClick={() => onTabChange('cards')}
          className="flex flex-col items-center justify-center gap-1 flex-1"
        >
          <List className={cn("w-6 h-6", activeTab === 'cards' ? 'text-foreground' : 'text-muted-foreground')} />
          <span className={cn(
            "text-xs",
            activeTab === 'cards' ? 'text-foreground' : 'text-muted-foreground'
          )}>
            List
          </span>
        </button>

        {/* Share Button - Center */}
        <button
          onClick={onAddResource}
          className="flex flex-col items-center justify-center gap-1 flex-1"
        >
          <Plus className="w-6 h-6 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Share</span>
        </button>

        {/* Messages */}
        <button
          onClick={() => onTabChange('messages')}
          className="flex flex-col items-center justify-center gap-1 flex-1 relative"
        >
          <MessageCircle className={cn("w-6 h-6", activeTab === 'messages' ? 'text-foreground' : 'text-muted-foreground')} />
          {messageCount > 0 && (
            <div className="absolute top-0 right-6 w-5 h-5 bg-destructive rounded-full flex items-center justify-center border-2 border-background">
              <span className="text-xs text-destructive-foreground">{messageCount}</span>
            </div>
          )}
          <span className={cn(
            "text-xs",
            activeTab === 'messages' ? 'text-foreground' : 'text-muted-foreground'
          )}>
            Messages
          </span>
        </button>

        {/* Profile */}
        <button
          onClick={() => onTabChange('profile')}
          className="flex flex-col items-center justify-center gap-1 flex-1"
        >
          <User className={cn("w-6 h-6", activeTab === 'profile' ? 'text-foreground' : 'text-muted-foreground')} />
          <span className={cn(
            "text-xs",
            activeTab === 'profile' ? 'text-foreground' : 'text-muted-foreground'
          )}>
            Profile
          </span>
        </button>
      </div>
    </div>
  );
}
