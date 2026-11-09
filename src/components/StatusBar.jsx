export default function StatusBar() {
  return (
    <footer className="h-7 bg-steel text-white/80 text-xs flex items-center px-3 gap-4 shrink-0 font-mono">
      <span className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-go" />
        Synced
      </span>
      <span>Storage: 1.2 GB / 5 GB</span>
      <span className="ml-auto">2 active workflow tasks</span>
    </footer>
  )
}
