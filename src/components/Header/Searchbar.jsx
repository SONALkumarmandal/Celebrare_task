function Searchbar({ value, onChange, onClear, className = '' }) {
  return (
    <label className={`relative block w-full ${className}`}>
      <span className="sr-only">Search photos by author</span>
      <input
        type="search"
        value={value}
        onChange={onChange}
        placeholder="Try an author name..."
        className="gallery-search-input h-14 w-full rounded-2xl border border-white/20 bg-white px-12 pr-12 text-base text-slate-900 shadow-xl shadow-slate-950/10 outline-none transition placeholder:text-slate-400 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/25"
      />
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400">
        <circle cx="11" cy="11" r="7" />
        <path strokeLinecap="round" d="m20 20-4-4" />
      </svg> 
      {value && (
        <button
          type="button"
          onClick={onClear}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-2 focus-visible:outline-cyan-700"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path strokeLinecap="round" d="m18 6-12 12M6 6l12 12" />
          </svg>
        </button>
      )}
    </label>
  )
}

export default Searchbar