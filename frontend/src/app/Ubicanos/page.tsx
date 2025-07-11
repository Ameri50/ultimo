"use client";

import { MapPin, Clock, Phone, Mail, Calendar } from "lucide-react";
import Header from "@/components/Header";

export default function UbicanosHome() {
  const locations = [
    {
      name: "Centro de Innovación - Lima",
      address: "Av. El Derby 150, Santiago de Surco, Lima",
      phone: "(01) 500-1234",
      email: "soporte@novatech.com",
      hours: "Lunes a Viernes: 9:00 AM - 6:00 PM\nSábados: 10:00 AM - 2:00 PM",
      coords: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.5674397610043!2d-76.97707488460964!3d-12.10376024520847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c79b0be674f3%3A0x460d143bb3c3d7c1!2sApple%20Store!5e0!3m2!1ses!2spe!4v1700000000000"
    },
    {
      name: "Tech Hub - Arequipa",
      address: "Av. Ejército 1001, Cayma, Arequipa",
      phone: "(054) 600-4321",
      email: "arequipa@novatech.com",
      hours: "Lunes a Domingo: 10:00 AM - 8:00 PM",
      coords: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.732165898037!2d-71.54054308461062!3d-16.398889945168584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a6521f5c6e1%3A0x8a39b1c0b33f3434!2sApple%20Authorized%20Reseller!5e0!3m2!1ses!2spe!4v1700000000001"
    }
  ];

  return (
    <div className="flex bg-white text-gray-800 min-h-screen">
      <Header />
      <main className="ml-64 w-full">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-12 px-8">
          <h1 className="text-4xl font-bold mb-2">Visítanos</h1>
          <p className="text-xl opacity-90">Centros de experiencia tecnológica NovaTech en Perú</p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Locations List */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <MapPin className="inline mr-2" size={28} />
                Centros NovaTech
              </h2>

              {locations.map((location, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{location.name}</h3>
                  
                  <div className="space-y-3">
                    <p className="flex items-start">
                      <MapPin className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                      <span>{location.address}</span>
                    </p>
                    
                    <p className="flex items-start">
                      <Phone className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                      <span>{location.phone}</span>
                    </p>
                    
                    <p className="flex items-start">
                      <Mail className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                      <span>{location.email}</span>
                    </p>
                    
                    <p className="flex items-start">
                      <Clock className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="whitespace-pre-line">{location.hours}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Section */}
            <div className="sticky top-4">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-300">
                <iframe
                  src={locations[0].coords}
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-t-xl"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <h3 className="flex items-center text-lg font-semibold text-gray-800">
                    <Calendar className="mr-2 text-green-600" size={20} />
                    Horarios destacados
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                    Sábados: 10:00 AM - 2:00 PM<br />
                    Domingos: Cerrado
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-8 border border-gray-300 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Necesitas soporte personalizado?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Nuestros especialistas están disponibles para ayudarte con productos, servicios o agendar una cita técnica
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href={`tel:${locations[0].phone}`}
                className="bg-gray-900 hover:bg-black text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md flex items-center"
              >
                <Phone className="mr-2" size={18} />
                Llamar ahora
              </a>
              <a 
                href={`mailto:${locations[0].email}`}
                className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded-lg transition duration-300 border border-gray-400 flex items-center"
              >
                <Mail className="mr-2" size={18} />
                Enviar correo
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
