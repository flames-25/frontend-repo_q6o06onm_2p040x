import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Terima kasih! Pesan Anda telah kami terima.');
    e.currentTarget.reset();
  };

  return (
    <section id="kontak" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Hubungi Kami</h2>
            <p className="mt-3 text-gray-600">Ada pertanyaan atau butuh demo? Kirimkan pesan, kami akan membalas secepatnya.</p>
            {status && (
              <div className="mt-4 rounded-md bg-green-50 p-4 text-green-700 border border-green-200">
                {status}
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nama</label>
                <input type="text" required className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" required className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Pesan</label>
                <textarea rows="4" required className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <button type="submit" className="inline-flex justify-center rounded-md bg-indigo-600 px-5 py-3 text-white font-medium shadow hover:bg-indigo-500">Kirim</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
