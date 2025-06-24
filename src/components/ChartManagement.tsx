import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Upload, 
  Calendar,
  Image as ImageIcon,
  Save,
  X
} from 'lucide-react';

interface Chart {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'BTC' | 'ETH' | 'ALT' | 'Futures';
  datePublished: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

interface ChartFormData {
  title: string;
  description: string;
  imageFile: File | null;
  category: 'BTC' | 'ETH' | 'ALT' | 'Futures';
  datePublished: string;
  isPublished: boolean;
}

const ChartManagement = () => {
  const [charts, setCharts] = useState<Chart[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedChart, setSelectedChart] = useState<Chart | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<ChartFormData>({
    title: '',
    description: '',
    imageFile: null,
    category: 'BTC',
    datePublished: new Date().toISOString().split('T')[0],
    isPublished: false
  });

  // Webflow CMS Configuration
  const WEBFLOW_CONFIG = {
    siteId: 'YOUR_WEBFLOW_SITE_ID',
    collectionId: 'YOUR_COLLECTION_ID',
    apiToken: 'YOUR_WEBFLOW_API_TOKEN'
  };

  // Fetch charts from Webflow CMS
  const fetchCharts = async () => {
    try {
      setIsLoading(true);
      // Mock data for demo
      const mockCharts: Chart[] = [
        {
          id: '1',
          title: 'Bitcoin Breakout Analysis',
          description: 'BTC showing strong bullish momentum with key resistance levels identified.',
          imageUrl: '/placeholder.svg',
          category: 'BTC',
          datePublished: '2024-01-15',
          isPublished: true,
          createdAt: '2024-01-15T10:00:00Z',
          updatedAt: '2024-01-15T10:00:00Z'
        },
        {
          id: '2',
          title: 'Ethereum Support Levels',
          description: 'ETH finding support at key levels with potential reversal signals.',
          imageUrl: '/placeholder.svg',
          category: 'ETH',
          datePublished: '2024-01-14',
          isPublished: true,
          createdAt: '2024-01-14T10:00:00Z',
          updatedAt: '2024-01-14T10:00:00Z'
        }
      ];
      setCharts(mockCharts);
    } catch (error) {
      console.error('Error fetching charts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Upload image to Webflow
  const uploadImage = async (file: File): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('/placeholder.svg');
      }, 1000);
    });
  };

  // Create new chart
  const createChart = async () => {
    try {
      setIsUploading(true);
      
      let imageUrl = '';
      if (formData.imageFile) {
        imageUrl = await uploadImage(formData.imageFile);
      }

      const newChart: Chart = {
        id: Date.now().toString(),
        title: formData.title,
        description: formData.description,
        imageUrl,
        category: formData.category,
        datePublished: formData.datePublished,
        isPublished: formData.isPublished,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      setCharts(prev => [newChart, ...prev]);
      resetForm();
      setIsEditModalOpen(false);
    } catch (error) {
      console.error('Error creating chart:', error);
    } finally {
      setIsUploading(false);
    }
  };

  // Update existing chart
  const updateChart = async () => {
    if (!selectedChart) return;

    try {
      setIsUploading(true);
      
      let imageUrl = selectedChart.imageUrl;
      if (formData.imageFile) {
        imageUrl = await uploadImage(formData.imageFile);
      }

      const updatedChart: Chart = {
        ...selectedChart,
        title: formData.title,
        description: formData.description,
        imageUrl,
        category: formData.category,
        datePublished: formData.datePublished,
        isPublished: formData.isPublished,
        updatedAt: new Date().toISOString()
      };

      setCharts(prev => prev.map(chart => 
        chart.id === selectedChart.id ? updatedChart : chart
      ));
      resetForm();
      setIsEditModalOpen(false);
      setSelectedChart(null);
    } catch (error) {
      console.error('Error updating chart:', error);
    } finally {
      setIsUploading(false);
    }
  };

  // Delete chart
  const deleteChart = async (chartId: string) => {
    try {
      setCharts(prev => prev.filter(chart => chart.id !== chartId));
      setIsDeleteModalOpen(false);
      setSelectedChart(null);
    } catch (error) {
      console.error('Error deleting chart:', error);
    }
  };

  // Handle image upload
  const handleImageUpload = (file: File) => {
    if (file.size > 3 * 1024 * 1024) {
      alert('Image size must be less than 3MB');
      return;
    }

    setFormData(prev => ({ ...prev, imageFile: file }));
    
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      imageFile: null,
      category: 'BTC',
      datePublished: new Date().toISOString().split('T')[0],
      isPublished: false
    });
    setImagePreview(null);
  };

  // Open edit modal
  const openEditModal = (chart: Chart) => {
    setSelectedChart(chart);
    setFormData({
      title: chart.title,
      description: chart.description,
      imageFile: null,
      category: chart.category,
      datePublished: chart.datePublished,
      isPublished: chart.isPublished
    });
    setImagePreview(chart.imageUrl);
    setIsEditModalOpen(true);
  };

  // Open delete modal
  const openDeleteModal = (chart: Chart) => {
    setSelectedChart(chart);
    setIsDeleteModalOpen(true);
  };

  useEffect(() => {
    fetchCharts();
  }, []);

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
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white font-general">Chart Management</h2>
          <p className="text-white/70">Upload and manage trading charts</p>
        </div>
        <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#73E212] text-black hover:bg-[#73E212]/90">
              <Plus className="w-4 h-4 mr-2" />
              Add New Chart
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#100F1A] border-[#73E212]/20 max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-white font-general">
                {selectedChart ? 'Edit Chart' : 'Add New Chart'}
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6">
              {/* Title */}
              <div>
                <Label htmlFor="title" className="text-white">Chart Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="bg-[#131240] border-[#73E212]/30 text-white focus:border-[#73E212]"
                  placeholder="Enter chart title"
                />
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description" className="text-white">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="bg-[#131240] border-[#73E212]/30 text-white focus:border-[#73E212] min-h-[100px]"
                  placeholder="Enter chart description"
                />
              </div>

              {/* Image Upload */}
              <div>
                <Label className="text-white">Chart Image</Label>
                <div className="mt-2">
                  {imagePreview ? (
                    <div className="relative">
                      <img 
                        src={imagePreview} 
                        alt="Preview" 
                        className="w-full h-48 object-cover rounded-lg border border-[#73E212]/30"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setImagePreview(null);
                          setFormData(prev => ({ ...prev, imageFile: null }));
                        }}
                        className="absolute top-2 right-2 bg-[#100F1A]/80 border-[#73E212]/30 text-[#73E212] hover:bg-[#73E212]/10"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-[#73E212]/30 rounded-lg p-8 text-center">
                      <Upload className="w-8 h-8 text-[#73E212]/60 mx-auto mb-4" />
                      <p className="text-white mb-2">Upload chart image</p>
                      <p className="text-sm text-white/60 mb-4">PNG, JPG, WebP up to 3MB</p>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload(file);
                        }}
                        className="hidden"
                        id="image-upload"
                      />
                      <Label htmlFor="image-upload" className="cursor-pointer">
                        <Button type="button" variant="outline" className="border-[#73E212]/30 text-[#73E212] hover:bg-[#73E212]/10">
                          Choose File
                        </Button>
                      </Label>
                    </div>
                  )}
                </div>
              </div>

              {/* Category and Date */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category" className="text-white">Category</Label>
                  <Select 
                    value={formData.category} 
                    onValueChange={(value: 'BTC' | 'ETH' | 'ALT' | 'Futures') => 
                      setFormData(prev => ({ ...prev, category: value }))
                    }
                  >
                    <SelectTrigger className="bg-[#131240] border-[#73E212]/30 text-white focus:border-[#73E212]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#100F1A] border-[#73E212]/30">
                      <SelectItem value="BTC">Bitcoin (BTC)</SelectItem>
                      <SelectItem value="ETH">Ethereum (ETH)</SelectItem>
                      <SelectItem value="ALT">Altcoins (ALT)</SelectItem>
                      <SelectItem value="Futures">Futures</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="date" className="text-white">Date Published</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.datePublished}
                    onChange={(e) => setFormData(prev => ({ ...prev, datePublished: e.target.value }))}
                    className="bg-[#131240] border-[#73E212]/30 text-white focus:border-[#73E212]"
                  />
                </div>
              </div>

              {/* Visibility Toggle */}
              <div className="flex items-center space-x-2">
                <Switch
                  checked={formData.isPublished}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isPublished: checked }))}
                  className="data-[state=checked]:bg-[#73E212]"
                />
                <Label className="text-white">Published</Label>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-3 pt-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsEditModalOpen(false);
                    resetForm();
                    setSelectedChart(null);
                  }}
                  className="border-[#73E212]/30 text-[#73E212] hover:bg-[#73E212]/10"
                >
                  Cancel
                </Button>
                <Button
                  onClick={selectedChart ? updateChart : createChart}
                  disabled={isUploading || !formData.title || !formData.description}
                  className="bg-[#73E212] text-black hover:bg-[#73E212]/90 disabled:opacity-50"
                >
                  {isUploading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"></div>
                  ) : (
                    <Save className="w-4 h-4 mr-2" />
                  )}
                  {selectedChart ? 'Update Chart' : 'Create Chart'}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {charts.map((chart) => (
          <Card key={chart.id} className="bg-[#100F1A] border-[#73E212]/20 hover:border-[#73E212]/40 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge 
                  variant={chart.isPublished ? "default" : "secondary"}
                  className={chart.isPublished ? "bg-[#73E212] text-black" : "bg-[#73E212]/20 text-[#73E212]"}
                >
                  {chart.isPublished ? 'Published' : 'Draft'}
                </Badge>
                <div className="flex items-center space-x-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => openEditModal(chart)}
                    className="text-white hover:text-[#73E212] hover:bg-[#73E212]/10"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => openDeleteModal(chart)}
                    className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-3">
              <div className="aspect-video bg-[#131240]/20 rounded-lg overflow-hidden">
                <img 
                  src={chart.imageUrl} 
                  alt={chart.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-1 line-clamp-2">{chart.title}</h3>
                <p className="text-sm text-white/70 line-clamp-2">{chart.description}</p>
              </div>
              
              <div className="flex items-center justify-between text-xs text-white/60">
                <span className="bg-[#73E212]/10 px-2 py-1 rounded">{chart.category}</span>
                <span className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {new Date(chart.datePublished).toLocaleDateString()}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
        <DialogContent className="bg-[#100F1A] border-[#73E212]/20">
          <DialogHeader>
            <DialogTitle className="text-white font-general">Delete Chart</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <p className="text-white/80">
              Are you sure you want to delete "{selectedChart?.title}"? This action cannot be undone.
            </p>
            
            <div className="flex justify-end space-x-3">
              <Button
                variant="outline"
                onClick={() => setIsDeleteModalOpen(false)}
                className="border-[#73E212]/30 text-[#73E212] hover:bg-[#73E212]/10"
              >
                Cancel
              </Button>
              <Button
                onClick={() => selectedChart && deleteChart(selectedChart.id)}
                className="bg-red-500 text-white hover:bg-red-600"
              >
                Delete Chart
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {charts.length === 0 && (
        <div className="text-center py-12">
          <ImageIcon className="w-12 h-12 text-[#73E212]/40 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">No charts yet</h3>
          <p className="text-white/70 mb-4">Start by adding your first trading chart</p>
          <Button 
            onClick={() => setIsEditModalOpen(true)}
            className="bg-[#73E212] text-black hover:bg-[#73E212]/90"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add First Chart
          </Button>
        </div>
      )}
    </div>
  );
};

export default ChartManagement; 