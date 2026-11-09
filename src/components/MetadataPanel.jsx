import { useState } from 'react'
import { mockRevisionHistory, mockWhereUsed, mockComments } from '../data/mockData'

const TABS = ['Attributes', 'History', 'Where-Used', 'Comments', 'Attachments']

export default function MetadataPanel({ part }) {
  const [tab, setTab] = useState('Attributes')

  if (!part) {
    return (
      <div className="w-80 shrink-0 border-l border-line bg-panel flex items-center justify-center text-slate text-sm p-4 text-center">
        No part selected
      </div>
    )
  }

  const history = mockRevisionHistory[part.id] || []
  const whereUsed = mockWhereUsed[part.id] || []
  const comments = mockComments[part.id] || []

  return (
    <aside className="w-80 shrink-0 border-l border-line bg-panel flex flex-col h-full">
      <div className="p-3 border-b border-line">
        <div className="font-mono text-sm font-semibold text-ink">{part.partNumber}</div>
        <div className="text-sm text-steel">{part.description}</div>
      </div>

      <div className="flex border-b border-line overflow-x-auto">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-2.5 py-2 text-xs font-medium whitespace-nowrap border-b-2 transition-colors ${
              tab === t ? 'border-signal text-signal' : 'border-transparent text-slate hover:text-steel'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-3 text-sm">
        {tab === 'Attributes' && (
          <dl className="space-y-2">
            {[
              ['Revision', part.revision],
              ['State', part.state],
              ['Material', part.material],
              ['Mass', part.mass],
              ['Owner', part.owner],
              ['Last Modified', part.lastModified],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between border-b border-line/60 pb-1.5">
                <dt className="text-slate">{label}</dt>
                <dd className="font-medium text-ink text-right">{value}</dd>
              </div>
            ))}
          </dl>
        )}

        {tab === 'History' && (
          <div className="space-y-3">
            {history.length === 0 && <p className="text-slate italic">No revision history recorded</p>}
            {history.map((h) => (
              <div key={h.rev} className="border-l-2 border-signal/40 pl-2.5">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="font-semibold text-ink">REV {h.rev}</span>
                  <span className="text-slate">{h.date}</span>
                </div>
                <div className="text-steel">{h.note}</div>
                <div className="text-xs text-slate">by {h.by}</div>
              </div>
            ))}
          </div>
        )}

        {tab === 'Where-Used' && (
          <div className="space-y-1.5">
            {whereUsed.length === 0 && <p className="text-slate italic">Not used in any assembly</p>}
            {whereUsed.map((w) => (
              <div key={w} className="px-2 py-1.5 rounded bg-paper text-steel">{w}</div>
            ))}
          </div>
        )}

        {tab === 'Comments' && (
          <div className="space-y-3">
            {comments.length === 0 && <p className="text-slate italic">No comments yet</p>}
            {comments.map((c, i) => (
              <div key={i} className="text-sm">
                <div className="flex justify-between text-xs mb-0.5">
                  <span className="font-medium text-ink">{c.user}</span>
                  <span className="text-slate">{c.date}</span>
                </div>
                <p className="text-steel">{c.text}</p>
              </div>
            ))}
            <textarea placeholder="Add a comment…" className="w-full border border-line rounded p-2 text-sm outline-none focus:border-signal resize-none" rows={2} />
          </div>
        )}

        {tab === 'Attachments' && (
          <p className="text-slate italic">No attachments uploaded</p>
        )}
      </div>
    </aside>
  )
}
