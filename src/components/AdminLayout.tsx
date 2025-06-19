
import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { 
  Building, 
  Image, 
  Newspaper, 
  LogOut, 
  Menu, 
  X,
  Home
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, user } = useAuth();

  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/admin" },
    { icon: Building, label: "Fasilitas", path: "/admin/facilities" },
    { icon: Image, label: "Galeri", path: "/admin/gallery" },
    { icon: Newspaper, label: "Berita", path: "/admin/news" },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className={`bg-green-800 text-white transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-16'}`}>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h1 className={`font-bold text-lg ${!sidebarOpen && 'hidden'}`}>
              Admin Panel
            </h1>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-white hover:bg-green-700 p-2 rounded"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <nav className="mt-8">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center px-4 py-3 text-left hover:bg-green-700 transition-colors ${
                  isActive ? 'bg-green-700 border-r-4 border-white' : ''
                }`}
              >
                <IconComponent size={20} />
                <span className={`ml-3 ${!sidebarOpen && 'hidden'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-3 text-left hover:bg-green-700 transition-colors rounded"
          >
            <LogOut size={20} />
            <span className={`ml-3 ${!sidebarOpen && 'hidden'}`}>
              Logout
            </span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-800">
              SD Negeri 12 Kotohilalang - Admin
            </h2>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Selamat datang, {user?.username}</span>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">A</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
