
import { Building, Image, Newspaper, TrendingUp, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  const stats = [
    {
      title: "Fasilitas",
      value: "6",
      change: "0%",
      icon: Building,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Foto Galeri",
      value: "48",
      change: "+8%",
      icon: Image,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Artikel Berita",
      value: "15",
      change: "+3%",
      icon: Newspaper,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  const recentActivities = [
    { type: "Berita", message: "Artikel 'Prestasi Olimpiade Sains' dipublikasikan", time: "4 jam lalu" },
    { type: "Galeri", message: "10 foto kegiatan upacara bendera ditambahkan", time: "1 hari lalu" },
    { type: "Fasilitas", message: "Informasi Lab Komputer diperbarui", time: "2 hari lalu" },
    { type: "Berita", message: "Artikel 'Kegiatan Ekstrakurikuler' dipublikasikan", time: "3 hari lalu" }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Ringkasan aktivitas sekolah hari ini</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <div className={`${stat.bgColor} p-2 rounded-full`}>
                  <IconComponent className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{stat.change}</span> dari bulan lalu
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Aktivitas Terbaru</CardTitle>
            <CardDescription>
              Aktivitas terbaru di sistem
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Aksi Cepat</CardTitle>
            <CardDescription>
              Kelola konten website dengan mudah
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                <Newspaper className="h-6 w-6 text-green-600 mb-2" />
                <h3 className="font-medium">Tulis Berita</h3>
                <p className="text-sm text-gray-600">Buat artikel baru</p>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                <Image className="h-6 w-6 text-purple-600 mb-2" />
                <h3 className="font-medium">Upload Foto</h3>
                <p className="text-sm text-gray-600">Tambah ke galeri</p>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                <Building className="h-6 w-6 text-blue-600 mb-2" />
                <h3 className="font-medium">Kelola Fasilitas</h3>
                <p className="text-sm text-gray-600">Update fasilitas</p>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                <TrendingUp className="h-6 w-6 text-orange-600 mb-2" />
                <h3 className="font-medium">Lihat Statistik</h3>
                <p className="text-sm text-gray-600">Analisis website</p>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
