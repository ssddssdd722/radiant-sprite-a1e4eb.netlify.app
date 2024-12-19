// Utility functions for link shortening
export async function shortenLinks(links: string[]): Promise<string[]> {
  try {
    // Simulated API call - replace with actual API endpoint
    const response = await new Promise<{ shortenedLinks: string[] }>(resolve => 
      setTimeout(() => resolve({
        shortenedLinks: links.map(l => `https://short.url/${Math.random().toString(36).substr(2, 6)}`)
      }), 1000)
    );
    return response.shortenedLinks;
  } catch (error) {
    console.error('Error shortening links:', error);
    throw new Error('فشل في اختصار الروابط');
  }
}

export function validateLinks(input: string): string[] {
  return input.split('\n').filter(link => {
    const trimmedLink = link.trim();
    return trimmedLink && trimmedLink.startsWith('http');
  });
}