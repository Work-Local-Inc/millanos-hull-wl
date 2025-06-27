
import { useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast"; 
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { FirecrawlService } from '@/utils/FirecrawlService';
import { Download, Loader2, CheckCircle } from 'lucide-react';

export const MilanoDataScraper = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [scrapedData, setScrapedData] = useState<any>(null);
  const [businessData, setBusinessData] = useState<any>(null);
  const [autoScrapeComplete, setAutoScrapeComplete] = useState(false);

  useEffect(() => {
    // Auto-scrape on component mount
    handleAutoScrape();
  }, []);

  const handleAutoScrape = async () => {
    setIsLoading(true);
    
    try {
      const result = await FirecrawlService.autoScrapeAndExtract();
      
      if (result.success) {
        setBusinessData(result.data);
        setAutoScrapeComplete(true);
        
        toast({
          title: "Success! 🍕",
          description: "Milano Pizzeria data extracted successfully",
        });
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to scrape Milano Pizzeria website",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Auto-scraping error:', error);
      toast({
        title: "Error",
        description: "Failed to scrape website automatically",
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
    link.download = 'milano-pizzeria-business-data.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const updateConfiguration = () => {
    if (!businessData) return;
    
    // This would trigger the configuration update process
    toast({
      title: "Configuration Update",
      description: "Ready to update Milano Pizzeria configuration with scraped data",
    });
    
    console.log('Business data ready for configuration update:', businessData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-red-600">Milano Pizzeria Data Scraper</h2>
        <p className="text-gray-600 mb-6">
          Automatically extracting business information from hull.milanopizzeria.ca
        </p>
        
        {/* Status Section */}
        <div className="mb-6">
          {isLoading && (
            <div className="flex items-center gap-3 text-blue-600">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Scraping Milano Pizzeria website...</span>
            </div>
          )}
          
          {autoScrapeComplete && !isLoading && (
            <div className="flex items-center gap-3 text-green-600">
              <CheckCircle className="h-5 w-5" />
              <span>Milano Pizzeria data extracted successfully!</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-6">
          <Button 
            onClick={handleAutoScrape} 
            disabled={isLoading}
            className="bg-red-600 hover:bg-red-700"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Scraping...
              </>
            ) : (
              'Re-scrape Milano Data'
            )}
          </Button>
          
          {businessData && (
            <>
              <Button onClick={downloadBusinessData} variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download Data
              </Button>
              
              <Button onClick={updateConfiguration} className="bg-green-600 hover:bg-green-700">
                Update Configuration
              </Button>
            </>
          )}
        </div>

        {/* Extracted Business Data */}
        {businessData && (
          <Card className="p-4 bg-green-50">
            <h3 className="font-semibold text-green-800 mb-3">🍕 Milano Pizzeria Business Information:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Business Name:</strong> {businessData.businessName}
              </div>
              <div>
                <strong>Phone:</strong> {businessData.phone}
              </div>
              <div>
                <strong>Email:</strong> {businessData.email}
              </div>
              <div className="md:col-span-2">
                <strong>Address:</strong> {businessData.address}
              </div>
              {businessData.hours && businessData.hours.length > 0 && (
                <div className="md:col-span-2">
                  <strong>Hours Found:</strong> {businessData.hours.join(', ')}
                </div>
              )}
              {businessData.instagram && (
                <div>
                  <strong>Instagram:</strong> 
                  <a href={businessData.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                    {businessData.instagram}
                  </a>
                </div>
              )}
              {businessData.facebook && (
                <div>
                  <strong>Facebook:</strong>
                  <a href={businessData.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                    {businessData.facebook}
                  </a>
                </div>
              )}
            </div>
          </Card>
        )}

        {/* Raw Scraped Data Preview */}
        {businessData && businessData.rawMarkdown && (
          <Card className="p-4">
            <h3 className="font-semibold mb-3">Raw Website Content (First 500 chars):</h3>
            <Textarea 
              value={businessData.rawMarkdown.substring(0, 500) + '...'} 
              readOnly 
              className="h-32 text-xs font-mono"
            />
          </Card>
        )}
      </Card>
    </div>
  );
};
