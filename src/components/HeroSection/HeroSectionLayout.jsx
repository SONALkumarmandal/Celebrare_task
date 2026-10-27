import { useCallback, useEffect, useMemo, useReducer } from 'react'
import Cards from './mainArea/Cards'
import Fav from './favourates/FavLayout'
import Ribbon from './favourates/Ribbon'
import Searchbar from '../Header/Searchbar'
import useFetchPhotos from '../../hooks/useFetchPhotos'

const FAVORITES_STORAGE_KEY = 'celebrare-favorite-photos'

function getInitialFavorites() {
  try {
    const storedFavorites = window.localStorage.getItem(FAVORITES_STORAGE_KEY)
    if (!storedFavorites) return []

    const parsedFavorites = JSON.parse(storedFavorites)
    if (Array.isArray(parsedFavorites)) return parsedFavorites

    console.error('Saved favorite photos are not in the expected format.')
  } catch (storageError) {
    console.error('Unable to read favorite photos from localStorage.', storageError)
  }

  return []
}

function favoritesReducer(favorites, action) {
  switch (action.type) {
    case 'toggle': {
      const isFavorite = favorites.some(photo => photo.id === action.photo.id)
      return isFavorite
        ? favorites.filter(photo => photo.id !== action.photo.id)
        : [...favorites, action.photo]
    }
    default:
      return favorites
  }
}

function Gallery({ searchTerm = '', onSearchChange, onClearSearch }) {
  const { photos, loading, error } = useFetchPhotos()
  const [favorites, dispatch] = useReducer(favoritesReducer, undefined, getInitialFavorites)

  useEffect(() => {
    try {
      window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites))
    } catch (storageError) {
      console.error('Unable to save favorite photos to localStorage.', storageError)
    }
  }, [favorites])

  const toggleFavorite = useCallback((photo) => {
    dispatch({ type: 'toggle', photo })
  }, [])

  const filteredPhotos = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()
    if (!normalizedSearch) return photos

    return photos.filter(photo => photo.author?.toLowerCase().includes(normalizedSearch))
  }, [photos, searchTerm])

  return (
    <main>
      <section className="relative isolate overflow-hidden bg-linear-to-br from-slate-950 via-cyan-950 to-slate-900">
        <div aria-hidden="true" className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-48 -left-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              A little inspiration
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Find a moment
              <span className="block text-cyan-300">worth keeping.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Explore beautiful shots from photographers around the world. Search by author and save the ones you love.
            </p>
          </div>
          <div className="mt-8 max-w-2xl">
            <Searchbar
              value={searchTerm}
              onChange={onSearchChange}
              onClear={onClearSearch}
            />
            <p className="mt-3 text-sm text-slate-400">
              {searchTerm
                ? `${filteredPhotos.length} ${filteredPhotos.length === 1 ? 'photo' : 'photos'} found`
                : 'Search by photographer name'}
            </p>
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16" aria-label="Photo gallery">
        <Ribbon content="Explore the gallery" count={filteredPhotos.length} />
        {loading && (
          <div className="flex min-h-64 flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white" role="status">
            <span className="h-10 w-10 animate-spin rounded-full border-4 border-cyan-100 border-t-cyan-700" />
            <span className="text-sm font-medium text-slate-600">Loading your photo collection...</span>
          </div>
        )}

        {!loading && error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-10 text-center" role="alert">
            <p className="font-semibold text-red-800">We couldn’t load the photos</p>
            <p className="mt-2 text-sm text-red-700">{error}</p>
          </div>
        )}

        {!loading && !error && filteredPhotos.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <p className="text-lg font-semibold text-slate-800">
              {photos.length === 0 ? 'No photos are available yet.' : 'No photos match that search.'}
            </p>
            <p className="mt-2 text-sm text-slate-500">
              {photos.length === 0 ? 'Please check back soon.' : 'Try another photographer name.'}
            </p>
          </div>
        )}

        {!loading && !error && filteredPhotos.length > 0 && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredPhotos.map(photo => (
              <Cards
                key={photo.id}
                photo={photo}
                isFavorite={favorites.some(favorite => favorite.id === photo.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        )}
      </section>

      <section className="border-t border-slate-200 bg-white" aria-label="Favorite photos">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14">
          <Fav favorites={favorites} onToggleFavorite={toggleFavorite} />
        </div>
      </section>
    </main>
  )
}

export default Gallery
