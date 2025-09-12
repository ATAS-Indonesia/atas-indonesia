import { NextApiRequest, NextApiResponse } from 'next';
import * as cheerio from 'cheerio';

// In-memory cache for user profiles
const userProfileCache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes in milliseconds

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { url } = req.query;

  if (!url || typeof url !== 'string') {
    return res.status(400).json({ error: 'URL parameter is required' });
  }

  // Validate that it's an SDGs Hub WOSM URL
  const sdgUrlRegex = /^https:\/\/sdgs\.scout\.org\/user\/\d+$/;
  if (!sdgUrlRegex.test(url)) {
    return res.status(400).json({ error: 'Invalid SDGs Hub WOSM URL' });
  }

  try {
    // Check cache first
    const cachedEntry = userProfileCache.get(url);
    const now = Date.now();
    
    if (cachedEntry && (now - cachedEntry.timestamp) < CACHE_DURATION) {
      console.log(`Cache hit for URL: ${url}`);
      return res.status(200).json({
        ...cachedEntry.data,
        cached: true,
        cacheAge: Math.round((now - cachedEntry.timestamp) / 1000) // seconds
      });
    }

    console.log(`Cache miss for URL: ${url}, fetching fresh data`);
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ 
        error: `Failed to fetch URL: ${response.statusText}` 
      });
    }

    const html = await response.text();
    const $ = cheerio.load(html);
    
    // Extract user information
    const fullName = $('.user-full__name').text().trim();
    const country = $('.user-full__country').text().trim();
    
    // Get service count elements (there should be two)
    const serviceCountElements = $('.user-full__service-count');
    const serviceHours = serviceCountElements.eq(0).text().trim();
    const serviceProjects = serviceCountElements.eq(1).text().trim();
    
    // Validate that we found the required elements
    if (!fullName) {
      return res.status(404).json({ 
        error: 'User profile not found or incomplete' 
      });
    }

    const profileData = {
      fullName,
      country: country || 'Not specified',
      serviceHours: serviceHours || '0',
      serviceProjects: serviceProjects || '0',
      url,
      cached: false
    };

    // Cache the result
    userProfileCache.set(url, {
      data: profileData,
      timestamp: now
    });

    // Clean up old cache entries (optional - to prevent memory leaks)
    if (userProfileCache.size > 100) {
      const entries = Array.from(userProfileCache.entries());
      const expiredEntries = entries.filter(([_, entry]) => (now - entry.timestamp) > CACHE_DURATION);
      expiredEntries.forEach(([key]) => userProfileCache.delete(key));
    }

    return res.status(200).json(profileData);

  } catch (error) {
    console.error('Scraping error:', error);
    return res.status(500).json({ 
      error: 'Failed to scrape user profile' 
    });
  }
}
