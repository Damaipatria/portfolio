import { Projects } from "@/features/portfolio/project/types";

export const projectsData: Projects[] = [
  {
    id: 1,
    title: "Website Logistik dan Pengadaan Rumah Sakit",
    company: "RS. Panti Rapih",
    role: "Front-End Website Developer",
    description:
      "Sistem manajemen pengadaan dan logistik rumah sakit untuk mendukung operasional internal.",
    technologies: [
      "React JS",
      "Bootstrap",
      "TanStack Query",
      "REST API"
    ],
    category: "Healthcare",
    image: "/images/projects/procurement-logistics.webp",
    status: "Production",
    featured: true,
    confidential: true,
    contribution: [
      "Mengembangkan fitur pengajuan pengadaan yang memungkinkan proses persetujuan langsung ke direksi secara digital.",
      "Mendesain ulang navigasi sidebar guna meningkatkan kemudahan akses terhadap fitur-fitur utama aplikasi.",
      "Berpartisipasi dalam pengembangan dan pemeliharaan berbagai modul pada sistem Pengadaan & Logistik rumah sakit.",
    ],
    responsibilities: [
      "Pengembangan Frontend",
      "Integrasi REST API",
      "UI/UX Desain",
      "Pemeliharaan Sistem",
      "Pengujian & Debugging"
    ]
  },
  {
    id: 2,
    title: "Website Informasi Kamar Rawat Inap",
    company: "RS. Panti Rapih",
    role: "Front-End Website Developer",
    description:
      "Sistem manajemen kamar rawat inap bertujuan untuk memudahkan akses informasi kamar rawat inap pada pasien maupun keluarga pasien.",
    technologies: [
      "React JS",
      "Tailwind CSS",
      "TanStack Query",
      "Axios",
      "REST API"
    ],
    category: "Healthcare",
    image: "https://amowvrssevrsklcnlvrm.supabase.co/storage/v1/object/public/portfolio%20tumbnail/ss_infomasi%20kamar%20ranap.webp",
    status: "Production",
    featured: true,
    confidential: false,
    demoUrl: "https://pantirapih.id:1042/",
    contribution: [
      "Membangun website Informasi Kamar Rawat Inap untuk menyediakan informasi kamar bagi pasien dan keluarga pasien.",
      "Mendesain dan mengimplementasikan UI dengan fokus pada kemudahan penggunaan dan aksesibilitas informasi.",
      "Mengoptimalkan aset gambar dan video untuk meningkatkan performa dan kecepatan akses website.",
      "mengimplementasikan autentikasi berbasis JWT guna meningkatkan keamanan akses pada panel administrasi.",
      "Mengembangkan komponen reusable yang mempercepat pengembangan dan menjaga konsistensi antarmuka aplikasi."
    ],
    responsibilities: [
      "Pengembangan Frontend",
      "UI/UX Desain",
      "Integrasi REST API",
      "Integrasi Autentikasi JWT",
      "Optimisasi Performa",
      "Pengujian & Debugging"
    ]
  },
  {
    id: 4,
    title: "Website Manajemen Gereja",
    company: "GKJ Pakem",
    role: "Front-End Web Developer (Freelance)",
    description:
      "Sistem pengelolaan data jemaat dan kegiatan gereja berbasis web.",
    technologies: [
      "React JS",
      "Tailwind CSS",
      "Axios",
      "TanStack Query",
      "JWT"
    ],
    category: "Organization",
    image: "/images/projects/church-management.webp",
    status: "Production",
    featured: false,
    confidential: true,
    contribution: [
      "Membangun website manajemen jemaat untuk menyediakan informasi jemaat bagi pengguna.",
      "Mendesain dan mengimplementasikan UI responsif dengan fokus pada kemudahan penggunaan dan aksesibilitas informasi.",
      "mengimplementasikan autentikasi berbasis JWT guna meningkatkan keamanan.",
      "Mengembangkan komponen reusable yang mempercepat pengembangan dan menjaga konsistensi antarmuka aplikasi."
    ],
    responsibilities: [
      "Pengembangan Frontend",
      "UI/UX Desain",
      "Integrasi REST API",
      "Integrasi Autentikasi JWT",
      "Optimisasi Performa",
      "Pengujian & Debugging"
    ]
  },
  {
    id: 5,
    title: "SIMES - Sistem Manajemen Sekolah",
    company: "ZenBytes",
    role: "Front-End Web Developer (Freelance)",
    description:
      "Sistem manajemen aktivitas sekolah berbasis web.",
    technologies: [
      "React JS",
      "TypeScript",
      "Tailwind CSS",
      "Ant Design",
      "JWT"
    ],
    category: "Education",
    image: "/images/projects/simes.webp",
    status: "Production",
    featured: true,
    confidential: true,
    contribution: [
      "Mengembangkan modul Bimbingan Konseling untuk pengelolaan jadwal dan layanan siswa.",
      "Berkontribusi dalam refactor modul Bimbingan Konseling untuk meningkatkan usability dan menyesuaikan kebutuhan operasional sekolah.",
      "Mengembangkan fitur Program Kerja Bulanan (Probul) lengkap dengan ekspor Excel, PDF, dan cetak laporan.",
    ],
    responsibilities: [
      "Pengembangan Frontend",
      "Integrasi REST API",
      "Optimisasi Performa",
      "Pengujian & Debugging"
    ]
  },
];