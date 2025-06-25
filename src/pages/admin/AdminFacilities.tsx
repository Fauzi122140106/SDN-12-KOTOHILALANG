/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import { Plus, Edit, Trash2, Image } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AdminFacilities = () => {
  const [facilities, setFacilities] = useState([
    {
      id: 1,
      title: "Perpustakaan Digital",
      description: "Koleksi buku fisik dan digital yang lengkap dengan ruang baca modern dan nyaman",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      slug: "perpustakaan",
      status: "active"
    },
    {
      id: 2,
      title: "Lab Komputer",
      description: "Laboratorium komputer dengan teknologi terkini untuk pembelajaran digital",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      slug: "komputer",
      status: "active"
    },
    {
      id: 3,
      title: "Lab IPA",
      description: "Fasilitas praktikum sains lengkap untuk eksperimen dan penelitian siswa",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop",
      slug: "ipa",
      status: "active"
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingFacility, setEditingFacility] = useState(null);

  const handleEdit = (facility: any) => {
    setEditingFacility(facility);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus fasilitas ini?')) {
      setFacilities(facilities.filter(f => f.id !== id));
    }
  };

  const FacilityForm = () => (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>{editingFacility ? 'Edit Fasilitas' : 'Tambah Fasilitas Baru'}</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Judul Fasilitas</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Masukkan judul fasilitas"
              defaultValue={editingFacility?.title || ''}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Deskripsi</label>
            <textarea
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Masukkan deskripsi fasilitas"
              defaultValue={editingFacility?.description || ''}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">URL Gambar</label>
            <input
              type="url"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="https://example.com/image.jpg"
              defaultValue={editingFacility?.image || ''}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Slug</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="perpustakaan"
              defaultValue={editingFacility?.slug || ''}
            />
          </div>
          <div className="flex gap-2">
            <Button type="button" className="bg-green-600 hover:bg-green-700">
              {editingFacility ? 'Update Fasilitas' : 'Tambah Fasilitas'}
            </Button>
            <Button 
              type="button" 
              variant="outline"
              onClick={() => {
                setShowForm(false);
                setEditingFacility(null);
              }}
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
          <h1 className="text-3xl font-bold text-gray-900">Kelola Fasilitas</h1>
          <p className="text-gray-600">Tambah, edit, atau hapus fasilitas sekolah</p>
        </div>
        <Button 
          onClick={() => setShowForm(true)}
          className="bg-green-600 hover:bg-green-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Tambah Fasilitas
        </Button>
      </div>

      {showForm && <FacilityForm />}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities.map((facility) => (
          <Card key={facility.id}>
            <div className="relative">
              <img 
                src={facility.image} 
                alt={facility.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="absolute top-2 right-2">
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                  Aktif
                </span>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2">{facility.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{facility.description}</p>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleEdit(facility)}
                >
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleDelete(facility.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Hapus
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminFacilities;
