import { Rocket, Star, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Cepat & Andal',
    desc: 'Dibangun dengan teknologi modern untuk performa terbaik.',
  },
  {
    icon: Star,
    title: 'Desain Elegan',
    desc: 'Tampilan bersih yang fokus pada pengalaman pengguna.',
  },
  {
    icon: Shield,
    title: 'Aman',
    desc: 'Praktik keamanan terbaik untuk melindungi data Anda.',
  },
  {
    icon: Zap,
    title: 'Siap Skala',
    desc: 'Arsitektur yang mudah berkembang sesuai kebutuhan bisnis.',
  },
];

export default function Features() {
  return (
    <section id="fitur" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Mengapa Memilih Kami</h2>
          <p className="mt-3 text-gray-600">Empat alasan utama yang membuat produk kami menonjol.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
