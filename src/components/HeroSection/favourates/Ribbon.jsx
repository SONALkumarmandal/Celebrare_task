function Ribbon({ content, count }) {
  return (
    <div className="mb-5 flex items-center justify-between gap-4">
      <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">{content}</h2>
      {Number.isInteger(count) && (
        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
          {count}
        </span>
      )}
    </div>
  )
}

export default Ribbon