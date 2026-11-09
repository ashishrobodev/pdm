export default function Viewer3D({ part }) {
  if (!part) {
    return (
      <div className="h-full flex items-center justify-center text-slate text-sm border border-line rounded bg-panel">
        Select a part to preview
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col border border-line rounded bg-panel overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2 border-b border-line bg-paper">
        <span className="text-xs font-mono font-medium text-steel">{part.partNumber} — REV {part.revision}</span>
        <div className="flex gap-1">
          {['Rotate', 'Zoom', 'Section'].map((tool) => (
            <button key={tool} className="text-[11px] px-2 py-1 rounded border border-line text-slate hover:text-signal hover:border-signal/40 transition-colors">
              {tool}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center bg-[repeating-linear-gradient(45deg,#F3F1EA,#F3F1EA_10px,#EAE7DD_10px,#EAE7DD_20px)]">
        <div className="text-center text-slate">
          <svg className="w-16 h-16 mx-auto mb-2 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
          </svg>
          <p className="text-sm">3D preview for {part.description}</p>
          <p className="text-xs mt-1 opacity-70">Wire up a viewer (e.g. online-3d-viewer, HOOPS, Forge) here</p>
        </div>
      </div>
    </div>
  )
}
