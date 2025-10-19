import { useState } from 'react';
import { Search, Send, ArrowLeft } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { Avatar, AvatarFallback } from './ui/avatar';

const mockChats = [
  {
    id: '1',
    name: 'Sarah Martinez',
    type: 'Lawyer',
    lastMessage: 'I can help you with your tenant rights case',
    timestamp: '10m ago',
    unread: true,
    avatar: 'SM'
  },
  {
    id: '2',
    name: 'Maria Rodriguez',
    type: 'Social Worker',
    lastMessage: 'Have you applied for benefits yet?',
    timestamp: '2h ago',
    unread: true,
    avatar: 'MR'
  },
  {
    id: '3',
    name: 'John Doe',
    type: 'Donator',
    lastMessage: 'The couch is still available',
    timestamp: '1d ago',
    unread: false,
    avatar: 'JD'
  }
];

const mockMessages = {
  '1': [
    { id: '1', text: 'Hi, I need help with an eviction notice', timestamp: '10:30 AM', sender: 'user' },
    { id: '2', text: 'I can help you with your tenant rights case. Can you tell me more about your situation?', timestamp: '10:35 AM', sender: 'other' },
    { id: '3', text: 'My landlord wants to evict me but I believe it\'s unjust', timestamp: '10:37 AM', sender: 'user' },
    { id: '4', text: 'Let\'s schedule a consultation. I offer free legal aid for cases like yours.', timestamp: '10:40 AM', sender: 'other' }
  ],
  '2': [
    { id: '1', text: 'I need help navigating the benefits system', timestamp: '9:00 AM', sender: 'user' },
    { id: '2', text: 'Have you applied for benefits yet? I can guide you through the process', timestamp: '9:15 AM', sender: 'other' }
  ],
  '3': [
    { id: '1', text: 'Is the couch still available?', timestamp: 'Yesterday', sender: 'user' },
    { id: '2', text: 'The couch is still available. When can you pick it up?', timestamp: 'Yesterday', sender: 'other' }
  ]
};

export function Messages() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messageText, setMessageText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChats = searchQuery
    ? mockChats.filter(chat => 
        chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        chat.type.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : mockChats;

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // In a real app, this would send the message
      setMessageText('');
    }
  };

  if (selectedChat) {
    const messages = mockMessages[selectedChat.id] || [];
    
    return (
      <div className="h-full flex flex-col bg-background">
        {/* Chat Header */}
        <div className="border-b p-4 flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSelectedChat(null)}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <Avatar className="w-10 h-10">
            <AvatarFallback>{selectedChat.avatar}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3>{selectedChat.name}</h3>
            <p className="text-muted-foreground text-xs">{selectedChat.type}</p>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">{message.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="border-t p-4 flex gap-2">
          <Input
            placeholder="Type a message..."
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1"
          />
          <Button onClick={handleSendMessage} size="icon">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="border-b p-4">
        <h2>Messages</h2>
        <p className="text-muted-foreground text-sm mt-1">
          Chat with donators, lawyers, and social workers
        </p>
      </div>

      {/* Search */}
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search messages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Chat List */}
      <ScrollArea className="flex-1">
        <div className="divide-y">
          {filteredChats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className="w-full p-4 flex items-start gap-3 hover:bg-muted/50 transition-colors text-left"
            >
              <Avatar className="w-12 h-12 flex-shrink-0">
                <AvatarFallback>{chat.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="truncate">{chat.name}</h3>
                  <span className="text-xs text-muted-foreground flex-shrink-0">
                    {chat.timestamp}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-1">{chat.type}</p>
                <p className="text-sm text-muted-foreground truncate">
                  {chat.lastMessage}
                </p>
              </div>
              {chat.unread && (
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
              )}
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
