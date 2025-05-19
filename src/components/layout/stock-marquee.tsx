'use client'; // Ensures this component runs on the client side in Next.js

import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"; // ShadCN Alert component

// Define the structure of stock data used in the app
interface Stock {
  symbol: string;
  price: string;
  change: string;
  isPositive: boolean;
}

// Define the structure of Alpha Vantage's API response
interface AlphaVantageQuoteResponse {
  'Global Quote': {
    '01. symbol': string;
    '05. price': string;
    '10. change percent': string;
    '09. change': string;
  };
  error?: string;
}

// Initial static data to be shown or used as fallback
const initialStockData: Stock[] = [
  { symbol: 'RELIANCE', price: '₹2850.75', change: '+0.90%', isPositive: true },
  { symbol: 'TCS', price: '₹3800.10', change: '-0.40%', isPositive: false },
  { symbol: 'HDFCBANK', price: '₹1450.50', change: '+0.40%', isPositive: true },
  { symbol: 'INFY', price: '₹1500.00', change: '+0.81%', isPositive: true },
  { symbol: 'ICICIBANK', price: '₹1050.20', change: '-0.22%', isPositive: false },
  { symbol: 'SBIN', price: '₹750.90', change: '+1.09%', isPositive: true },
  { symbol: 'BHARTIARTL', price: '₹1200.45', change: '-0.46%', isPositive: false },
  { symbol: 'KOTAKBANK', price: '₹1780.00', change: '+0.18%', isPositive: true },
  { symbol: 'LT', price: '₹3550.60', change: '-0.56%', isPositive: false },
  { symbol: 'AXISBANK', price: '₹1100.15', change: '+0.96%', isPositive: true },
];

export function StockMarquee() {
  // Local state for stock data, loading status, error message, and mount detection
  const [stockData, setStockData] = useState<Stock[]>(initialStockData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Detects if component is mounted (to avoid hydration issues in Next.js)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    async function getStockData() {
      setIsLoading(true);
      setError(null);
      const apiKey = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;

      // If no API key found, show fallback data
      if (!apiKey) {
        setError('API key not found. Displaying static data. Please set NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY.');
        setStockData(initialStockData);
        setIsLoading(false);
        return;
      }

      // Symbols to fetch live data for
      const symbolsToFetch = [
        'RELIANCE.BSE', 'TCS.BSE', 'HDFCBANK.BSE', 'INFY.BSE',
        'ICICIBANK.BSE', 'SBIN.BSE', 'BHARTIARTL.BSE', 'KOTAKBANK.BSE',
        'LT.BSE', 'AXISBANK.BSE'
      ];

      try {
        // Fetch and process each symbol in parallel
        const fetchedDataPromises = symbolsToFetch.map(async (symbol) => {
          const fallbackSymbolData = initialStockData.find(s => s.symbol === symbol) || {
            symbol, price: "N/A", change: "N/A", isPositive: false
          };

          try {
            const response = await fetch(
              `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`
            );

            if (!response.ok) {
              return fallbackSymbolData; // Use fallback on HTTP error
            }

            const data: AlphaVantageQuoteResponse = await response.json();

            if (data.error || !data['Global Quote']) {
              return fallbackSymbolData; // Use fallback on API error
            }

            const price = parseFloat(data['Global Quote']['05. price']);
            const changePercent = parseFloat(data['Global Quote']['10. change percent']);
            const change = data['Global Quote']['09. change'];

            return {
              symbol,
              price: `₹${price.toFixed(2)}`,
              change: `${changePercent.toFixed(2)}%`,
              isPositive: change.startsWith('+'),
            };
          } catch {
            return fallbackSymbolData; // Use fallback on processing error
          }
        });

        // Wait for all promises to resolve
        const results = await Promise.all(fetchedDataPromises);
        setStockData(results as Stock[]); // Update state with new data
      } catch {
        setError(`Failed to fetch stock data. Displaying static data.`);
        setStockData(initialStockData);
      } finally {
        setIsLoading(false);
      }
    }

    getStockData(); // Initial fetch
    const intervalId = setInterval(getStockData, 15 * 60 * 1000); // Refresh every 15 mins
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [isMounted]);

  // Double the stock data for continuous marquee scroll
  const dataToRender = stockData.length > 0 ? stockData : initialStockData;
  const marqueeData = dataToRender.length > 0 ? [...dataToRender, ...dataToRender] : [];

  return (
    <div className="w-full bg-secondary text-secondary-foreground overflow-hidden whitespace-nowrap h-10 flex items-center">
      {/* Loading message */}
      {isLoading && isMounted && (
        <div className="px-4 py-2 text-xs">Loading stock data...</div>
      )}

      {/* Error alert using ShadCN UI */}
      {error && isMounted && (
        <Alert variant="destructive" className="p-2 text-xs w-full">
          <AlertTitle className="text-xs font-semibold">API Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Render animated marquee if data is ready and there's no error */}
      {!isLoading && !error && marqueeData.length > 0 && (
        <div className="flex animate-marquee">
          {marqueeData.map((stock, index) => (
            <div
              key={`${stock.symbol}-${index}`}
              className="flex items-center space-x-2 px-4 py-2 border-r border-border last:border-r-0"
            >
              <span className="text-xs font-semibold text-foreground">{stock.symbol}</span>
              <span className="text-xs">{stock.price}</span>
              <span
                className={cn(
                  'text-xs flex items-center',
                  stock.isPositive ? 'text-green-500' : 'text-red-500'
                )}
              >
                {stock.isPositive ? (
                  <TrendingUp className="h-3 w-3 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1" />
                )}
                {stock.change}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* SSR fallback / ultimate fallback if API fails and no data loads */}
      {((!isMounted && initialStockData.length > 0) ||
        (!isLoading && !error && stockData.length === 0 && initialStockData.length > 0)) && (
        <div className="flex">
          {initialStockData.map((stock, index) => (
            <div
              key={`initial-${stock.symbol}-${index}`}
              className="flex items-center space-x-2 px-4 py-2 border-r border-border last:border-r-0"
            >
              <span className="text-xs font-semibold text-foreground">{stock.symbol}</span>
              <span className="text-xs">{stock.price}</span>
              <span
                className={cn(
                  'text-xs flex items-center',
                  stock.isPositive ? 'text-green-500' : 'text-red-500'
                )}
              >
                {stock.isPositive ? (
                  <TrendingUp className="h-3 w-3 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1" />
                )}
                {stock.change}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
