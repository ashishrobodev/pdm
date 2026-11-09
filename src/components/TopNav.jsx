import { useState } from 'react'

export default function TopNav() {
  const [query, setQuery] = useState('')

  return (
    <header className="h-14 bg-ink text-white flex items-center px-4 gap-4 shrink-0 border-b border-black/20">
      <div className="flex items-center gap-2 shrink-0">
        <div className="w-7 h-7 rounded bg-signal flex items-center justify-center font-display font-bold text-sm">V</div>
        <span className="font-display font-semibold tracking-wide text-sm hidden sm:inline">VAULTPDM</span>
      </div>

      <div className="flex-1 max-w-xl mx-auto">
        <div className="relative">
          <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search part number, description, revision…"
            className="w-full bg-white/10 focus:bg-white/15 outline-none rounded pl-9 pr-3 py-1.5 text-sm placeholder-white/40 transition-colors"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button className="bg-signal hover:bg-signalDark transition-colors text-white text-sm font-medium px-3 py-1.5 rounded">
          Upload
        </button>
        <button className="text-sm font-medium px-3 py-1.5 rounded border border-white/20 hover:bg-white/10 transition-colors hidden md:inline">
          New Project
        </button>
        <button className="relative p-1.5 rounded hover:bg-white/10 transition-colors" aria-label="Notifications">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-signal" />
        </button>
        <div className="w-8 h-8 rounded-full bg-steel flex items-center justify-center text-xs font-medium">RA</div>
      </div>
    </header>
  )
}
