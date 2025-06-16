
import { Target, Eye, Heart, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            Tentang Kami
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mengapa Memilih{" "}
            <span className="text-green-600">SD N 12 KOTOHILALANG</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami berkomitmen memberikan pendidikan terbaik dengan pendekatan holistik yang mengembangkan karakter, akademik, dan kreativitas siswa
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" 
              alt="Kegiatan Pembelajaran" 
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Tahun Pengalaman</div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">Sekolah Terdepan dalam Inovasi Pendidikan</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                SD N 12 KOTOHILALANG telah menjadi pilihan utama orang tua dalam memberikan pendidikan berkualitas. Dengan kurikulum yang terintegrasi dan fasilitas modern, kami memastikan setiap siswa mendapat pembelajaran terbaik.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Kurikulum nasional dan internasional</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Fasilitas pembelajaran modern dan lengkap</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Program ekstrakurikuler yang beragam</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Pembinaan karakter dan akhlak mulia</span>
              </div>
            </div>

            <button className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>

        {/* Vision Mission Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
            <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Eye className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-gray-800">Visi</h4>
            <p className="text-gray-700 leading-relaxed">
              Menjadi sekolah dasar unggulan yang menghasilkan lulusan cerdas, berkarakter, dan siap menghadapi tantangan global
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
            <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-gray-800">Misi</h4>
            <p className="text-gray-700 leading-relaxed">
              Menyelenggarakan pendidikan berkualitas dengan mengembangkan potensi siswa secara optimal dan menanamkan nilai karakter
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
            <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-gray-800">Nilai</h4>
            <p className="text-gray-700 leading-relaxed">
              Integritas, Inovatif, Inklusif, dan Inspiratif dalam setiap aspek pendidikan dan pembentukan karakter
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
