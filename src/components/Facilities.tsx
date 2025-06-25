import { useGetFacilities } from "@/service/usefacilities";
import {
  Book,
  Computer,
  Microscope,
  Trophy,
  Music,
  Palette,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Facilities = () => {
  const navigate = useNavigate();

  const { data: Facility } = useGetFacilities();
  const facilitiesData = Facility?.data || [];

  const handleFacilityClick = (slug: string) => {
    navigate(`/facility/${slug}`);
  };

  return (
    <section
      id="facilities"
      className="py-20 bg-gradient-to-br from-gray-50 to-green-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            Fasilitas Unggulan
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Fasilitas <span className="text-green-600">Modern & Lengkap</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mendukung proses pembelajaran optimal dengan fasilitas berstandar
            internasional
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {facilitiesData?.map((facility, index) => {
            return (
              <div
                key={index}
                onClick={() => handleFacilityClick(facility.slug)}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={facility.images}
                    alt={facility.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    
                  />
                  <div className="absolute top-4 left-4">
                    {/* <div className="w-12 h-12 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-green-600" />
                    </div> */}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{facility.title}</h3>
                  <p className="text-gray-600 mb-4">{facility.description}</p>
                  <div className="text-green-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Pelajari Lebih Lanjut
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-green-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Kunjungi Fasilitas Kami Secara Langsung
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Hubungi kami untuk informasi lebih lanjut tentang fasilitas
            pendidikan terbaik kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/school-tour")}
              className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
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
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
