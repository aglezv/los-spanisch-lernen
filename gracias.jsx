
import Link from "next/link";

export default function GraciasDe() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 p-8 text-center text-gray-800 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Danke für Deine Anmeldung!</h1>
      <p className="text-lg max-w-xl mb-6">
        Du hast den ersten Schritt gemacht, Spanisch auf natürliche, emotionale Weise zu lernen – mit LOS: Sprache, Ohr, Sinn. Bald erhältst du exklusive Materialien per E-Mail.
      </p>
      <Link href="/de" className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
        Zurück zur Startseite
      </Link>
    </main>
  );
}
