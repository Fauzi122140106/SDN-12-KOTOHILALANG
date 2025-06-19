
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="min-h-screen relative pt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Main Hero Content - Centered */}
          <div className="text-center text-white mb-16 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl mb-6 text-green-200 font-medium">
              Selamat Datang Di
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 leading-tight">
              SD Negeri 12 
              <span className="block text-green-400">Kotohilalang</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Sekolah Dasar unggulan yang menghasilkan generasi cerdas, berkarakter, dan siap menghadapi masa depan
            </p>
            
            <button 
              onClick={() => {
                const aboutElement = document.querySelector('#about');
                if (aboutElement) {
                  aboutElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              SELENGKAPNYA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
