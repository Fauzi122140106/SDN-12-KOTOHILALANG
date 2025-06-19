
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Book, Computer, Microscope, Trophy, Music, Palette } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FacilityDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const facilities = {
    perpustakaan: {
      icon: Book,
      title: "Perpustakaan Digital",
      description: "Koleksi buku fisik dan digital yang lengkap dengan ruang baca modern dan nyaman",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
      details: [
        "Koleksi lebih dari 5.000 buku fisik",
        "Akses digital library dengan ribuan e-book",
        "Ruang baca ber-AC dengan 50 tempat duduk",
        "Fasilitas komputer untuk research",
        "Sistem peminjaman digital",
        "Program reading club mingguan"
      ]
    },
    komputer: {
      icon: Computer,
      title: "Lab Komputer",
      description: "Laboratorium komputer dengan teknologi terkini untuk pembelajaran digital",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      details: [
        "30 unit komputer terbaru",
        "Jaringan internet berkecepatan tinggi",
        "Software pembelajaran interaktif",
        "Projector dan smart board",
        "Kelas coding dan programming",
        "Sertifikasi komputer dasar"
      ]
    },
    ipa: {
      icon: Microscope,
      title: "Lab IPA",
      description: "Fasilitas praktikum sains lengkap untuk eksperimen dan penelitian siswa",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
      details: [
        "Peralatan laboratorium lengkap",
        "Mikroskop digital modern",
        "Kit eksperimen fisika dan kimia",
        "Ruang praktikum yang aman",
        "Panduan eksperimen terintegrasi",
        "Kompetisi sains tahunan"
      ]
    },
    olahraga: {
      icon: Trophy,
      title: "Lapangan Olahraga",
      description: "Area olahraga lengkap untuk berbagai cabang olahraga dan aktivitas fisik",
      image: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&h=600&fit=crop",
      details: [
        "Lapangan basket outdoor",
        "Lapangan voli indoor",
        "Area atletik dan lari",
        "Peralatan olahraga lengkap",
        "Ruang ganti terpisah",
        "Program ekstrakurikuler olahraga"
      ]
    },
    musik: {
      icon: Music,
      title: "Studio Musik",
      description: "Ruang musik dengan instrumen lengkap untuk mengembangkan bakat seni siswa",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      details: [
        "Piano akustik dan digital",
        "Drum set lengkap",
        "Gitar akustik dan elektrik",
        "Sistem sound recording",
        "Ruang kedap suara",
        "Pertunjukan musik bulanan"
      ]
    },
    seni: {
      icon: Palette,
      title: "Studio Seni",
      description: "Ruang kreativitas untuk mengasah kemampuan seni rupa dan kerajinan tangan",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
      details: [
        "Meja gambar dan melukis",
        "Peralatan seni lengkap",
        "Kiln untuk keramik",
        "Area craft dan kerajinan",
        "Galeri karya siswa",
        "Workshop seni rutin"
      ]
    }
  };

  const facility = facilities[id as keyof typeof facilities];

  if (!facility) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Fasilitas tidak ditemukan</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-green-600 text-white px-6 py-2 rounded-lg"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = facility.icon;

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-16">
        {/* Hero Section */}
        <div className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${facility.image})` }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <button 
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-white mb-6 hover:text-green-300 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Kembali ke Beranda
              </button>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/90 rounded-xl flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white">{facility.title}</h1>
                  <p className="text-xl text-white/90 mt-2">{facility.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Detail Fasilitas</h2>
                <div className="space-y-4">
                  {facility.details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Tertarik dengan fasilitas ini?</h3>
                <p className="text-gray-600 mb-6">
                  Hubungi kami untuk informasi lebih lanjut tentang fasilitas pembelajaran terbaik di SD Negeri 12 Kotohilalang.
                </p>
                <div className="space-y-4">
                  <button 
                    onClick={() => navigate('/school-tour')}
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Daftar Tour Sekolah
                  </button>
                  <button 
                    onClick={() => {
                      const contactElement = document.querySelector('#contact');
                      if (contactElement) {
                        contactElement.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full border-2 border-green-600 text-green-600 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                  >
                    Hubungi Kami
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FacilityDetail;
