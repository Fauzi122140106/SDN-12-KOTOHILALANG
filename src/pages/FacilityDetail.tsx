import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Book,
  Computer,
  Microscope,
  Trophy,
  Music,
  Palette,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useGetFacilities } from "@/service/usefacilities";

const FacilityDetail = () => {
  const { slug } = useParams();
  const { data: Facility } = useGetFacilities(slug);
  const facility = Facility?.data;
  const navigate = useNavigate();

  if (!facility) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Fasilitas tidak ditemukan</h1>
          <button
            onClick={() => navigate("/")}
            className="bg-green-600 text-white px-6 py-2 rounded-lg"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-16">
        {/* Hero Section */}
        <div
          className="relative h-[400px] bg-cover bg-center"
          style={{ backgroundImage: `url(${facility.image})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 text-white mb-6 hover:text-green-300 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Kembali ke Beranda
              </button>
              <div className="flex items-center gap-4 mb-4">
                {/* <div className="w-16 h-16 bg-white/90 rounded-xl flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-green-600" />
                </div> */}
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white">
                    {facility.title}
                  </h1>
                  <p className="text-xl text-white/90 mt-2">
                    {facility.description}
                  </p>
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
                  {facility.features?.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Tertarik dengan fasilitas ini?
                </h3>
                <p className="text-gray-600 mb-6">
                  Hubungi kami untuk informasi lebih lanjut tentang fasilitas
                  pembelajaran terbaik di SD Negeri 12 Kotohilalang.
                </p>
                <div className="space-y-4">
                  <button
                    onClick={() => navigate("/school-tour")}
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Daftar Tour Sekolah
                  </button>
                  <button
                    onClick={() => {
                      const contactElement = document.querySelector("#contact");
                      if (contactElement) {
                        contactElement.scrollIntoView({ behavior: "smooth" });
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
