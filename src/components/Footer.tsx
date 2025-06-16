
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">SD N 12 KOTOHILALANG</h3>
                <p className="text-green-400 text-sm">Sekolah Dasar Unggulan</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Membangun generasi cerdas, berkarakter, dan berakhlak mulia untuk masa depan yang gemilang. 
              Bergabunglah dengan keluarga besar SD N 12 KOTOHILALANG dan wujudkan impian pendidikan terbaik untuk anak Anda.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-xl flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-xl flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center hover:bg-red-700 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Menu Utama</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-green-400 transition-colors">Beranda</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">Tentang Kami</a></li>
              <li><a href="#facilities" className="text-gray-300 hover:text-green-400 transition-colors">Fasilitas</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-green-400 transition-colors">Galeri</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-green-400 transition-colors">Berita</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Informasi Kontak</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-sm">
                  Jl. Pendidikan No. 12<br />
                  Kotohilalang, Lima Puluh Kota
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">(0752) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@sdn12kotohilalang.sch.id</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SD N 12 KOTOHILALANG. Seluruh hak cipta dilindungi.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Kebijakan Privasi</a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Syarat & Ketentuan</a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
