
import { useRouter } from "next/router";

export default function IdiomaSelector() {
  const router = useRouter();

  const cambiarIdioma = (e) => {
    const nuevoIdioma = e.target.value;
    router.push(router.pathname, router.asPath, { locale: nuevoIdioma });
  };

  return (
    <div className="absolute top-4 right-4">
      <select
        onChange={cambiarIdioma}
        defaultValue={router.locale}
        className="border border-gray-300 rounded px-2 py-1"
      >
        <option value="es">Español</option>
        <option value="de">Deutsch</option>
      </select>
    </div>
  );
}
