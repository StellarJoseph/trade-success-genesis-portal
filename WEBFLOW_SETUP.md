# Webflow CMS Integration Setup Guide

## Overview
This guide will help you set up the Webflow CMS integration for the Chart Management system.

## Prerequisites
- Webflow account with a published site
- Webflow API access (requires paid plan)
- Your site ID and collection ID

## Step 1: Create Webflow Collection

### 1.1 Create a new Collection
1. Go to your Webflow Designer
2. Navigate to CMS → Collections
3. Click "Create Collection"
4. Name it "Trading Charts"

### 1.2 Add Collection Fields
Create the following fields in your collection:

| Field Name | Field Type | Required | Description |
|------------|------------|----------|-------------|
| Chart Title | Plain Text | Yes | The title of the chart |
| Chart Description | Rich Text | Yes | Detailed description of the chart |
| Chart Image | Image | Yes | The chart image file |
| Chart Category | Single Select | Yes | Options: BTC, ETH, ALT, Futures |
| Date Published | Date | Yes | Publication date |
| Is Published | Toggle | Yes | Whether the chart is live |

### 1.3 Collection Settings
- Set "Chart Title" as the Name field
- Enable "Allow multiple items"
- Set appropriate permissions

## Step 2: Get API Credentials

### 2.1 Get Site ID
1. Go to your Webflow site settings
2. Copy the Site ID from the URL or settings page

### 2.2 Get Collection ID
1. Go to your collection in the CMS
2. Copy the Collection ID from the URL

### 2.3 Generate API Token
1. Go to Webflow → Account Settings → Workspace Settings
2. Navigate to Integrations → API Access
3. Generate a new API token
4. Copy the token (keep it secure!)

## Step 3: Configure the Application

### 3.1 Update Configuration
Edit `src/lib/webflow-api.ts` and update the configuration:

```typescript
const WEBFLOW_CONFIG = {
  siteId: 'YOUR_SITE_ID_HERE',
  collectionId: 'YOUR_COLLECTION_ID_HERE',
  apiToken: 'YOUR_API_TOKEN_HERE'
};
```

### 3.2 Environment Variables (Recommended)
Create a `.env` file in your project root:

```env
VITE_WEBFLOW_SITE_ID=your_site_id_here
VITE_WEBFLOW_COLLECTION_ID=your_collection_id_here
VITE_WEBFLOW_API_TOKEN=your_api_token_here
```

Then update the configuration:

```typescript
const WEBFLOW_CONFIG = {
  siteId: import.meta.env.VITE_WEBFLOW_SITE_ID,
  collectionId: import.meta.env.VITE_WEBFLOW_COLLECTION_ID,
  apiToken: import.meta.env.VITE_WEBFLOW_API_TOKEN
};
```

## Step 4: Test the Integration

### 4.1 Test API Connection
1. Go to your Admin Dashboard
2. Navigate to Chart Management
3. Try to fetch existing charts
4. Check browser console for any errors

### 4.2 Test Chart Creation
1. Click "Add New Chart"
2. Fill in the form with test data
3. Upload an image
4. Save the chart
5. Verify it appears in your Webflow CMS

## Step 5: Frontend Integration

### 5.1 Add Chart Gallery to User Pages
Import and use the ChartGallery component:

```typescript
import ChartGallery from '@/components/ChartGallery';

// In your page component
<ChartGallery />
```

### 5.2 Add to Dashboard
Add a charts tab to your user dashboard:

```typescript
// In Dashboard.tsx
<TabsTrigger value="charts">Trading Charts</TabsTrigger>

// In the content area
<TabsContent value="charts">
  <ChartGallery />
</TabsContent>
```

## Step 6: Advanced Features

### 6.1 Real-time Updates
For real-time updates, consider using Webflow's webhooks:

1. Set up webhooks in Webflow
2. Create an endpoint in your app to receive updates
3. Update the frontend when changes occur

### 6.2 Image Optimization
Webflow automatically optimizes images, but you can:

1. Set image quality preferences in Webflow
2. Use responsive images
3. Implement lazy loading

### 6.3 Caching
Implement caching for better performance:

```typescript
// Example with React Query
import { useQuery } from '@tanstack/react-query';

const useCharts = () => {
  return useQuery({
    queryKey: ['charts'],
    queryFn: fetchCharts,
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });
};
```

## Troubleshooting

### Common Issues

1. **API Token Invalid**
   - Check if the token is correct
   - Ensure the token has proper permissions
   - Regenerate the token if needed

2. **Collection Not Found**
   - Verify the collection ID
   - Ensure the collection is published
   - Check collection permissions

3. **Image Upload Fails**
   - Check file size (max 3MB)
   - Verify file format (PNG, JPG, WebP)
   - Ensure API has upload permissions

4. **CORS Issues**
   - Webflow API doesn't support CORS for client-side requests
   - Use a backend proxy or server-side rendering

### Error Handling
The API service includes error handling, but you can enhance it:

```typescript
try {
  const charts = await webflowAPI.getCharts();
} catch (error) {
  console.error('Failed to fetch charts:', error);
  // Show user-friendly error message
}
```

## Security Considerations

1. **API Token Security**
   - Never expose API tokens in client-side code
   - Use environment variables
   - Consider using a backend proxy

2. **Input Validation**
   - Validate all user inputs
   - Sanitize rich text content
   - Check file uploads

3. **Rate Limiting**
   - Implement rate limiting for API calls
   - Cache responses when possible
   - Monitor API usage

## Performance Optimization

1. **Image Optimization**
   - Use Webflow's CDN
   - Implement lazy loading
   - Use appropriate image sizes

2. **Caching Strategy**
   - Cache chart data
   - Use service workers for offline access
   - Implement incremental updates

3. **Code Splitting**
   - Lazy load chart components
   - Split admin and user features
   - Optimize bundle size

## Support

For additional help:
- Webflow API Documentation: https://developers.webflow.com/
- Webflow Support: https://webflow.com/support
- Project Issues: Create an issue in the repository

## Next Steps

1. Set up webhooks for real-time updates
2. Implement advanced filtering and search
3. Add analytics and tracking
4. Create chart templates
5. Implement user permissions and roles 