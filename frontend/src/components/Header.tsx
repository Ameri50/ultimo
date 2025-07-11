'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  // Removed unused state
  const pathname = usePathname()

  const linkClass = (path: string) =>
    `flex items-center space-x-3 p-3 rounded-lg transition-colors duration-300 ${
      pathname === path
        ? 'bg-blue-600 text-white font-semibold shadow-md'
        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
    }`

  return (
    <>
      {/* Sidebar desktop */}
      <aside className="hidden sm:flex flex-col w-64 h-screen bg-white border-r border-gray-200 pt-20 fixed left-0 top-0 z-10">
        <div className="px-4 flex flex-col justify-between h-full">
          <div>
            <div className="mb-10 flex items-center justify-center">
              <Image
                src="/images/zgas-logo.png"
                alt="Logo Tecnología"
                width={160}
                height={60}
                className="object-contain"
              />
            </div>

            <div className="mb-8 px-2">
              <nav className="flex flex-col space-y-2">
                <Link href="/" className={linkClass('/')}>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2 7-7 7 7 2 2v10a1 1 0 01-1 1H4a1 1 0 01-1-1V12z" />
                    </svg>
                    Inicio
                  </span>
                </Link>
                <Link href="/Servicios" className={linkClass('/Servicios')}>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 3v1.5m0 15V21m4.5-18v1.5m0 15V21m3.75-9H6" />
                    </svg>
                    Servicios
                  </span>
                </Link>
                <Link href="/Proyectos" className={linkClass('/Proyectos')}>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h6m-3 8h4a2 2 0 002-2v-5H9v5a2 2 0 002 2z" />
                    </svg>
                    Proyectos
                  </span>
                </Link>
                <Link href="/Equipo" className={linkClass('/Equipo')}>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1M12 12a4 4 0 100-8 4 4 0 000 8z" />
                    </svg>
                    Equipo
                  </span>
                </Link>
                <Link href="/Contacto" className={linkClass('/Contacto')}>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h18M3 10h18M3 15h18" />
                    </svg>
                    Contacto
                  </span>
                </Link>
              </nav>
            </div>
          </div>

          {/* Footer del sidebar */}
          <div className="pb-6 px-2">
            <div className="p-3 bg-blue-50 rounded-lg text-center text-blue-700 text-sm">
              <p>NovaTech Solutions</p>
              <p className="text-xs text-gray-500 mt-1">© {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
