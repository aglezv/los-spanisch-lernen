
import { useState } from "react";

export default function SuscribeteDe() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 p-8 text-center text-gray-800 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Abonniere die LOS-Methode</h1>
      {submitted ? (
        <p className="text-lg text-green-600">Danke für deine Anmeldung! Wir werden dich bald kontaktieren.</p>
      ) : (
        <form
          action="https://formspree.io/f/tu-codigo-formspree"
          method="POST"
          onSubmit={() => setSubmitted(true)}
          className="w-full max-w-md space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Dein Name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Deine E-Mail-Adresse"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Abonnieren
          </button>
        </form>
      )}
    </main>
  );
}
