-- bakusoku schema

create table builders (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  tools text[] default '{}',
  bio text,
  status text not null default 'new' check (status in ('new', 'active', 'inactive')),
  created_at timestamptz not null default now()
);

create table applications (
  id uuid primary key default gen_random_uuid(),
  app_name text not null,
  app_url text not null,
  github_url text,
  tools_used text not null,
  description text not null,
  contact_email text not null,
  status text not null default 'pending' check (status in ('pending', 'reviewing', 'accepted', 'rejected')),
  buy_price integer,
  builder_id uuid references builders(id),
  created_at timestamptz not null default now()
);

create table challenges (
  id uuid primary key default gen_random_uuid(),
  company_name text not null,
  title text not null,
  description text not null,
  scope text,
  contact_person text,
  status text not null default 'open' check (status in ('open', 'assigned', 'completed')),
  created_at timestamptz not null default now()
);

create table assignments (
  id uuid primary key default gen_random_uuid(),
  challenge_id uuid not null references challenges(id),
  builder_id uuid not null references builders(id),
  status text not null default 'open' check (status in ('open', 'assigned', 'in_progress', 'delivered', 'accepted')),
  started_at timestamptz,
  delivered_at timestamptz,
  payment_amount integer,
  notes text,
  created_at timestamptz not null default now()
);

-- RLS
alter table builders enable row level security;
alter table applications enable row level security;
alter table challenges enable row level security;
alter table assignments enable row level security;

-- Applications: anon can INSERT, authenticated can do everything
create policy "anon_insert_applications" on applications for insert to anon with check (true);
create policy "auth_all_applications" on applications for all to authenticated using (true) with check (true);

-- Builders: anon can INSERT (created during application), authenticated can do everything
create policy "anon_insert_builders" on builders for insert to anon with check (true);
create policy "auth_all_builders" on builders for all to authenticated using (true) with check (true);

-- Challenges: authenticated only
create policy "auth_all_challenges" on challenges for all to authenticated using (true) with check (true);

-- Assignments: authenticated only
create policy "auth_all_assignments" on assignments for all to authenticated using (true) with check (true);

-- Indexes
create index idx_applications_status on applications(status);
create index idx_applications_created_at on applications(created_at desc);
create index idx_assignments_status on assignments(status);
create index idx_assignments_builder_id on assignments(builder_id);
create index idx_assignments_challenge_id on assignments(challenge_id);
