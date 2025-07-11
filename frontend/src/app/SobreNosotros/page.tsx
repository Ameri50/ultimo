"use client";

import { Cpu, ShieldCheck, Users } from "lucide-react";
import Header from "@/components/Header";
import Image from "next/image";

export default function SobreNosotrosHome() {
  return (
    <div className="flex bg-white text-gray-800 min-h-screen">
      <Header />
      <main className="ml-64 p-8 w-full">
        <section className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-gray-900">
            Sobre <span className="text-blue-600">NovaTech</span>
          </h1>

          <p className="text-lg text-gray-700 mb-10 leading-relaxed border-l-4 border-blue-500 pl-4">
            En <strong className="text-blue-700">NovaTech</strong>, desarrollamos soluciones tecnológicas de alto impacto que ayudan a empresas a innovar, escalar y evolucionar en la era digital. Desde nuestra fundación en 2010, hemos estado al frente de la transformación tecnológica en América Latina, ofreciendo productos de software, infraestructura en la nube e inteligencia artificial.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Misión */}
            <div className="p-6 rounded-xl shadow-md bg-gradient-to-b from-white to-blue-50 border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Cpu className="text-blue-600" size={28} />
                </div>
                <h2 className="text-xl font-semibold text-blue-800">Nuestra Misión</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Crear tecnologías innovadoras que empoderen a las personas y empresas para transformar sus procesos, conectarse con el futuro y construir soluciones sostenibles que cambien el mundo.
              </p>
            </div>

            {/* Visión */}
            <div className="p-6 rounded-xl shadow-md bg-gradient-to-b from-white to-green-50 border border-green-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 rounded-full">
                  <ShieldCheck className="text-green-700" size={28} />
                </div>
                <h2 className="text-xl font-semibold text-green-800">Nuestra Visión</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Ser líderes globales en innovación digital, reconocidos por desarrollar soluciones seguras, éticas y centradas en el usuario, transformando industrias y mejorando vidas.
              </p>
            </div>

            {/* Valores */}
            <div className="p-6 rounded-xl shadow-md bg-gradient-to-b from-white to-blue-50 border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Users className="text-blue-600" size={28} />
                </div>
                <h2 className="text-xl font-semibold text-blue-800">Nuestros Valores</h2>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span>Innovación</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span>Ética Digital</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span>Colaboración Global</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span>Transparencia</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span>Seguridad y Privacidad</span>
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-12 border-t-2 border-gray-200" />

          {/* Historia */}
          <div className="flex flex-col lg:flex-row gap-8 items-center mb-12">
            <div className="lg:w-2/3">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Nuestra <span className="text-blue-600">Historia</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Fundada en Silicon Valley en 2010, NovaTech nació con la visión de democratizar la tecnología de alto nivel para empresas emergentes y grandes corporaciones por igual. Desde entonces, nuestra huella se ha expandido a más de 12 países.
                </p>
                <p>
                  Hoy en día, somos referentes en soluciones de inteligencia artificial, automatización empresarial, y plataformas cloud-native que soportan millones de usuarios a nivel mundial.
                </p>
                <p>
                  En Latinoamérica, operamos centros de desarrollo e innovación en Lima, Bogotá, Santiago y Ciudad de México, con alianzas estratégicas con líderes tecnológicos globales.
                </p>
                <p>
                  Con más de 300 profesionales tech y más de 1,000 clientes empresariales, seguimos creciendo con la convicción de que la tecnología puede cambiar el mundo si se pone al servicio de las personas.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative w-full h-64 lg:h-96 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                <Image 
                  src="/images/team-tech.jpg" 
                  alt="Historia de NovaTech"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
