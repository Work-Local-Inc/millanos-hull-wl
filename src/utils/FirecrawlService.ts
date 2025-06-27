
import FirecrawlApp from '@mendable/firecrawl-js';

interface ErrorResponse {
  success: false;
  error: string;
}

interface CrawlStatusResponse {
  success: true;
  status: string;
  completed: number;
  total: number;
  creditsUsed: number;
  expiresAt: string;
  data: any[];
}

type CrawlResponse = CrawlStatusResponse | ErrorResponse;

export class FirecrawlService {
  private static API_KEY_STORAGE_KEY = 'firecrawl_api_key';
  private static firecrawlApp: FirecrawlApp | null = null;

  static saveApiKey(apiKey: string): void {
    localStorage.setItem(this.API_KEY_STORAGE_KEY, apiKey);
    this.firecrawlApp = new FirecrawlApp({ apiKey });
    console.log('API key saved successfully');
  }

  static getApiKey(): string | null {
    return localStorage.getItem(this.API_KEY_STORAGE_KEY);
  }

  static async testApi(): Promise<boolean> {
    const apiKey = this.getApiKey();
    if (!apiKey) return false;

    try {
      console.log('Testing API key with Firecrawl');
      this.firecrawlApp = new FirecrawlApp({ apiKey });
      const testResponse = await this.firecrawlApp.scrapeUrl('https://hull.milanopizzeria.ca');
      return testResponse.success;
    } catch (error) {
      console.error('Error testing API key:', error);
      return false;
    }
  }

  static async scrapeWebsite(url: string): Promise<{ success: boolean; error?: string; data?: any }> {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      return { success: false, error: 'API key not found' };
    }

    try {
      console.log('Scraping Milano Pizzeria website:', url);
      if (!this.firecrawlApp) {
        this.firecrawlApp = new FirecrawlApp({ apiKey });
      }

      const scrapeResponse = await this.firecrawlApp.scrapeUrl(url, {
        formats: ['markdown', 'html'],
      });

      if (!scrapeResponse.success) {
        console.error('Scrape failed:', scrapeResponse.error);
        return { 
          success: false, 
          error: scrapeResponse.error || 'Failed to scrape website' 
        };
      }

      console.log('Scrape successful:', scrapeResponse);
      return { 
        success: true,
        data: scrapeResponse 
      };
    } catch (error) {
      console.error('Error during scrape:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to connect to Firecrawl API' 
      };
    }
  }

  static extractBusinessData(scrapedData: any) {
    const markdown = scrapedData.markdown || '';
    const html = scrapedData.html || '';
    
    // Extract business information using regex patterns
    const phoneRegex = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
    const addressRegex = /\d+\s+[A-Za-z\s]+,\s*[A-Za-z\s]+,\s*[A-Z]{2}\s*[A-Z0-9\s]+/g;
    const hoursRegex = /(\d{1,2}:\d{2}\s*(AM|PM)?\s*-\s*\d{1,2}:\d{2}\s*(AM|PM)?)/gi;
    
    const phones = markdown.match(phoneRegex) || [];
    const addresses = markdown.match(addressRegex) || [];
    const hours = markdown.match(hoursRegex) || [];
    
    return {
      businessName: 'Milano Pizzeria',
      phone: phones[0] || '(819) XXX-XXXX',
      address: addresses[0] || 'Hull Address, Hull, QC',
      hours: hours,
      rawMarkdown: markdown,
      rawHtml: html
    };
  }
}
