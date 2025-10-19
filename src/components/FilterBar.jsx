import { Button } from './ui/button';
import { cn } from './ui/utils';

const filters = [
  { 
    id: 'all', 
    label: 'All', 
    emoji: '🌟',
    color: '#6b7280'
  },
  { 
    id: 'free-item', 
    label: 'Free Items', 
    emoji: '📦',
    color: '#10b981'
  },
  { 
    id: 'food-bank', 
    label: 'Food Banks', 
    emoji: '🍎',
    color: '#f59e0b'
  },
  { 
    id: 'shelter', 
    label: 'Shelters', 
    emoji: '🏠',
    color: '#3b82f6'
  },
  { 
    id: 'lawyer', 
    label: 'Legal Aid', 
    emoji: '⚖️',
    color: '#8b5cf6'
  },
  { 
    id: 'volunteer', 
    label: 'Volunteers', 
    emoji: '🤝',
    color: '#ec4899'
  },
];

export function FilterBar({ filter, onFilterChange }) {
  return (
    <div className="border-b bg-background">
      <div className="px-2 py-3 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {filters.map((f) => {
            const isActive = filter === f.id;
            return (
              <Button
                key={f.id}
                variant={isActive ? 'default' : 'outline'}
                size="sm"
                onClick={() => onFilterChange(f.id)}
                className={cn(
                  "flex items-center gap-2 whitespace-nowrap",
                  isActive && "border-2"
                )}
                style={isActive ? {
                  backgroundColor: f.color,
                  borderColor: f.color,
                  color: 'white'
                } : {}}
              >
                <span className="text-base">{f.emoji}</span>
                {f.label}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
