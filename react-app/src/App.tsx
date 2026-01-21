import { useState } from 'react'
import './App.css'
import { TextParallaxContentExample } from './components/ui/text-parallax-content-scroll'
import { AboutUsSection } from './components/about-us.tsx'
import { RadialOrbitalTimelineDemo } from './components/demo'

function App() {
  const [currentView, setCurrentView] = useState<'hero' | 'about' | 'services'>('hero')

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">KORT</h1>
            </div>
            <div className="flex space-x-8">
              <button
                onClick={() => setCurrentView('hero')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentView === 'hero'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Inicio
              </button>
              <button
                onClick={() => setCurrentView('about')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentView === 'about'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Nosotros
              </button>
              <button
                onClick={() => setCurrentView('services')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentView === 'services'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Servicios
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {currentView === 'hero' && <TextParallaxContentExample />}
        {currentView === 'about' && <AboutUsSection />}
        {currentView === 'services' && <RadialOrbitalTimelineDemo />}
      </main>
    </div>
  )
}

export default App
