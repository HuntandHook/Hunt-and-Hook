
-- Hunt & Hook basic schema
create table if not exists users (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  role text check (role in ('customer','guide','outfitter')) default 'customer',
  stripe_customer_id text,
  created_at timestamp with time zone default now()
);

create table if not exists subscriptions (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references users(id) on delete cascade,
  plan text check (plan in ('guide','outfitter','ads','ads_social')) not null,
  active boolean default false,
  current_period_end timestamp with time zone,
  created_at timestamp with time zone default now()
);

create table if not exists trips (
  id uuid default gen_random_uuid() primary key,
  owner_id uuid references users(id) on delete set null,
  title text not null,
  type text check (type in ('Hunting','Fishing')) not null,
  category text,
  location text,
  price_min numeric,
  price_max numeric,
  start_date date,
  end_date date,
  description text,
  images jsonb default '[]',
  is_published boolean default false,
  created_at timestamp with time zone default now()
);

create table if not exists resumes (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references users(id) on delete set null,
  full_name text,
  contact_email text,
  bio text,
  regions text,
  species text,
  certifications text,
  day_rate numeric,
  resume_url text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);
