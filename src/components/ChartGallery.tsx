import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Filter, 
  Calendar,
  Eye,
  Download,
  Share2
} from 'lucide-react';

interface Chart {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'BTC' | 'ETH' | 'ALT' | 'Futures';
  datePublished: string;
  isPublished: boolean;
}

const ChartGallery = () => {
  const [charts, setCharts] = useState<Chart[]>([]);
  const [filteredCharts, setFilteredCharts] = useState<Chart[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Fetch charts from Webflow CMS
  const fetchCharts = async () => {
    try {
      setIsLoading(true);
      // Mock data for demo - replace with actual Webflow API call
      const mockCharts: Chart[] = [
        {
          id: '1',
          title: 'Bitcoin Breakout Analysis - Key Resistance Levels',
          description: 'BTC showing strong bullish momentum with key resistance levels identified at $45,000 and $48,000.',
          imageUrl: '/placeholder.svg',
          category: 'BTC',
          datePublished: '2024-01-15',
          isPublished: true
        },
        {
          id: '2',
          title: 'Ethereum Support Levels - Reversal Signals',
          description: 'ETH finding strong support at $2,800 with potential reversal signals.',
          imageUrl: '/placeholder.svg',
          category: 'ETH',
          datePublished: '2024-01-14',
          isPublished: true
        }
      ];
      setCharts(mockCharts);
      setFilteredCharts(mockCharts);
    } catch (error) {
      console.error('Error fetching charts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Filter charts based on category and search
  useEffect(() => {
    let filtered = charts.filter(chart => chart.isPublished);
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(chart => chart.category === selectedCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(chart => 
        chart.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        chart.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredCharts(filtered);
  }, [charts, selectedCategory, searchQuery]);

  useEffect(() => {
    fetchCharts();
  }, []);

  const handleDownload = (chart: Chart) => {
    // Create a temporary link to download the image
    const link = document.createElement('a');
    link.href = chart.imageUrl;
    link.download = `${chart.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = (chart: Chart) => {
    if (navigator.share) {
      navigator.share({
        title: chart.title,
        text: chart.description,
        url: window.location.href
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${chart.title}\n${chart.description}\n${window.location.href}`);
      alert('Link copied to clipboard!');
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#73E212]"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
        <div>
          <h2 className="text-3xl font-bold text-white font-general">Trading Charts</h2>
          <p className="text-[#73E212]/70">Expert analysis and market insights</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('grid')}
            className={viewMode === 'grid' ? 'bg-[#73E212] text-black' : 'border-[#73E212]/30 text-[#73E212]'}
          >
            Grid
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('list')}
            className={viewMode === 'list' ? 'bg-[#73E212] text-black' : 'border-[#73E212]/30 text-[#73E212]'}
          >
            List
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#73E212]/60 w-4 h-4" />
            <Input
              placeholder="Search charts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-black/40 border-[#73E212]/30 text-white focus:border-[#73E212]"
            />
          </div>
        </div>
        
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full md:w-48 bg-black/40 border-[#73E212]/30 text-white focus:border-[#73E212]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent className="bg-black border-[#73E212]/30">
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="BTC">Bitcoin (BTC)</SelectItem>
            <SelectItem value="ETH">Ethereum (ETH)</SelectItem>
            <SelectItem value="ALT">Altcoins (ALT)</SelectItem>
            <SelectItem value="Futures">Futures</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-[#73E212]/70">
          Showing {filteredCharts.length} of {charts.filter(c => c.isPublished).length} charts
        </p>
      </div>

      {/* Charts Display */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCharts.map((chart) => (
            <Card key={chart.id} className="bg-black/40 border-[#73E212]/20 hover:border-[#73E212]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#73E212]/10 group">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge className="bg-[#73E212] text-black text-xs">
                    {chart.category}
                  </Badge>
                  <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDownload(chart)}
                      className="text-[#73E212]/80 hover:text-[#73E212] hover:bg-[#73E212]/10"
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleShare(chart)}
                      className="text-[#73E212]/80 hover:text-[#73E212] hover:bg-[#73E212]/10"
                    >
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="aspect-video bg-[#131240]/20 rounded-lg overflow-hidden">
                  <img 
                    src={chart.imageUrl} 
                    alt={chart.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div>
                  <h3 className="font-semibold text-white mb-2 line-clamp-2 group-hover:text-[#73E212] transition-colors">
                    {chart.title}
                  </h3>
                  <p className="text-sm text-[#73E212]/70 line-clamp-3 mb-3">
                    {chart.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between text-xs text-[#73E212]/60">
                  <span className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(chart.datePublished).toLocaleDateString()}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#73E212]/30 text-[#73E212] hover:bg-[#73E212]/10"
                  >
                    <Eye className="w-3 h-3 mr-1" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredCharts.map((chart) => (
            <Card key={chart.id} className="bg-black/40 border-[#73E212]/20 hover:border-[#73E212]/40 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-32 h-24 bg-[#131240]/20 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={chart.imageUrl} 
                      alt={chart.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-white mb-1 group-hover:text-[#73E212] transition-colors">
                          {chart.title}
                        </h3>
                        <p className="text-sm text-[#73E212]/70 line-clamp-2">
                          {chart.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-2 ml-4">
                        <Badge className="bg-[#73E212] text-black text-xs">
                          {chart.category}
                        </Badge>
                        <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDownload(chart)}
                            className="text-[#73E212]/80 hover:text-[#73E212] hover:bg-[#73E212]/10"
                          >
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleShare(chart)}
                            className="text-[#73E212]/80 hover:text-[#73E212] hover:bg-[#73E212]/10"
                          >
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="flex items-center text-xs text-[#73E212]/60">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(chart.datePublished).toLocaleDateString()}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#73E212]/30 text-[#73E212] hover:bg-[#73E212]/10"
                      >
                        <Eye className="w-3 h-3 mr-1" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {filteredCharts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-[#73E212]/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Filter className="w-8 h-8 text-[#73E212]" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">No charts found</h3>
          <p className="text-[#73E212]/70 mb-4">
            Try adjusting your search or filter criteria
          </p>
          <Button 
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="bg-[#73E212] text-black hover:bg-[#73E212]/90"
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default ChartGallery; 