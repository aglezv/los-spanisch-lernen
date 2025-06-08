
import Link from "next/link";

export default function Gracias() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 p-8 text-center text-gray-800 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">¡Gracias por unirte!</h1>
      <p className="text-lg max-w-xl mb-6">
        Has dado el primer paso para aprender español con el método más natural y emocional. Pronto recibirás materiales en tu correo.
      </p>
      <Link href="/" className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
        Volver al inicio
      </Link>
    </main>
  );
}
