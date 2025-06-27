
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast"; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { FirecrawlService } from '@/utils/FirecrawlService';
import { ExternalLink, Download, Key } from 'lucide-react';

export const MilanoDataScraper = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [scrapedData, setScrapedData] = useState<any>(null);
  const [businessData, setBusinessData] = useState<any>(null);

  const handleSaveApiKey = () => {
    if (!apiKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter your FireCrawl API key",
        variant: "destructive",
      });
      return;
    }
    
    FirecrawlService.saveApiKey(apiKey);
    toast({
      title: "Success",
      description: "API key saved successfully",
    });
  };

  const handleScrape = async () => {
    setIsLoading(true);
    
    try {
      const result = await FirecrawlService.scrapeWebsite('https://hull.milanopizzeria.ca');
      
      if (result.success) {
        setScrapedData(result.data);
        const extracted = FirecrawlService.extractBusinessData(result.data);
        setBusinessData(extracted);
        
        toast({
          title: "Success",
          description: "Milano Pizzeria data scraped successfully",
        });
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to scrape Milano Pizzeria website",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Scraping error:', error);
      toast({
        title: "Error",
        description: "Failed to scrape website",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const downloadBusinessData = () => {
    if (!businessData) return;
    
    const dataStr = JSON.stringify(businessData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'milano-pizzeria-data.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-red-600">Milano Pizzeria Data Scraper</h2>
        <p className="text-gray-600 mb-6">
          Extract business information from hull.milanopizzeria.ca to configure the website
        </p>
        
        {/* API Key Input */}
        <div className="space-y-4 mb-6">
          <div className="flex gap-4">
            <Input
              type="password"
              placeholder="Enter your FireCrawl API key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleSaveApiKey} variant="outline">
              <Key className="h-4 w-4 mr-2" />
              Save Key
            </Button>
          </div>
          <p className="text-sm text-gray-500">
            Get your API key from{" "}
            <a href="https://firecrawl.dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              firecrawl.dev
            </a>
          </p>
        </div>

        {/* Scrape Button */}
        <div className="flex gap-4 mb-6">
          <Button 
            onClick={handleScrape} 
            disabled={isLoading || !FirecrawlService.getApiKey()}
            className="bg-red-600 hover:bg-red-700"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            {isLoading ? "Scraping..." : "Scrape Milano Pizzeria"}
          </Button>
          
          {businessData && (
            <Button onClick={downloadBusinessData} variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Data
            </Button>
          )}
        </div>

        {/* Extracted Business Data */}
        {businessData && (
          <Card className="p-4 bg-green-50">
            <h3 className="font-semibold text-green-800 mb-3">Extracted Business Information:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Business Name:</strong> {businessData.businessName}
              </div>
              <div>
                <strong>Phone:</strong> {businessData.phone}
              </div>
              <div className="md:col-span-2">
                <strong>Address:</strong> {businessData.address}
              </div>
              {businessData.hours.length > 0 && (
                <div className="md:col-span-2">
                  <strong>Hours Found:</strong> {businessData.hours.join(', ')}
                </div>
              )}
            </div>
          </Card>
        )}

        {/* Raw Scraped Data */}
        {scrapedData && (
          <Card className="p-4">
            <h3 className="font-semibold mb-3">Raw Scraped Content (First 500 chars):</h3>
            <Textarea 
              value={scrapedData.markdown?.substring(0, 500) + '...' || 'No markdown content'} 
              readOnly 
              className="h-32 text-xs font-mono"
            />
          </Card>
        )}
      </Card>
    </div>
  );
};
