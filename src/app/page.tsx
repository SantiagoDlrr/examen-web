'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/visitors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Error al iniciar sesión");
      }

      const data = await res.json();
      router.push(`/welcome?name=${encodeURIComponent(data.fullName)}`);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Registro de Visitantes
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-3 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 placeholder-green-700 text-green-900"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 placeholder-green-700 text-green-900"
            required
          />
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition duration-300"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}