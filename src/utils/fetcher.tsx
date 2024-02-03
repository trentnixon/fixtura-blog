// utils/fetcher.ts

export interface FetcherConfig {
    endpoint: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    data?: any;
    // Add other configurations as needed
  }
  
  export async function fetcher<T>({ endpoint, method = 'GET', data }: FetcherConfig): Promise<T> {
    const headers = new Headers({
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_FIXTURA_API_KEY}`,
      'Content-Type': 'application/json',
    });
  
    const requestInit: RequestInit = {
      method,
      headers,
      body: method !== 'GET' ? JSON.stringify(data) : null,
    };
  
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/${endpoint}`, requestInit);
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    return response.json();
  }
  