const STATE_STYLES = {
  'released': { label: 'Released', classes: 'bg-go/10 text-go border-go/30' },
  'in-work': { label: 'In Work', classes: 'bg-work/10 text-work border-work/30' },
  'in-review': { label: 'In Review', classes: 'bg-wait/10 text-wait border-wait/30' },
  'obsolete': { label: 'Obsolete', classes: 'bg-hold/10 text-hold border-hold/30' },
}

export default function StatusBadge({ state }) {
  const style = STATE_STYLES[state] || STATE_STYLES['in-work']
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded border text-xs font-medium font-mono uppercase tracking-wide ${style.classes}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {style.label}
    </span>
  )
}
