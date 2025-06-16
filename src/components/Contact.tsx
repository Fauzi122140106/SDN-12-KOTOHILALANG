
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            Hubungi Kami
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mari <span className="text-green-600">Berdiskusi</span> Tentang Masa Depan Anak
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tim kami siap membantu Anda mendapatkan informasi lengkap tentang program pendidikan di SD N 12 KOTOHILALANG
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Alamat Sekolah</h3>
                  <p className="text-gray-600">
                    Jl. Pendidikan No. 12, Kotohilalang<br />
                    Kab. Lima Puluh Kota, Sumatera Barat<br />
                    Indonesia 26271
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Kontak Langsung</h3>
                  <p className="text-gray-600">
                    Telepon: (0752) 123-4567<br />
                    WhatsApp: +62 812-3456-7890<br />
                    Fax: (0752) 123-4568
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">
                    info@sdn12kotohilalang.sch.id<br />
                    kepala@sdn12kotohilalang.sch.id
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Jam Operasional</h3>
                  <p className="text-gray-600">
                    Senin - Jumat: 07:00 - 15:00 WIB<br />
                    Sabtu: 07:00 - 12:00 WIB<br />
                    Minggu: Tutup
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Kirim Pesan kepada Kami</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="Masukkan email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="Masukkan nomor telepon"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subjek
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors">
                      <option>Informasi Pendaftaran</option>
                      <option>Kurikulum</option>
                      <option>Biaya Sekolah</option>
                      <option>Fasilitas</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="Tulis pesan Anda disini..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-green-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map or CTA */}
        <div className="mt-16 bg-green-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Jadwalkan Kunjungan Anda
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Kunjungi langsung sekolah kami dan lihat fasilitas serta program pembelajaran yang kami tawarkan
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
            Buat Janji Temu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
