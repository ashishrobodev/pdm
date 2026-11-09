import { useState } from 'react'
import { mockTree } from '../data/mockData'

function TreeNode({ node, depth = 0, selectedId, onSelect }) {
  const [open, setOpen] = useState(depth < 1)
  const hasChildren = node.children && node.children.length > 0

  return (
    <div>
      <button
        onClick={() => {
          if (hasChildren) setOpen((o) => !o)
          onSelect(node.id)
        }}
        className={`w-full flex items-center gap-1.5 text-left px-2 py-1.5 rounded text-sm transition-colors ${
          selectedId === node.id ? 'bg-signal/10 text-signal font-medium' : 'text-steel hover:bg-line/60'
        }`}
        style={{ paddingLeft: `${depth * 14 + 8}px` }}
      >
        {hasChildren ? (
          <svg className={`w-3 h-3 shrink-0 transition-transform ${open ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        ) : (
          <span className="w-3 h-3 shrink-0 flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-current opacity-50" />
          </span>
        )}
        <span className="truncate">{node.name}</span>
      </button>
      {hasChildren && open && (
        <div>
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} depth={depth + 1} selectedId={selectedId} onSelect={onSelect} />
          ))}
        </div>
      )}
    </div>
  )
}

const FILTERS = [
  { key: 'checkouts', label: 'My Checkouts', count: 1 },
  { key: 'recent', label: 'Recently Modified', count: 3 },
  { key: 'pending', label: 'Pending Approval', count: 2 },
  { key: 'released', label: 'Released', count: 2 },
  { key: 'inwork', label: 'In Work', count: 1 },
]

export default function Sidebar({ selectedId, onSelect, activeFilter, onFilter }) {
  return (
    <aside className="w-64 shrink-0 bg-panel border-r border-line flex flex-col h-full">
      <div className="p-3 border-b border-line">
        <label className="text-[11px] font-mono uppercase tracking-wide text-slate mb-1 block">Workspace</label>
        <select className="w-full text-sm border border-line rounded px-2 py-1.5 bg-paper font-medium text-ink outline-none focus:border-signal">
          <option>Drive Unit Rev C</option>
          <option>Conveyor Frame</option>
          <option>Pump Housing v2</option>
        </select>
      </div>

      <div className="p-3 border-b border-line">
        <div className="text-[11px] font-mono uppercase tracking-wide text-slate mb-2">Filters</div>
        <div className="space-y-0.5">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => onFilter(activeFilter === f.key ? null : f.key)}
              className={`w-full flex items-center justify-between px-2 py-1.5 rounded text-sm transition-colors ${
                activeFilter === f.key ? 'bg-signal/10 text-signal font-medium' : 'text-steel hover:bg-line/60'
              }`}
            >
              <span>{f.label}</span>
              <span className="text-xs font-mono text-slate">{f.count}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-3">
        <div className="text-[11px] font-mono uppercase tracking-wide text-slate mb-2">Assembly Structure</div>
        {mockTree.map((node) => (
          <TreeNode key={node.id} node={node} selectedId={selectedId} onSelect={onSelect} />
        ))}
      </div>

      <div className="p-3 border-t border-line">
        <div className="text-[11px] font-mono uppercase tracking-wide text-slate mb-2">Favorites</div>
        <div className="text-sm text-slate italic px-2">No favorites yet</div>
      </div>
    </aside>
  )
}
