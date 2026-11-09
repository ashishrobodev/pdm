import WorkflowBoard from '../components/WorkflowBoard'

export default function Workflow() {
  return (
    <div className="flex-1 min-h-0 overflow-y-auto p-4">
      <h1 className="font-display font-semibold text-lg text-ink mb-1">Approval Workflow</h1>
      <p className="text-sm text-slate mb-4">Drag-and-drop support can be added with react-beautiful-dnd or @dnd-kit.</p>
      <WorkflowBoard />
    </div>
  )
}
