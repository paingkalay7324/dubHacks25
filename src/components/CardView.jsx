import { ResourceCard } from './ResourceCard';
import { ScrollArea } from './ui/scroll-area';

export function CardView({ resources, filter, onResourceClick }) {
  const filteredResources = filter === 'all' 
    ? resources 
    : resources.filter(r => r.type === filter);

  return (
    <ScrollArea className="h-full w-full">
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredResources.map((resource) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              onClick={() => onResourceClick(resource)}
            />
          ))}
        </div>
        {filteredResources.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No resources found for this filter
          </div>
        )}
      </div>
    </ScrollArea>
  );
}
