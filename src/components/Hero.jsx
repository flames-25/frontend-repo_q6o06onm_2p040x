import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4ylYv53Yy8yTFa6S/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Bangun Ide Anda dengan Cepat
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Antarmuka elegan, performa cepat, dan pengalaman modern. Mulai proyek Anda dalam hitungan menit.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#fitur" className="inline-flex justify-center rounded-md bg-indigo-600 px-5 py-3 text-white font-medium shadow hover:bg-indigo-500">
              Jelajahi Fitur
            </a>
            <a href="#kontak" className="inline-flex justify-center rounded-md bg-white px-5 py-3 text-indigo-600 font-medium shadow border border-indigo-200 hover:bg-indigo-50">
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
    </section>
  );
}
