import { neon } from "@neondatabase/serverless";

export interface Router {
  id: number;
  slug: string;
  name: string;
  brand: string;
  image_url: string;
  price: number;
  wifi_standard: string;
  speed: string;
  frequency_bands: string;
  ports: string;
  description: string;
  features: string[];
  rating: number;
}

function getSQL() {
  const databaseUrl = import.meta.env.POSTGRES_URL ?? process.env.POSTGRES_URL;
  if (!databaseUrl) {
    throw new Error("POSTGRES_URL environment variable is not set");
  }
  return neon(databaseUrl);
}

export async function getAllRouters(): Promise<Router[]> {
  const sql = getSQL();
  const rows = await sql`SELECT * FROM routers ORDER BY rating DESC`;
  return rows as Router[];
}

export async function getRouterBySlug(slug: string): Promise<Router | undefined> {
  const sql = getSQL();
  const rows = await sql`SELECT * FROM routers WHERE slug = ${slug} LIMIT 1`;
  return rows[0] as Router | undefined;
}
