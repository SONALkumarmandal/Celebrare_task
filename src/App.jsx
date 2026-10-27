import { useCallback, useState } from 'react'
import Header from './components/Header/HeaderLayout'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSectionLayout'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value)
  }, [])

  const clearSearch = useCallback(() => {
    setSearchTerm('')
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <HeroSection
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onClearSearch={clearSearch}
      />
      <Footer />
    </div>
  )
}

export default App