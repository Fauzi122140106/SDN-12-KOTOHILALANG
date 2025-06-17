
import { useState } from "react";

const Hero = () => {
  const [showRegistration, setShowRegistration] = useState(false);

  return (
    <section id="home" className="min-h-screen relative pt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[calc(100vh-4rem)] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Main Hero Content - Positioned to the left */}
          <div className="text-left text-white mb-16 max-w-2xl">
            <p className="text-lg md:text-xl mb-4">Selamat Datang Di</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              SD Negeri 12 Kotohilalang
            </h1>
            
            {!showRegistration ? (
              <button 
                onClick={() => setShowRegistration(true)}
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all duration-300"
              >
                SELENGKAPNYA
              </button>
            ) : (
              <button 
                onClick={() => setShowRegistration(false)}
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all duration-300"
              >
                DAFTAR SEKARANG
              </button>
            )}
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                PENDAFTARAN<br />PESERTA DIDIK BARU
              </h3>
              <button className="bg-green-600 text-white px-6 py-2 rounded text-sm font-semibold hover:bg-green-700 transition-colors">
                SELENGKAPNYA
              </button>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                DAFTAR SISTEM<br />AKADEMIK
              </h3>
              <button className="bg-green-600 text-white px-6 py-2 rounded text-sm font-semibold hover:bg-green-700 transition-colors">
                SELENGKAPNYA
              </button>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-.979 0-1.903.197-2.75.552-.546.226-1.175.227-1.623.01a.75.75 0 00-.926.66 9.483 9.483 0 00-.26 2.278C.5 8.974.5 10.026.5 11.5c0 1.474 0 2.526.044 3.974a.75.75 0 00.926.66c.448-.218 1.077-.217 1.623.01.847.355 1.771.552 2.75.552 1.264 0 2.438-.31 3.5-.804V4.804z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                PUSAT<br />PERPUSTAKAAN
              </h3>
              <button className="bg-green-600 text-white px-6 py-2 rounded text-sm font-semibold hover:bg-green-700 transition-colors">
                SELENGKAPNYA
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
