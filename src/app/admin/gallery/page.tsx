'use client';

import { useEffect, useState } from 'react';
import imageCompression from 'browser-image-compression';
import { Check, Edit, ImagePlus, Loader, Save, Trash2, Upload, X } from 'lucide-react';

interface GalleryItem {
  id: string;
  category: string;
  procedure: string;
  before: string;
  after: string;
  timeline: string;
  grafts: string;
  featured: boolean;
  created_at: string;
}

const emptyForm = {
  category: 'fue',
  procedure: '',
  before: '',
  after: '',
  timeline: '',
  grafts: '',
  featured: true,
};

const categories = [
  { value: 'fue', label: 'FUE Hair Transplant' },
  { value: 'fut', label: 'FUT Hair Transplant' },
  { value: 'prp', label: 'PRP Treatment' },
  { value: 'dhi', label: 'DHI Method' },
  { value: 'beard', label: 'Beard Transplant' },
  { value: 'eyebrow', label: 'Eyebrow Transplant' },
  { value: 'female', label: 'Female Hair Loss' },
];

export default function AdminGalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [formData, setFormData] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState<'before' | 'after' | null>(null);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/gallery');
      const data = await response.json();

      if (data.success) {
        setItems(data.items || []);
      }
    } catch (error) {
      console.error('Error loading gallery:', error);
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async (file: File, field: 'before' | 'after') => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    setUploading(field);

    try {
      const compressedFile = await imageCompression(file, {
        maxSizeMB: 0.35,
        maxWidthOrHeight: 2200,
        useWebWorker: true,
        fileType: 'image/webp',
      });
      const uploadData = new FormData();
      uploadData.append('file', compressedFile, `gallery-${field}-${Date.now()}.webp`);
      uploadData.append('folder', 'kerala-hair-transplant/gallery');

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: uploadData,
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Image upload failed');
      }

      setFormData((current) => ({ ...current, [field]: result.url }));
    } catch (error: any) {
      alert(error.message || 'Image upload failed');
    } finally {
      setUploading(null);
    }
  };

  const resetForm = () => {
    setFormData(emptyForm);
    setEditingId(null);
  };

  const editItem = (item: GalleryItem) => {
    setEditingId(item.id);
    setFormData({
      category: item.category,
      procedure: item.procedure,
      before: item.before,
      after: item.after,
      timeline: item.timeline,
      grafts: item.grafts,
      featured: item.featured,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const saveItem = async () => {
    if (!formData.procedure.trim() || !formData.before || !formData.after) {
      alert('Procedure, before image, and after image are required');
      return;
    }

    setSaving(true);

    try {
      const response = await fetch(editingId ? `/api/gallery/${editingId}` : '/api/gallery', {
        method: editingId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to save gallery item');
      }

      resetForm();
      await fetchGallery();
      alert(editingId ? 'Gallery item updated' : 'Gallery item added');
    } catch (error: any) {
      alert(error.message || 'Failed to save gallery item');
    } finally {
      setSaving(false);
    }
  };

  const deleteItem = async (item: GalleryItem) => {
    if (!confirm(`Delete "${item.procedure}" from the gallery?`)) {
      return;
    }

    const response = await fetch(`/api/gallery/${item.id}`, { method: 'DELETE' });
    const result = await response.json();

    if (result.success) {
      await fetchGallery();
    } else {
      alert(result.error || 'Failed to delete gallery item');
    }
  };

  const imageUploadControl = (field: 'before' | 'after', label: string) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
        {formData[field] ? (
          <img src={formData[field]} alt={label} className="w-full h-48 object-cover" />
        ) : (
          <div className="h-48 flex items-center justify-center text-gray-500">
            <ImagePlus size={32} />
          </div>
        )}
        <div className="p-3 flex gap-2">
          <label className="btn-primary inline-flex items-center gap-2 cursor-pointer text-sm">
            {uploading === field ? <Loader className="animate-spin" size={16} /> : <Upload size={16} />}
            Upload
            <input
              type="file"
              accept="image/*"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (file) uploadImage(file, field);
              }}
              className="hidden"
            />
          </label>
          <input
            type="url"
            value={formData[field]}
            onChange={(event) => setFormData({ ...formData, [field]: event.target.value })}
            placeholder="Or paste image URL"
            className="min-w-0 flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-600"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gallery</h1>
          <p className="text-gray-600 mt-1">Manage before and after treatment results.</p>
        </div>
        {editingId && (
          <button onClick={resetForm} className="px-4 py-2 rounded-lg bg-gray-200 text-gray-900 inline-flex items-center gap-2 w-fit">
            <X size={18} />
            Cancel Edit
          </button>
        )}
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
        <div className="flex items-center gap-2">
          {editingId ? <Edit size={22} className="text-primary-600" /> : <ImagePlus size={22} className="text-primary-600" />}
          <h2 className="text-xl font-bold text-gray-900">{editingId ? 'Edit Gallery Result' : 'Add Gallery Result'}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {imageUploadControl('before', 'Before Image')}
          {imageUploadControl('after', 'After Image')}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Procedure</label>
            <input
              value={formData.procedure}
              onChange={(event) => setFormData({ ...formData, procedure: event.target.value })}
              placeholder="FUE Hair Transplant - 3500 Grafts"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              value={formData.category}
              onChange={(event) => setFormData({ ...formData, category: event.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>{category.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
            <input
              value={formData.timeline}
              onChange={(event) => setFormData({ ...formData, timeline: event.target.value })}
              placeholder="12 months post-op"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Grafts</label>
            <input
              value={formData.grafts}
              onChange={(event) => setFormData({ ...formData, grafts: event.target.value })}
              placeholder="3500 grafts"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
          </div>
        </div>

        <label className="inline-flex items-center gap-3 text-sm font-medium text-gray-700">
          <input
            type="checkbox"
            checked={formData.featured}
            onChange={(event) => setFormData({ ...formData, featured: event.target.checked })}
            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600"
          />
          Show in homepage carousel
        </label>

        <button
          onClick={saveItem}
          disabled={saving || Boolean(uploading)}
          className="btn-primary inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {saving ? <Loader className="animate-spin" size={18} /> : <Save size={18} />}
          {editingId ? 'Update Result' : 'Add Result'}
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Gallery Results</h2>
          <span className="text-sm text-gray-500">{items.length} items</span>
        </div>

        {loading ? (
          <div className="p-12 text-center">
            <Loader className="animate-spin text-primary-600 mx-auto" size={40} />
          </div>
        ) : items.length === 0 ? (
          <div className="p-12 text-center text-gray-500">No gallery items yet.</div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-0">
            {items.map((item) => (
              <div key={item.id} className="p-6 border-b xl:odd:border-r border-gray-200">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <img src={item.before} alt={`${item.procedure} before`} className="h-36 w-full rounded-lg object-cover bg-gray-100" />
                  <img src={item.after} alt={`${item.procedure} after`} className="h-36 w-full rounded-lg object-cover bg-gray-100" />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-primary-100 text-primary-700">{item.category.toUpperCase()}</span>
                      {item.featured && (
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700 inline-flex items-center gap-1">
                          <Check size={12} />
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-gray-900">{item.procedure}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.timeline} · {item.grafts}</p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button
                      onClick={() => editItem(item)}
                      className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                      title="Edit"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => deleteItem(item)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
