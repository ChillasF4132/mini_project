import { Search, User, Moon, Sun } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
  onLogout: () => void;
  isAuthenticated: boolean;
}

export function Header({ onNavigate, currentPage, theme, onThemeToggle, onLogout, isAuthenticated }: HeaderProps) {
  const handleLogoClick = () => {
    if (isAuthenticated) {
      onNavigate('dashboard');
    } else {
      onNavigate('landing');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto flex h-16 items-center px-4">
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleLogoClick}>
          <span className="text-2xl" style={{ fontWeight: 700 }}>InvestIQ</span>
        </div>

        <nav className="ml-8 hidden lg:flex items-center gap-4">
          <button
            onClick={() => onNavigate('dashboard')}
            className={`transition-colors hover:text-primary ${
              currentPage === 'dashboard' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => onNavigate('portfolio')}
            className={`transition-colors hover:text-primary ${
              currentPage === 'portfolio' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Portfolio
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="transition-colors hover:text-primary text-muted-foreground">
                Markets ▾
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => onNavigate('sectoral-indices')}>
                Indian Indices
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onNavigate('us-stocks')}>
                US Stocks
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onNavigate('crypto')}>
                Cryptocurrency
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onNavigate('etfs')}>
                ETFs
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onNavigate('mutual-funds')}>
                Mutual Funds
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <button
            onClick={() => onNavigate('goals')}
            className={`transition-colors hover:text-primary ${
              currentPage === 'goals' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Goals
          </button>
          <button
            onClick={() => onNavigate('news')}
            className={`transition-colors hover:text-primary ${
              currentPage === 'news' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            News
          </button>
          <button
            onClick={() => onNavigate('alerts')}
            className={`transition-colors hover:text-primary ${
              currentPage === 'alerts' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Alerts
          </button>
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search stocks..."
              className="w-64 pl-10"
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => onNavigate('profile')}>Profile</DropdownMenuItem>
              <DropdownMenuItem onClick={onThemeToggle}>
                <div className="flex items-center gap-2">
                  {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                  <span>Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onLogout}>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
