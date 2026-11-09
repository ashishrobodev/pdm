import StatusBadge from './StatusBadge'

const TYPE_ICON = {
  assembly: '⚙',
  part: '◆',
  drawing: '▤',
}

export default function FileListTable({ parts, selectedId, onSelect }) {
  return (
    <div className="border border-line rounded overflow-hidden bg-panel">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-paper border-b border-line text-left">
            <th className="px-3 py-2 font-mono text-[11px] uppercase tracking-wide text-slate font-medium w-10"></th>
            <th className="px-3 py-2 font-mono text-[11px] uppercase tracking-wide text-slate font-medium">Part Number</th>
            <th className="px-3 py-2 font-mono text-[11px] uppercase tracking-wide text-slate font-medium">Description</th>
            <th className="px-3 py-2 font-mono text-[11px] uppercase tracking-wide text-slate font-medium">Rev</th>
            <th className="px-3 py-2 font-mono text-[11px] uppercase tracking-wide text-slate font-medium">State</th>
            <th className="px-3 py-2 font-mono text-[11px] uppercase tracking-wide text-slate font-medium">Owner</th>
            <th className="px-3 py-2 font-mono text-[11px] uppercase tracking-wide text-slate font-medium">Modified</th>
            <th className="px-3 py-2 font-mono text-[11px] uppercase tracking-wide text-slate font-medium">Checked Out</th>
          </tr>
        </thead>
        <tbody>
          {parts.map((p) => (
            <tr
              key={p.id}
              onClick={() => onSelect(p.id)}
              className={`border-b border-line last:border-0 cursor-pointer transition-colors ${
                selectedId === p.id ? 'bg-signal/5' : 'hover:bg-paper'
              }`}
            >
              <td className="px-3 py-2 text-center text-slate">{TYPE_ICON[p.type] || '◆'}</td>
              <td className="px-3 py-2 font-mono font-medium text-ink">{p.partNumber}</td>
              <td className="px-3 py-2 text-steel">{p.description}</td>
              <td className="px-3 py-2 font-mono text-slate">{p.revision}</td>
              <td className="px-3 py-2"><StatusBadge state={p.state} /></td>
              <td className="px-3 py-2 text-steel">{p.owner}</td>
              <td className="px-3 py-2 text-slate font-mono text-xs">{p.lastModified}</td>
              <td className="px-3 py-2 text-slate">
                {p.checkedOutBy ? (
                  <span className="inline-flex items-center gap-1 text-work">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    {p.checkedOutBy}
                  </span>
                ) : (
                  '—'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
