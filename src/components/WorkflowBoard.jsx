import { mockWorkflow } from '../data/mockData'

const COLUMNS = [
  { key: 'draft', label: 'Draft' },
  { key: 'review', label: 'Review' },
  { key: 'approved', label: 'Approved' },
  { key: 'released', label: 'Released' },
]

export default function WorkflowBoard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {COLUMNS.map((col) => {
        const items = mockWorkflow.filter((w) => w.stage === col.key)
        return (
          <div key={col.key} className="bg-paper border border-line rounded flex flex-col">
            <div className="px-3 py-2 border-b border-line flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wide text-slate font-medium">{col.label}</span>
              <span className="text-xs font-mono text-slate">{items.length}</span>
            </div>
            <div className="p-2 space-y-2 min-h-[120px]">
              {items.map((item) => (
                <div key={item.id} className="bg-panel border border-line rounded p-2.5 shadow-sm hover:border-signal/40 transition-colors cursor-pointer">
                  <div className="font-mono text-xs font-semibold text-ink">{item.partNumber}</div>
                  <div className="text-sm text-steel">{item.title}</div>
                </div>
              ))}
              {items.length === 0 && (
                <div className="text-xs text-slate italic px-1 py-2">Nothing here</div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
