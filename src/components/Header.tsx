import { Button } from './ui/button';
import { Plus, Menu } from 'lucide-react';

interface HeaderProps {
  onAddResource: () => void;
}

export function Header({ onAddResource }: HeaderProps) {
  return (
    <header className="border-b bg-background px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon">
          <Menu className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="leading-none">Community Resources</h1>
          <p className="text-muted-foreground">Find help in your area</p>
        </div>
      </div>
      <Button onClick={onAddResource} size="sm">
        <Plus className="w-4 h-4 mr-2" />
        Post Item
      </Button>
    </header>
  );
}
