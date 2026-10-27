import Ribbon from './Ribbon'
import Favourates from './Favourates'

function Fav({ favorites, onToggleFavorite }) {
  return (
    <div>
      <Ribbon content="Your favorites" count={favorites.length} />
      {favorites.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center">
          <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-rose-50 text-rose-500">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
            </svg>
          </span>
          <p className="mt-3 font-semibold text-slate-800">Your saved photos live here</p>
          <p className="mt-1 text-sm text-slate-500">Tap the heart on any photo to add it to your collection.</p>
        </div>
      ) : (
        <Favourates favorites={favorites} onToggleFavorite={onToggleFavorite} />
      )}
    </div>
  )
}

export default Fav