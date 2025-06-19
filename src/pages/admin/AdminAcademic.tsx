
import { useState } from "react";
import { Users, BookOpen, Calendar, GraduationCap, Plus, Edit } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AdminAcademic = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const academicStats = [
    { title: "Total Siswa", value: "245", icon: Users, color: "text-blue-600" },
    { title: "Mata Pelajaran", value: "8", icon: BookOpen, color: "text-green-600" },
    { title: "Kelas Aktif", value: "12", icon: GraduationCap, color: "text-purple-600" },
    { title: "Guru Aktif", value: "18", icon: Users, color: "text-orange-600" }
  ];

  const classes = [
    { id: 1, name: "Kelas 1A", teacher: "Ibu Sari", students: 25, room: "101" },
    { id: 2, name: "Kelas 1B", teacher: "Ibu Rina", students: 24, room: "102" },
    { id: 3, name: "Kelas 2A", teacher: "Bapak Agus", students: 26, room: "201" },
    { id: 4, name: "Kelas 2B", teacher: "Ibu Dewi", students: 25, room: "202" },
  ];

  const subjects = [
    { id: 1, name: "Matematika", code: "MTK", teacher: "Ibu Sari" },
    { id: 2, name: "Bahasa Indonesia", code: "BI", teacher: "Ibu Rina" },
    { id: 3, name: "IPA", code: "IPA", teacher: "Bapak Agus" },
    { id: 4, name: "IPS", code: "IPS", teacher: "Ibu Dewi" },
  ];

  const teachers = [
    { id: 1, name: "Ibu Sari Nurhaliza", subject: "Matematika", class: "1A, 2A", phone: "081234567890" },
    { id: 2, name: "Ibu Rina Pratiwi", subject: "Bahasa Indonesia", class: "1B, 2B", phone: "081234567891" },
    { id: 3, name: "Bapak Agus Santoso", subject: "IPA", class: "3A, 4A", phone: "081234567892" },
  ];

  const tabs = [
    { id: "overview", label: "Ringkasan", icon: GraduationCap },
    { id: "classes", label: "Kelas", icon: Users },
    { id: "subjects", label: "Mata Pelajaran", icon: BookOpen },
    { id: "teachers", label: "Guru", icon: Users },
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {academicStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <IconComponent className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Aktivitas Terbaru</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">Kelas 3A menyelesaikan ujian Matematika</p>
                  <p className="text-xs text-gray-500">2 jam lalu</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">Jadwal pelajaran IPA diperbarui</p>
                  <p className="text-xs text-gray-500">4 jam lalu</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">Rapat guru bulanan dijadwalkan</p>
                  <p className="text-xs text-gray-500">1 hari lalu</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Jadwal Hari Ini</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Matematika - Kelas 2A</p>
                  <p className="text-sm text-gray-600">Ibu Sari</p>
                </div>
                <span className="text-sm text-gray-500">08:00 - 09:30</span>
              </div>
              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Bahasa Indonesia - Kelas 1B</p>
                  <p className="text-sm text-gray-600">Ibu Rina</p>
                </div>
                <span className="text-sm text-gray-500">10:00 - 11:30</span>
              </div>
              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <p className="font-medium">IPA - Kelas 3A</p>
                  <p className="text-sm text-gray-600">Bapak Agus</p>
                </div>
                <span className="text-sm text-gray-500">13:00 - 14:30</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderClasses = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Daftar Kelas</h2>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="h-4 w-4 mr-2" />
          Tambah Kelas
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem) => (
          <Card key={classItem.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold">{classItem.name}</h3>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Wali Kelas: {classItem.teacher}</p>
                <p className="text-sm text-gray-600">Jumlah Siswa: {classItem.students}</p>
                <p className="text-sm text-gray-600">Ruang: {classItem.room}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderSubjects = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Mata Pelajaran</h2>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="h-4 w-4 mr-2" />
          Tambah Mata Pelajaran
        </Button>
      </div>
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            {subjects.map((subject) => (
              <div key={subject.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">{subject.name}</h3>
                  <p className="text-sm text-gray-600">Kode: {subject.code} | Pengajar: {subject.teacher}</p>
                </div>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderTeachers = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Data Guru</h2>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="h-4 w-4 mr-2" />
          Tambah Guru
        </Button>
      </div>
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            {teachers.map((teacher) => (
              <div key={teacher.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">{teacher.name}</h3>
                  <p className="text-sm text-gray-600">
                    Mata Pelajaran: {teacher.subject} | Kelas: {teacher.class}
                  </p>
                  <p className="text-sm text-gray-600">Telepon: {teacher.phone}</p>
                </div>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "classes": return renderClasses();
      case "subjects": return renderSubjects();
      case "teachers": return renderTeachers();
      default: return renderOverview();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Sistem Akademik</h1>
        <p className="text-gray-600">Kelola data akademik sekolah</p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-green-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <IconComponent className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      {renderContent()}
    </div>
  );
};

export default AdminAcademic;
