'use client';

import { useSearchParams } from "next/navigation";

export default function Welcome() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-lg text-center">
        {name ? (
          <>
            <h1 className="text-3xl font-bold text-green-700 mb-4">
              ¡Bienvenid@, {name}!
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