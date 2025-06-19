
import { useState } from "react";
import { Search, Filter, Eye, Download, Trash2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AdminRegistrations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

  // Mock data - will be replaced with API data
  const registrations = [
    {
      id: 1,
      namaLengkap: "Andi Saputra",
      tanggalLahir: "2017-05-15",
      jenisKelamin: "Laki-laki",
      namaOrangTua: "Budi Saputra",
      telepon: "081234567890",
      email: "budi@email.com",
      status: "pending",
      tanggalDaftar: "2024-01-15"
    },
    {
      id: 2,
      namaLengkap: "Siti Nurhaliza",
      tanggalLahir: "2017-08-22",
      jenisKelamin: "Perempuan",
      namaOrangTua: "Ahmad Nurhaliza",
      telepon: "081298765432",
      email: "ahmad@email.com",
      status: "approved",
      tanggalDaftar: "2024-01-14"
    },
    {
      id: 3,
      namaLengkap: "Reza Pratama",
      tanggalLahir: "2017-03-10",
      jenisKelamin: "Laki-laki",
      namaOrangTua: "Indra Pratama",
      telepon: "081387654321",
      email: "indra@email.com",
      status: "rejected",
      tanggalDaftar: "2024-01-13"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved": return "bg-green-100 text-green-800";
      case "rejected": return "bg-red-100 text-red-800";
      default: return "bg-yellow-100 text-yellow-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "approved": return "Diterima";
      case "rejected": return "Ditolak";
      default: return "Menunggu";
    }
  };

  const filteredRegistrations = registrations.filter(reg => {
    const matchesSearch = reg.namaLengkap.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reg.namaOrangTua.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "all" || reg.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Kelola Pendaftaran</h1>
        <p className="text-gray-600">Kelola pendaftaran peserta didik baru</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold">127</div>
            <p className="text-sm text-gray-600">Total Pendaftaran</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-yellow-600">45</div>
            <p className="text-sm text-gray-600">Menunggu Review</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-green-600">70</div>
            <p className="text-sm text-gray-600">Diterima</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-red-600">12</div>
            <p className="text-sm text-gray-600">Ditolak</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Cari nama siswa atau orang tua..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="all">Semua Status</option>
              <option value="pending">Menunggu</option>
              <option value="approved">Diterima</option>
              <option value="rejected">Ditolak</option>
            </select>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredRegistrations.map((registration) => (
              <div key={registration.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <div>
                        <h3 className="font-semibold">{registration.namaLengkap}</h3>
                        <p className="text-sm text-gray-600">
                          Orang Tua: {registration.namaOrangTua} | {registration.telepon}
                        </p>
                        <p className="text-sm text-gray-600">
                          Tanggal Lahir: {new Date(registration.tanggalLahir).toLocaleDateString('id-ID')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(registration.status)}`}>
                      {getStatusText(registration.status)}
                    </span>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminRegistrations;
