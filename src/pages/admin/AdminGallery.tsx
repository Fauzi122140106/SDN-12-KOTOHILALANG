
import { useState } from "react";
import { Plus, Edit, Trash2, Upload } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AdminGallery = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      title: "Lomba Matematika Tingkat Kabupaten",
      category: "Prestasi",
      description: "Siswa kelas 5 meraih juara 1 lomba matematika",
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
      uploadDate: "2024-01-15"
    },
    {
      id: 2,
      title: "Pembelajaran Digital",
      category: "Pembelajaran",
      description: "Implementasi teknologi dalam proses belajar mengajar",
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      uploadDate: "2024-01-14"
    },
    {
      id: 3,
      title: "Peringatan Hari Kartini",
      category: "Kegiatan",
      description: "Siswa menampilkan tarian tradisional",
      src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=400&h=300&fit=crop",
      uploadDate: "2024-01-13"
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["Semua", "Kegiatan", "Prestasi", "Pembelajaran"];

  const filteredImages = selectedCategory === "all" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const handleDelete = (id: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus foto ini?')) {
      setImages(images.filter(img => img.id !== id));
    }
  };

  const UploadForm = () => (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Upload Foto Baru</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Upload Foto</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-sm text-gray-600">
                Klik untuk upload atau drag & drop
              </p>
              <p className="text-xs text-gray-500">PNG, JPG, GIF hingga 10MB</p>
              <input type="file" className="hidden" accept="image/*" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Judul Foto</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Masukkan judul foto"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Kategori</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option value="">Pilih Kategori</option>
              <option value="Kegiatan">Kegiatan</option>
              <option value="Prestasi">Prestasi</option>
              <option value="Pembelajaran">Pembelajaran</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Deskripsi</label>
            <textarea
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Masukkan deskripsi foto"
            />
          </div>
          <div className="flex gap-2">
            <Button type="button" className="bg-green-600 hover:bg-green-700">
              Upload Foto
            </Button>
            <Button 
              type="button" 
              variant="outline"
              onClick={() => setShowForm(false)}
            >
              Batal
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Kelola Galeri</h1>
          <p className="text-gray-600">Upload dan kelola foto kegiatan sekolah</p>
        </div>
        <Button 
          onClick={() => setShowForm(true)}
          className="bg-green-600 hover:bg-green-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Upload Foto
        </Button>
      </div>

      {showForm && <UploadForm />}

      {/* Category Filter */}
      <div className="flex gap-2 flex-wrap">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category.toLowerCase() || (category === "Semua" && selectedCategory === "all") ? "default" : "outline"}
            onClick={() => setSelectedCategory(category === "Semua" ? "all" : category)}
            size="sm"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredImages.map((image) => (
          <Card key={image.id}>
            <div className="relative">
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="absolute top-2 left-2">
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                  {image.category}
                </span>
              </div>
              <div className="absolute top-2 right-2 flex gap-1">
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                  onClick={() => handleDelete(image.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-1">{image.title}</h3>
              <p className="text-gray-600 text-sm mb-2 line-clamp-2">{image.description}</p>
              <p className="text-xs text-gray-500">
                {new Date(image.uploadDate).toLocaleDateString('id-ID')}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminGallery;
