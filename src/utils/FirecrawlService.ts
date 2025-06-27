
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
  private static API_KEY = 'fc-6972b5aecc1e40728ca1788e0ce573e6';
  private static firecrawlApp = new FirecrawlApp({ apiKey: this.API_KEY });

  static async scrapeWebsite(url: string): Promise<{ success: boolean; error?: string; data?: any }> {
    try {
      console.log('Scraping Milano Pizzeria website:', url);
      
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
    
    console.log('Extracting business data from:', { markdown: markdown.substring(0, 200), html: html.substring(0, 200) });
    
    // Extract business information using regex patterns
    const phoneRegex = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
    const addressRegex = /\d+\s+[A-Za-z\s]+(?:,\s*[A-Za-z\s]+)*,\s*[A-Z]{2}\s*[A-Z0-9\s]+/g;
    const hoursRegex = /(\d{1,2}:\d{2}\s*(?:AM|PM)?\s*-\s*\d{1,2}:\d{2}\s*(?:AM|PM)?)/gi;
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    
    const phones = markdown.match(phoneRegex) || [];
    const addresses = markdown.match(addressRegex) || [];
    const hours = markdown.match(hoursRegex) || [];
    const emails = markdown.match(emailRegex) || [];
    
    // Extract social media links
    const instagramMatch = html.match(/instagram\.com\/([^"'\s]+)/i);
    const facebookMatch = html.match(/facebook\.com\/([^"'\s]+)/i);
    
    return {
      businessName: 'Milano Pizzeria',
      phone: phones[0] || '(819) XXX-XXXX',
      email: emails[0] || 'info@milanopizzeria.ca',
      address: addresses[0] || 'Hull Address, Hull, QC',
      hours: hours,
      instagram: instagramMatch ? `https://instagram.com/${instagramMatch[1]}` : null,
      facebook: facebookMatch ? `https://facebook.com/${facebookMatch[1]}` : null,
      rawMarkdown: markdown,
      rawHtml: html
    };
  }

  static async autoScrapeAndExtract(): Promise<{ success: boolean; data?: any; error?: string }> {
    try {
      const scrapeResult = await this.scrapeWebsite('https://hull.milanopizzeria.ca');
      
      if (!scrapeResult.success) {
        return scrapeResult;
      }
      
      const businessData = this.extractBusinessData(scrapeResult.data);
      console.log('Extracted business data:', businessData);
      
      return {
        success: true,
        data: businessData
      };
    } catch (error) {
      console.error('Auto scrape error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to auto-scrape Milano data'
      };
    }
  }
}
