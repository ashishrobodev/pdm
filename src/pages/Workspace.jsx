import { useMemo, useState } from 'react'
import Sidebar from '../components/Sidebar'
import FileListTable from '../components/FileListTable'
import Viewer3D from '../components/Viewer3D'
import MetadataPanel from '../components/MetadataPanel'
import { mockParts } from '../data/mockData'

export default function Workspace() {
  const [selectedId, setSelectedId] = useState(null)
  const [activeFilter, setActiveFilter] = useState(null)

  const filteredParts = useMemo(() => {
    if (!activeFilter) return mockParts
    switch (activeFilter) {
      case 'checkouts':
        return mockParts.filter((p) => p.checkedOutBy)
      case 'pending':
        return mockParts.filter((p) => p.state === 'in-review')
      case 'released':
        return mockParts.filter((p) => p.state === 'released')
      case 'inwork':
        return mockParts.filter((p) => p.state === 'in-work')
      case 'recent':
        return [...mockParts].sort((a, b) => (a.lastModified < b.lastModified ? 1 : -1)).slice(0, 3)
      default:
        return mockParts
    }
  }, [activeFilter])

  const selectedPart = mockParts.find((p) => p.id === selectedId)

  return (
    <div className="flex flex-1 min-h-0">
      <Sidebar
        selectedId={selectedId}
        onSelect={setSelectedId}
        activeFilter={activeFilter}
        onFilter={setActiveFilter}
      />

      <main className="flex-1 min-w-0 p-4 flex flex-col gap-4 overflow-y-auto">
        <div>
          <h1 className="font-display font-semibold text-lg text-ink mb-2">Parts &amp; Files</h1>
          <FileListTable parts={filteredParts} selectedId={selectedId} onSelect={setSelectedId} />
        </div>

        <div className="h-72 shrink-0">
          <Viewer3D part={selectedPart} />
        </div>
      </main>

      <MetadataPanel part={selectedPart} />
    </div>
  )
}
