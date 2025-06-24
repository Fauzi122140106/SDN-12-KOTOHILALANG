/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AdminNews = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Prestasi Membanggakan: Siswa SD N 12 Kotohilalang Raih Juara Olimpiade Sains",
      excerpt: "Tim olimpiade sains SD N 12 Kotohilalang berhasil meraih medali emas dalam kompetisi tingkat provinsi...",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      category: "Prestasi",
      status: "published",
      publishDate: "2024-01-15",
      author: "Admin"
    },
    {
      id: 2,
      title: "Implementasi Pembelajaran Digital di Era Modern",
      excerpt: "SD N 12 Kotohilalang mengadaptasi teknologi terbaru dalam proses pembelajaran untuk meningkatkan kualitas pendidikan...",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      category: "Pendidikan",
      status: "draft",
      publishDate: "2024-01-14",
      author: "Admin"
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);

  const handleEdit = (article: any) => {
    setEditingArticle(article);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus artikel ini?')) {
      setArticles(articles.filter(a => a.id !== id));
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  const getStatusText = (status: string) => {
    return status === 'published' ? 'Dipublikasi' : 'Draft';
  };

  const ArticleForm = () => (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>{editingArticle ? 'Edit Artikel' : 'Tulis Artikel Baru'}</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Judul Artikel</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Masukkan judul artikel"
              defaultValue={editingArticle?.title || ''}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Kategori</label>
            <select 
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              defaultValue={editingArticle?.category || ''}
            >
              <option value="">Pilih Kategori</option>
              <option value="Prestasi">Prestasi</option>
              <option value="Pendidikan">Pendidikan</option>
              <option value="Kegiatan">Kegiatan</option>
              <option value="Pengumuman">Pengumuman</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Ringkasan</label>
            <textarea
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Masukkan ringkasan artikel"
              defaultValue={editingArticle?.excerpt || ''}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Konten Artikel</label>
            <textarea
              rows={10}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Tulis konten artikel di sini..."
              defaultValue={editingArticle?.content || ''}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Status</label>
            <select 
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              defaultValue={editingArticle?.status || 'draft'}
            >
              <option value="draft">Draft</option>
              <option value="published">Publikasi</option>
            </select>
          </div>
          <div className="flex gap-2">
            <Button type="button" className="bg-green-600 hover:bg-green-700">
              {editingArticle ? 'Update Artikel' : 'Simpan Artikel'}
            </Button>
            <Button 
              type="button" 
              variant="outline"
              onClick={() => {
                setShowForm(false);
                setEditingArticle(null);
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
          <h1 className="text-3xl font-bold text-gray-900">Kelola Berita</h1>
          <p className="text-gray-600">Tulis dan kelola artikel berita sekolah</p>
        </div>
        <Button 
          onClick={() => setShowForm(true)}
          className="bg-green-600 hover:bg-green-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Tulis Artikel
        </Button>
      </div>

      {showForm && <ArticleForm />}

      {/* Articles List */}
      <div className="space-y-4">
        {articles.map((article) => (
          <Card key={article.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">{article.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(article.status)}`}>
                      {getStatusText(article.status)}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Kategori: {article.category}</span>
                    <span>•</span>
                    <span>Tanggal: {new Date(article.publishDate).toLocaleDateString('id-ID')}</span>
                    <span>•</span>
                    <span>Penulis: {article.author}</span>
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleEdit(article)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDelete(article.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminNews;
