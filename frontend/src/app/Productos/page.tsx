"use client";

import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

export default function ProductosHome() {
  const products = [
    {
      title: "NovaBook X1",
      description: "Ultrabook premium con chip NovaCore, batería de 20 horas y pantalla Retina HDR.",
      price: 1899,
      imageUrl: "/images/novabook-x1.jpg",
      features: ["Ultra liviana", "Procesador NovaCore M2", "Diseño unibody de aluminio"]
    },
    {
      title: "NovaPod Pro",
      description: "Auriculares inalámbricos con cancelación de ruido activa y sonido envolvente 3D.",
      price: 249,
      imageUrl: "/images/novapod-pro.jpg",
      features: ["Cancelación de ruido", "Audio espacial", "Carga inalámbrica"]
    },
    {
      title: "NovaWatch S9",
      description: "Reloj inteligente con sensor de salud 24/7, ECG, y conectividad LTE.",
      price: 499,
      imageUrl: "/images/novawatch-s9.jpg",
      features: ["Seguimiento de salud", "Pantalla OLED siempre activa", "Resistencia al agua IP68"]
    },
  ];

  return (
    <div className="flex bg-gray-50 text-gray-800 min-h-screen">
      <Header />
      <main className="ml-64 p-8 w-full">
        <div className="max-w-7xl mx-auto">
          {/* Título */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Nuestros <span className="text-blue-600">Productos</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Tecnología avanzada diseñada para potenciar tu día a día. Desde dispositivos personales hasta herramientas profesionales.
            </p>
          </div>

          {/* Productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          {/* CTA Asesoramiento */}
          <div className="mt-16 bg-gradient-to-r from-blue-100 to-green-100 rounded-xl p-8 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">¿Necesitas asesoramiento personalizado?</h2>
            <p className="text-gray-700 mb-6">
              Nuestro equipo técnico está listo para ayudarte a elegir el dispositivo ideal para tus proyectos y estilo de vida.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300 shadow-md">
              Hablar con un experto
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
