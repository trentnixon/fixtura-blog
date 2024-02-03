// utils/fetcher.ts

interface FetcherConfig {
    PATH: string;
    method?: 'GET' | 'POST' | 'PUT';
    body?: Record<string, unknown>;
    retry?: boolean;
    nextConfig?: Record<string, unknown>;
  }
  
  export async function serverFetcher(config: FetcherConfig): Promise<any> {
    const { PATH, method = 'GET', body, retry = false, nextConfig = {} } = config;
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.NEXT_STRAPI_API}`,
    });
  
    const options: RequestInit = {
      method,
      headers,
      body: (method === 'POST' || method === 'PUT') ? JSON.stringify(body) : null,
      ...nextConfig,
    };
  
    try {
      console.log(`Fetching data from ${process.env.NEXT_FIXTURA_API}${PATH}`);
      const response = await fetch(`${process.env.NEXT_FIXTURA_API}${PATH}`, options);
  
      if (!response.ok) {
        console.log(response.status);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      console.log(`Data fetched successfully from ${PATH}`);
      return await response.json();
    } catch (error) {
      console.error(`Error in fetcher: ${error}`);
  
      if (retry) {
        console.log("Retrying fetcher in 2 seconds...");
        await new Promise(resolve => setTimeout(resolve, 2000));
        return fetcher({ ...config, retry: false }); // Retry without allowing more retries
      } else {
        throw error;
      }
    }
  }
  