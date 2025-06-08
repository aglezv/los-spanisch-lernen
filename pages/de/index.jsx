// Archivo: pages/de/index.jsx
import Link from "next/link";

export default function HomeDe() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 text-center p-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Willkommen zur LOS-Methode</h1>
      <p className="text-lg text-gray-700 max-w-xl mb-6">
        Lerne Spanisch wie ein Baby – natürlich, emotional, von Grund auf.
      </p>
      <Link href="/de/suscribete" className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
        Jetzt starten!
      </Link>
    </main>
  );
}

