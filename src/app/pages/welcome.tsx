import { useRouter } from "next/router";

export default function Welcome() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-lg text-center">
        {name ? (
          <>
            <h1 className="text-3xl font-bold text-green-700 mb-4">
              ¡Bienvenido, {name}!
            </h1>
            <p className="text-green-600 text-lg">
              Disfruta tu experiencia en GreenPark 🌿
            </p>
          </>
        ) : (
          <h1 className="text-2xl font-bold text-red-500">
            No se encontró información del visitante.
          </h1>
        )}
      </div>
    </div>
  );
}