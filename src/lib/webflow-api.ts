// Webflow CMS API Service
export interface WebflowConfig {
  siteId: string;
  collectionId: string;
  apiToken: string;
}

export interface WebflowChart {
  _id: string;
  name: string;
  slug: string;
  'chart-title': string;
  'chart-description': string;
  'chart-image': {
    url: string;
    alt: string;
  };
  'chart-category': string;
  'date-published': string;
  'is-published': boolean;
  'created-on': string;
  'updated-on': string;
}

export interface CreateChartData {
  'chart-title': string;
  'chart-description': string;
  'chart-category': string;
  'date-published': string;
  'is-published': boolean;
}

class WebflowAPI {
  private config: WebflowConfig;
  private baseUrl = 'https://api.webflow.com';

  constructor(config: WebflowConfig) {
    this.config = config;
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Authorization': `Bearer ${this.config.apiToken}`,
      'Content-Type': 'application/json',
      ...options.headers,
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`Webflow API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  // Get all charts from collection
  async getCharts(): Promise<WebflowChart[]> {
    const endpoint = `/collections/${this.config.collectionId}/items`;
    const response = await this.request(endpoint);
    return response.items || [];
  }

  // Get single chart by ID
  async getChart(chartId: string): Promise<WebflowChart> {
    const endpoint = `/collections/${this.config.collectionId}/items/${chartId}`;
    return await this.request(endpoint);
  }

  // Create new chart
  async createChart(data: CreateChartData): Promise<WebflowChart> {
    const endpoint = `/collections/${this.config.collectionId}/items`;
    return await this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify({
        fieldData: data,
        live: data['is-published']
      }),
    });
  }

  // Update existing chart
  async updateChart(chartId: string, data: Partial<CreateChartData>): Promise<WebflowChart> {
    const endpoint = `/collections/${this.config.collectionId}/items/${chartId}`;
    return await this.request(endpoint, {
      method: 'PATCH',
      body: JSON.stringify({
        fieldData: data,
        live: data['is-published']
      }),
    });
  }

  // Delete chart
  async deleteChart(chartId: string): Promise<void> {
    const endpoint = `/collections/${this.config.collectionId}/items/${chartId}`;
    await this.request(endpoint, {
      method: 'DELETE',
    });
  }

  // Upload image to Webflow
  async uploadImage(file: File): Promise<{ url: string; alt: string }> {
    // First, get upload URL
    const uploadUrlEndpoint = `/sites/${this.config.siteId}/assets`;
    const uploadUrlResponse = await this.request(uploadUrlEndpoint, {
      method: 'POST',
      body: JSON.stringify({
        fileName: file.name,
        fileSize: file.size,
        contentType: file.type,
      }),
    });

    // Upload file to the provided URL
    const uploadResponse = await fetch(uploadUrlResponse.uploadUrl, {
      method: 'PUT',
      body: file,
      headers: {
        'Content-Type': file.type,
      },
    });

    if (!uploadResponse.ok) {
      throw new Error('Failed to upload image');
    }

    // Get the final asset URL
    const assetResponse = await this.request(`/sites/${this.config.siteId}/assets/${uploadUrlResponse.assetId}`);
    
    return {
      url: assetResponse.url,
      alt: file.name,
    };
  }

  // Publish collection (to make changes live)
  async publishCollection(): Promise<void> {
    const endpoint = `/collections/${this.config.collectionId}/publish`;
    await this.request(endpoint, {
      method: 'POST',
    });
  }
}

export default WebflowAPI; 