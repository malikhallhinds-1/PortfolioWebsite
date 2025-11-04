/*
  # Create projects table for portfolio

  1. New Tables
    - `projects`
      - `id` (uuid, primary key) - Unique identifier for each project
      - `title` (text) - Project name
      - `description` (text) - Project description
      - `tags` (text array) - Technologies used (e.g., ['React', 'Node.js'])
      - `github_url` (text) - Link to GitHub repository
      - `demo_url` (text) - Link to live demo
      - `order` (integer) - Display order on portfolio
      - `created_at` (timestamp) - Creation date

  2. Security
    - Enable RLS on `projects` table
    - Add policy allowing public read access (portfolio is public)
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  tags text[] NOT NULL DEFAULT '{}',
  github_url text,
  demo_url text,
  "order" integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read all projects"
  ON projects
  FOR SELECT
  TO public
  USING (true);
