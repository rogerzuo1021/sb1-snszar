import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow">
          <Home />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App