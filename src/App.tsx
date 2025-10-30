import { useState, useEffect } from "react";
import { LandingPage } from "./components/landing-page";
import { BeginnerGuide } from "./components/beginner-guide";
import { LoginSignup } from "./components/login-signup";
import { Header } from "./components/header";
import { Dashboard } from "./components/dashboard";
import { PortfolioPage } from "./components/portfolio-page";
import { StockDetails } from "./components/stock-details";
import { ProfilePage } from "./components/profile-page";
import { Chatbot } from "./components/chatbot";
import { CryptoPage } from "./components/crypto-page";
import { USStocksPage } from "./components/us-stocks-page";
import { ETFsPage } from "./components/etfs-page";
import { SectoralIndicesPage } from "./components/sectoral-indices-page";
import { MutualFundsPage } from "./components/mutual-funds-page";
import { AlertsPage } from "./components/alerts-page";
import { MarketNewsPage } from "./components/market-news-page";
import { GoalsPage } from "./components/goals-page";

type Page = 'landing' | 'beginner-guide' | 'login' | 'dashboard' | 'portfolio' | 'stock-details' | 'profile' | 'crypto' | 'us-stocks' | 'etfs' | 'sectoral-indices' | 'mutual-funds' | 'alerts' | 'news' | 'goals';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [selectedStock, setSelectedStock] = useState<string>('AAPL');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [user, setUser] = useState<{ name: string; email: string }>({
    name: '',
    email: ''
  });

  // Apply theme to document (but not on landing page or beginner guide)
  useEffect(() => {
    const shouldApplyTheme = currentPage !== 'landing' && currentPage !== 'beginner-guide' && currentPage !== 'login';
    
    if (shouldApplyTheme && theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme, currentPage]);

  const handleGetStarted = () => {
    setCurrentPage('login');
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('landing');
  };

  const handleLearnMore = () => {
    setCurrentPage('beginner-guide');
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const handleStockClick = (symbol: string) => {
    setSelectedStock(symbol);
    setCurrentPage('stock-details');
  };

  const handleBackToDashboard = () => {
    setCurrentPage('dashboard');
  };

  const handleBackToLanding = () => {
    setCurrentPage('landing');
  };

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen">
      {currentPage === 'landing' ? (
        <LandingPage onGetStarted={handleGetStarted} onLearnMore={handleLearnMore} />
      ) : currentPage === 'beginner-guide' ? (
        <BeginnerGuide onBack={handleBackToLanding} onGetStarted={handleGetStarted} />
      ) : currentPage === 'login' ? (
        <LoginSignup onLoginSuccess={handleLoginSuccess} onBack={handleBackToLanding} onUserData={setUser} />
      ) : (
        <>
          <Header 
            onNavigate={handleNavigate} 
            currentPage={currentPage}
            theme={theme}
            onThemeToggle={handleThemeToggle}
            onLogout={handleLogout}
            isAuthenticated={isAuthenticated}
          />
          
          {currentPage === 'dashboard' && (
            <Dashboard onStockClick={handleStockClick} user={user} />
          )}
          
          {currentPage === 'portfolio' && (
            <PortfolioPage onStockClick={handleStockClick} user={user} />
          )}
          
          {currentPage === 'stock-details' && (
            <StockDetails
              symbol={selectedStock}
              onBack={handleBackToDashboard}
            />
          )}

          {currentPage === 'profile' && (
            <ProfilePage
              onBack={handleBackToDashboard}
              theme={theme}
              onThemeToggle={handleThemeToggle}
              onLogout={handleLogout}
              user={user}
            />
          )}

          {currentPage === 'crypto' && (
            <CryptoPage onCryptoClick={handleStockClick} />
          )}

          {currentPage === 'us-stocks' && (
            <USStocksPage onStockClick={handleStockClick} />
          )}

          {currentPage === 'etfs' && (
            <ETFsPage onETFClick={handleStockClick} />
          )}

          {currentPage === 'sectoral-indices' && (
            <SectoralIndicesPage onIndexClick={handleStockClick} />
          )}

          {currentPage === 'mutual-funds' && (
            <MutualFundsPage onFundClick={handleStockClick} />
          )}

          {currentPage === 'alerts' && (
            <AlertsPage />
          )}

          {currentPage === 'news' && (
            <MarketNewsPage />
          )}

          {currentPage === 'goals' && (
            <GoalsPage />
          )}

          <Chatbot />
        </>
      )}
    </div>
  );
}
