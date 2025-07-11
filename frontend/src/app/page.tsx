'use client';

import Header from '../components/Header';
import Image from 'next/image';
import { Cpu, Cloud, ShieldCheck, Zap, Clock, Phone } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <Cloud className="w-8 h-8 text-gray-900" />,
      title: 'Cloud Architecture',
      description: 'Potencia tu negocio con soluciones en la nube seguras, rápidas y escalables.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-gray-900" />,
      title: 'Security by Design',
      description: 'Protección de datos desde el núcleo con cifrado y monitoreo en tiempo real.',
    },
    {
      icon: <Zap className="w-8 h-8 text-gray-900" />,
      title: 'Automatización AI',
      description: 'Ahorra tiempo y recursos con procesos inteligentes basados en IA.',
    },
    {
      icon: <Clock className="w-8 h-8 text-gray-900" />,
      title: 'Soporte Global 24/7',
      description: 'Nuestro equipo de expertos está siempre disponible para ayudarte.',
    },
  ];

  return (
    <div className="flex bg-white text-gray-900 min-h-screen">
      <Header />
      <main className="ml-64 w-full">
        {/* Hero Section */}
        <section className="relative h-[550px]">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-gray-800/70 z-10" />
          <Image
            src="/images/apple-tech-bg.jpg"
            alt="Apple-style technology"
            layout="fill"
            objectFit="cover"
            className="object-center"
          />
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-8 text-white">
              <h1 className="text-5xl font-bold mb-4 tracking-tight">
                Tecnología elegante.
                <br />
                Soluciones potentes.
              </h1>
              <p className="text-xl mb-8 max-w-2xl font-light">
                Simplificamos lo complejo con infraestructura moderna, IA y automatización de clase mundial.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    document.getElementById('soluciones')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white text-black font-medium py-3 px-6 rounded-full hover:bg-gray-100 transition"
                >
                  Ver soluciones
                </button>
                <button
                  onClick={() => {
                    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border border-white hover:bg-white/10 text-white font-medium py-3 px-6 rounded-full transition"
                >
                  Contáctanos
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-semibold mb-4">Tecnología que transforma</h2>
              <p className="text-lg text-gray-500 max-w-xl mx-auto">
                Cada solución está diseñada para elevar tu productividad, rendimiento y seguridad.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 text-center border border-gray-200"
                >
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-8 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <Image
                src="/images/clean-office.jpg"
                alt="Modern tech office"
                width={600}
                height={400}
                className="rounded-xl shadow-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Diseñamos con propósito. Ejecutamos con precisión.</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                En nuestra empresa, fusionamos diseño intuitivo con ingeniería de alto nivel. Creamos plataformas centradas en el usuario,
                potenciadas por inteligencia artificial, infraestructura cloud robusta y automatización eficiente.
              </p>
              <ul className="space-y-3 mb-8 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <Cpu size={16} className="text-green-500" /> Software empresarial personalizado
                </li>
                <li className="flex items-center gap-2">
                  <Cpu size={16} className="text-green-500" /> Integración con herramientas líderes (Apple, AWS, Azure)
                </li>
                <li className="flex items-center gap-2">
                  <Cpu size={16} className="text-green-500" /> Consultoría en transformación digital
                </li>
              </ul>
              <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition">
                Conócenos más
              </button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-black text-white text-center">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl font-bold mb-4">¿Estás listo para rediseñar tu futuro digital?</h2>
            <p className="text-lg mb-8">
              Agenda una reunión personalizada con uno de nuestros especialistas y comencemos hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-black font-semibold py-3 px-8 rounded-full transition hover:bg-gray-100 flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" /> Agenda una llamada
              </button>
              <a
                href="https://wa.me/51951012633?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios%20tecnológicos"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white hover:bg-white/10 font-semibold py-3 px-8 rounded-full flex items-center justify-center"
              >
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Soluciones */}
        <section id="soluciones" className="py-24 bg-gray-50">
          <div className="container mx-auto px-8 text-center">
            <h2 className="text-4xl font-semibold mb-6">Nuestras Soluciones</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              Creamos tecnología que impulsa empresas modernas con enfoque en rendimiento, eficiencia y escalabilidad.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-white rounded-xl shadow border border-gray-200">
                <h3 className="text-xl font-semibold mb-2">Infraestructura Cloud</h3>
                <p className="text-sm text-gray-600">Implementación y gestión de servidores en AWS, Azure y Google Cloud.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow border border-gray-200">
                <h3 className="text-xl font-semibold mb-2">Automatización Inteligente</h3>
                <p className="text-sm text-gray-600">Desarrollo de bots y flujos automáticos para ahorrar tiempo y costos.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow border border-gray-200">
                <h3 className="text-xl font-semibold mb-2">Seguridad Digital</h3>
                <p className="text-sm text-gray-600">Protección de datos, autenticación multifactor y protocolos avanzados.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="py-24 bg-white">
          <div className="container mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                ¿Listo para dar el siguiente paso? Rellena el formulario y nos pondremos en contacto contigo pronto.
              </p>
            </div>
            <form className="max-w-xl mx-auto space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input type="text" className="w-full border border-gray-300 rounded-md p-3" placeholder="Tu nombre completo" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                <input type="email" className="w-full border border-gray-300 rounded-md p-3" placeholder="tu@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea className="w-full border border-gray-300 rounded-md p-3" rows={4} placeholder="¿En qué podemos ayudarte?" />
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition">
                Enviar mensaje
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
