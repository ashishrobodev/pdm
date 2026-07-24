-- Run this in Supabase SQL Editor to create the core PDM schema.

create table if not exists parts (
  id uuid primary key default gen_random_uuid(),
  part_number text not null,
  description text,
  current_revision text,
  state text default 'in-work', -- in-work | in-review | released | obsolete
  owner_id uuid references auth.users(id),
  thumbnail_url text,
  type text default 'part', -- part | assembly | drawing
  material text,
  mass text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists revisions (
  id uuid primary key default gen_random_uuid(),
  part_id uuid references parts(id) on delete cascade,
  revision_code text not null,
  file_url text,
  note text,
  created_by uuid references auth.users(id),
  created_at timestamptz default now()
);

create table if not exists assemblies (
  id uuid primary key default gen_random_uuid(),
  parent_part_id uuid references parts(id) on delete cascade,
  child_part_id uuid references parts(id) on delete cascade,
  quantity numeric default 1
);

create table if not exists checkouts (
  id uuid primary key default gen_random_uuid(),
  part_id uuid references parts(id) on delete cascade,
  user_id uuid references auth.users(id),
  checked_out_at timestamptz default now(),
  released_at timestamptz
);

create table if not exists workflows (
  id uuid primary key default gen_random_uuid(),
  part_id uuid references parts(id) on delete cascade,
  stage text default 'draft', -- draft | review | approved | released
  approver_id uuid references auth.users(id),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists comments (
  id uuid primary key default gen_random_uuid(),
  part_id uuid references parts(id) on delete cascade,
  user_id uuid references auth.users(id),
  text text not null,
  created_at timestamptz default now()
);

create table if not exists attachments (
  id uuid primary key default gen_random_uuid(),
  part_id uuid references parts(id) on delete cascade,
  file_url text,
  type text, -- drawing | spec | report
  created_at timestamptz default now()
);

-- Enable Row Level Security (recommended)
alter table parts enable row level security;
alter table revisions enable row level security;
alter table assemblies enable row level security;
alter table checkouts enable row level security;
alter table workflows enable row level security;
alter table comments enable row level security;
alter table attachments enable row level security;

-- Basic policy: any authenticated user can read/write (tighten later per role)
create policy "Authenticated read" on parts for select using (auth.role() = 'authenticated');
create policy "Authenticated write" on parts for insert with check (auth.role() = 'authenticated');
create policy "Authenticated update" on parts for update using (auth.role() = 'authenticated');
