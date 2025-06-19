import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, User, Eye, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useGetNews } from "@/service/useNews";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const { data: News } = useGetNews();
  const newsData = News?.data || [];

  const categories = [
    "Semua",
    "Akademik",
    "Kegiatan",
    "Prestasi",
    "Pengumuman",
  ];

  // const blogPosts = [
  //   {
  //     id: 1,
  //     title:
  //       "Prestasi Siswa SD N 12 KOTOHILALANG dalam Lomba Matematika Tingkat Kabupaten",
  //     excerpt:
  //       "Para siswa kelas 5 berhasil meraih juara dalam kompetisi matematika yang diselenggarakan oleh Dinas Pendidikan...",
  //     image:
  //       "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=250&fit=crop",
  //     category: "Prestasi",
  //     author: "Tim Redaksi",
  //     date: "15 Juni 2024",
  //     views: 245,
  //     featured: true,
  //   },
  //   {
  //     id: 2,
  //     title: "Kegiatan Belajar Mengajar Berbasis Digital di Era Modern",
  //     excerpt:
  //       "Implementasi teknologi dalam pembelajaran untuk meningkatkan kualitas pendidikan dan minat belajar siswa...",
  //     image:
  //       "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
  //     category: "Akademik",
  //     author: "Kepala Sekolah",
  //     date: "12 Juni 2024",
  //     views: 189,
  //     featured: false,
  //   },
  //   {
  //     id: 3,
  //     title: "Peringatan Hari Kartini dengan Penampilan Budaya Tradisional",
  //     excerpt:
  //       "Siswa-siswi menampilkan berbagai tarian dan lagu daerah dalam rangka memperingati Hari Kartini...",
  //     image:
  //       "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=400&h=250&fit=crop",
  //     category: "Kegiatan",
  //     author: "Guru Seni Budaya",
  //     date: "21 April 2024",
  //     views: 312,
  //     featured: false,
  //   },
  //   {
  //     id: 4,
  //     title: "Pengumuman Pendaftaran Siswa Baru Tahun Ajaran 2024/2025",
  //     excerpt:
  //       "Pembukaan pendaftaran siswa baru dengan berbagai program unggulan dan fasilitas modern...",
  //     image:
  //       "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=250&fit=crop",
  //     category: "Pengumuman",
  //     author: "Panitia PSB",
  //     date: "1 Mei 2024",
  //     views: 456,
  //     featured: true,
  //   },
  //   {
  //     id: 5,
  //     title: "Workshop Parenting untuk Orang Tua Siswa",
  //     excerpt:
  //       "Kegiatan edukasi bagi orang tua dalam mendampingi perkembangan akademik dan karakter anak...",
  //     image:
  //       "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&h=250&fit=crop",
  //     category: "Kegiatan",
  //     author: "Tim BK",
  //     date: "8 Juni 2024",
  //     views: 167,
  //     featured: false,
  //   },
  //   {
  //     id: 6,
  //     title: "Program Literasi Digital untuk Siswa Kelas 4-6",
  //     excerpt:
  //       "Pengenalan teknologi dan internet yang aman untuk siswa dengan bimbingan guru yang kompeten...",
  //     image:
  //       "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
  //     category: "Akademik",
  //     author: "Guru TIK",
  //     date: "5 Juni 2024",
  //     views: 203,
  //     featured: false,
  //   },
  // ];

  const filteredPosts =
    selectedCategory === "Semua"
      ? newsData
      : newsData.filter((post) => post.category === selectedCategory);

  const featuredPosts = newsData?.filter((post) => post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Berita & Kegiatan Sekolah
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Ikuti perkembangan terbaru, prestasi, dan kegiatan menarik di SD N
            12 KOTOHILALANG
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "Semua" && featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Berita Utama
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="px-3 py-1 bg-green-600 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center space-x-1 text-sm">
                          <Eye className="w-4 h-4" />
                          <span>{post.views}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-green-300 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-200 text-sm mb-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            {selectedCategory === "Semua"
              ? "Berita Terbaru"
              : `Kategori: ${selectedCategory}`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
