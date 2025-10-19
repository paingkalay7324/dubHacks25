import { FilterType } from '../types';
import { Button } from './ui/button';
import { cn } from './ui/utils';

interface FilterBarProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filters = [
  { 
    id: 'all' as FilterType, 
    label: 'All', 
    emoji: '🌟',
    color: '#6b7280'
  },
  { 
    id: 'free-item' as FilterType, 
    label: 'Free Items', 
    emoji: '📦',
    color: '#10b981'
  },
  { 
    id: 'food-bank' as FilterType, 
    label: 'Food Banks', 
    emoji: '🍎',
    color: '#f59e0b'
  },
  { 
    id: 'shelter' as FilterType, 
    label: 'Shelters', 
    emoji: '🏠',
    color: '#3b82f6'
  },
  { 
    id: 'lawyer' as FilterType, 
    label: 'Legal Aid', 
    emoji: '⚖️',
    color: '#8b5cf6'
  },
  { 
    id: 'volunteer' as FilterType, 
    label: 'Volunteers', 
    emoji: '🤝',
    color: '#ec4899'
  },
];

export function FilterBar({ filter, onFilterChange }: FilterBarProps) {
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
