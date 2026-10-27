function Cards({ photo, isFavorite = false, onToggleFavorite }) {
  return (
    <article className="group w-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10">
      <div className="relative overflow-hidden bg-slate-100">
        <img
          src={photo.download_url}
          alt={`Photo by ${photo.author}`}
          loading="lazy"
          className="aspect-/3 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <button
          type="button"
          onClick={() => onToggleFavorite?.(photo)}
          aria-label={`${isFavorite ? 'Remove' : 'Add'} ${photo.author}'s photo ${isFavorite ? 'from' : 'to'} favorites`}
          aria-pressed={isFavorite}
          className={`absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full shadow-md backdrop-blur transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 ${
            isFavorite
              ? 'bg-white text-rose-600'
              : 'bg-white/90 text-slate-500 hover:bg-white hover:text-rose-600'
          }`}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill={isFavorite ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
          </svg>
        </button>
      </div>
      <div className="flex items-center justify-between gap-3 px-4 py-4">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">Photographer</p>
          <p className="mt-1 truncate font-semibold text-slate-800">{photo.author}</p>
        </div>
        <span className="rounded-full bg-cyan-50 px-2.5 py-1 text-xs font-medium text-cyan-800">
          #{photo.id}
        </span>
      </div>
    </article>
  )
}

export default Cards