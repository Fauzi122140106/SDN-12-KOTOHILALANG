import { useState } from "react";
import { X, Camera, Award, BookOpen, Users } from "lucide-react";
import { useGetGallery } from "@/service/useGallery";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("Semua");

  const { data: galleryData } = useGetGallery();
  const galleryImages = galleryData?.data.images || [];

  const categories = [
    { name: "Semua", icon: Camera },
    { name: "Kegiatan", icon: Users },
    { name: "Prestasi", icon: Award },
    { name: "Pembelajaran", icon: BookOpen },
  ];

  const filteredImages =
    activeCategory === "Semua"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const achievements = [
    {
      number: "25+",
      label: "Prestasi Akademik",
      color: "text-green-600",
      description: "Penghargaan tingkat kabupaten dan provinsi",
    },
    {
      number: "12+",
      label: "Ekstrakurikuler",
      color: "text-blue-600",
      description: "Program pengembangan bakat siswa",
    },
    {
      number: "50+",
      label: "Kegiatan Tahunan",
      color: "text-purple-600",
      description: "Event pembelajaran dan character building",
    },
    {
      number: "98%",
      label: "Tingkat Kelulusan",
      color: "text-orange-600",
      description: "Siswa melanjutkan ke jenjang SMP",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            Galeri Sekolah
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Momen <span className="text-green-600">Berharga</span> Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dokumentasi kegiatan pembelajaran, prestasi, dan berbagai momen
            berkesan di SD N 12 KOTOHILALANG
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeCategory === category.name
                    ? "bg-green-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 shadow-md"
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-block px-3 py-1 bg-green-600 rounded-full text-xs font-medium mb-2">
                    {image.category}
                  </div>
                  <h4 className="text-lg font-bold mb-1">{image.title}</h4>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <button
                className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}

        {/* Achievements */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Pencapaian Kami
            </h3>
            <p className="text-gray-600">
              Prestasi yang telah diraih SD N 12 KOTOHILALANG
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div
                  className={`text-4xl md:text-5xl font-bold mb-2 ${achievement.color}`}
                >
                  {achievement.number}
                </div>
                <div className="font-semibold text-gray-800 mb-2">
                  {achievement.label}
                </div>
                <div className="text-sm text-gray-600">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
