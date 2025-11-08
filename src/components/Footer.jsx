export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© {year} Vibe App. Semua hak cipta dilindungi.</p>
        <div className="flex items-center gap-4">
          <a href="#beranda" className="hover:text-gray-900">Beranda</a>
          <a href="#fitur" className="hover:text-gray-900">Fitur</a>
          <a href="#kontak" className="hover:text-gray-900">Kontak</a>
        </div>
      </div>
    </footer>
  );
}
