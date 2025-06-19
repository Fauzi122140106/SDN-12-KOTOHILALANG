
import { useState } from "react";
import { Calendar, Clock, Users, CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SchoolTour = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [participants, setParticipants] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableDates = [
    "2024-01-15",
    "2024-01-16", 
    "2024-01-17",
    "2024-01-22",
    "2024-01-23",
    "2024-01-24"
  ];

  const availableTimes = [
    "09:00 - 10:30",
    "11:00 - 12:30", 
    "14:00 - 15:30",
    "16:00 - 17:30"
  ];

  const tourHighlights = [
    "Kunjungi semua fasilitas sekolah",
    "Bertemu dengan kepala sekolah dan guru",
    "Melihat proses pembelajaran langsung",
    "Sesi tanya jawab dengan tim akademik",
    "Mendapat brosur dan informasi lengkap",
    "Konsultasi gratis tentang pendidikan anak"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate && selectedTime) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-16 min-h-[calc(100vh-4rem)] flex items-center justify-center bg-green-50">
          <Card className="max-w-md mx-auto text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-green-600">Pendaftaran Berhasil!</CardTitle>
              <CardDescription>
                Tour sekolah Anda telah terdaftar untuk {selectedDate} pada {selectedTime}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Kami akan menghubungi Anda 1 hari sebelum jadwal tour untuk konfirmasi.
              </p>
              <Button 
                onClick={() => window.location.href = '/'}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Kembali ke Beranda
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-green-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tour Sekolah SD N 12 Kotohilalang</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Jelajahi fasilitas terbaik sekolah kami dan rasakan langsung lingkungan pembelajaran yang nyaman dan modern
            </p>
          </div>
        </div>

        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Tour Information */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Yang Akan Anda Dapatkan</h2>
                
                <div className="space-y-4 mb-8">
                  {tourHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-gray-700">{highlight}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4">Informasi Tour</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-green-600" />
                      <span>Durasi: 1.5 jam</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-green-600" />
                      <span>Maksimal 10 orang per sesi</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-green-600" />
                      <span>Titik kumpul: Lobby utama sekolah</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Daftar Tour Sekolah</CardTitle>
                  <CardDescription>
                    Pilih tanggal dan waktu yang sesuai untuk tour sekolah Anda
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Date Selection */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Pilih Tanggal
                      </label>
                      <select 
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      >
                        <option value="">Pilih tanggal...</option>
                        {availableDates.map(date => (
                          <option key={date} value={date}>
                            {new Date(date).toLocaleDateString('id-ID', { 
                              weekday: 'long', 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Time Selection */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <Clock className="w-4 h-4 inline mr-2" />
                        Pilih Waktu
                      </label>
                      <select
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      >
                        <option value="">Pilih waktu...</option>
                        {availableTimes.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>

                    {/* Participants */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <Users className="w-4 h-4 inline mr-2" />
                        Jumlah Peserta
                      </label>
                      <select
                        value={participants}
                        onChange={(e) => setParticipants(Number(e.target.value))}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        {[1,2,3,4,5,6,7,8,9,10].map(num => (
                          <option key={num} value={num}>{num} orang</option>
                        ))}
                      </select>
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
                        <input
                          type="text"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">No. Telepon</label>
                        <input
                          type="tel"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-green-600 hover:bg-green-700 py-3"
                    >
                      Daftar Tour Sekolah
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Section */}
            <div className="mt-20 bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-center mb-8">Butuh Bantuan?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Phone className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Telepon</h4>
                  <p className="text-gray-600">(0751) 123-4567</p>
                </div>
                <div>
                  <Mail className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-gray-600">info@sdn12kotohilalang.sch.id</p>
                </div>
                <div>
                  <MapPin className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Alamat</h4>
                  <p className="text-gray-600">Jl. Pendidikan No. 12, Kotohilalang</p>
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

export default SchoolTour;
