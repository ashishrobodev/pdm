import { Routes, Route, Link, useLocation } from 'react-router-dom'
import TopNav from './components/TopNav'
import StatusBar from './components/StatusBar'
import Workspace from './pages/Workspace'
import Workflow from './pages/Workflow'
import { supabaseEnabled } from './lib/supabaseClient'

function SubNav() {
  const { pathname } = useLocation()
  const tabs = [
    { to: '/', label: 'Workspace' },
    { to: '/workflow', label: 'Workflow' },
  ]
  return (
    <div className="h-10 bg-panel border-b border-line flex items-center px-4 gap-1 shrink-0">
      {tabs.map((t) => (
        <Link
          key={t.to}
          to={t.to}
          className={`text-sm px-3 py-1.5 rounded transition-colors ${
            pathname === t.to ? 'bg-ink text-white' : 'text-steel hover:bg-paper'
          }`}
        >
          {t.label}
        </Link>
      ))}
      {!supabaseEnabled && (
        <span className="ml-auto text-xs font-mono text-wait bg-wait/10 border border-wait/30 px-2 py-1 rounded">
          Running on mock data — connect Supabase in .env
        </span>
      )}
    </div>
  )
}

export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <TopNav />
      <SubNav />
      <Routes>
        <Route path="/" element={<Workspace />} />
        <Route path="/workflow" element={<Workflow />} />
      </Routes>
      <StatusBar />
    </div>
  )
}
