# VaultPDM — CAD Product Data Management (Starter App)

A working PDM web app: top nav + search, assembly tree sidebar, part/file list,
3D viewer pane (placeholder, ready for a real CAD viewer library), metadata panel
(attributes / revision history / where-used / comments), and a Kanban approval
workflow board.

Runs immediately on **mock data** — no backend required to try it. Swap in
Supabase for real persistence when ready.

## 1. Run locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173).

## 2. Connect Supabase (optional, for real data)

1. Create a free project at supabase.com
2. In the SQL Editor, run the contents of `supabase-schema.sql` (creates parts,
   revisions, assemblies, checkouts, workflows, comments, attachments tables)
3. Copy `.env.example` to `.env` and fill in your Project URL + anon key
   (found in Project Settings → API)
4. Restart `npm run dev` — the yellow "mock data" banner disappears once
   `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set
5. Replace the mock data imports in `src/pages/Workspace.jsx` with real
   Supabase queries, e.g.:

```js
import { supabase } from '../lib/supabaseClient'

const { data: parts } = await supabase.from('parts').select('*')
```

## 3. Deploy free on Vercel

1. Push this project to a new GitHub repo
2. Go to vercel.com → sign in with GitHub → "Add New Project" → select the repo
3. Vercel auto-detects Vite — leave build settings as default
4. Under Project Settings → Environment Variables, add:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. Click Deploy — live at `your-project.vercel.app` in under a minute
6. Every future `git push` auto-redeploys

## Project structure

```
src/
  components/     UI building blocks (TopNav, Sidebar, FileListTable,
                   Viewer3D, MetadataPanel, WorkflowBoard, StatusBar, StatusBadge)
  pages/          Workspace (main PDM view), Workflow (Kanban board)
  data/           mockData.js — sample parts/tree/history used until Supabase is wired up
  lib/            supabaseClient.js — Supabase connection (auto-disables if no env vars)
supabase-schema.sql   Run this in Supabase SQL editor to create real tables
```

## Next features to add
- Real CAD viewer: swap the placeholder in `Viewer3D.jsx` for a library like
  `online-3d-viewer`, HOOPS Communicator, or Autodesk Forge Viewer (requires
  converting native CAD files to glTF/OBJ server-side first)
- File upload wired to Supabase Storage
- Auth (Supabase Auth) + role-based permissions (Admin/Engineer/Viewer/Approver)
- Drag-and-drop on the Workflow board (`@dnd-kit` or `react-beautiful-dnd`)
- BOM recursive tree view backed by the `assemblies` table
