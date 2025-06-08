
import Link from "next/link";
import IdiomaSelector from "../components/IdiomaSelector";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 text-center p-6">
      <IdiomaSelector />
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Bienvenido al Método LOS</h1>
      <p className="text-lg text-gray-700 max-w-xl mb-6">
        Aprende español como un bebé: natural, emocional, desde cero.
      </p>
      <Link href="/suscribete" className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
        ¡Empezar ahora!
      </Link>
    </main>
  );
}
