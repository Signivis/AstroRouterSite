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

export type UITranslations = Record<string, string>;

function getSQL() {
  const databaseUrl = import.meta.env.POSTGRES_URL ?? process.env.POSTGRES_URL;
  if (!databaseUrl) {
    throw new Error("POSTGRES_URL environment variable is not set");
  }
  return neon(databaseUrl);
}

export async function getAllRouters(locale?: string): Promise<Router[]> {
  const sql = getSQL();
  if (locale && locale !== "en") {
    const rows = await sql`
      SELECT r.*,
        COALESCE(t.description, r.description) AS description,
        COALESCE(t.features, r.features) AS features
      FROM routers r
      LEFT JOIN router_translations t ON t.router_id = r.id AND t.locale = ${locale}
      ORDER BY r.rating DESC
    `;
    return rows as Router[];
  }
  const rows = await sql`SELECT * FROM routers ORDER BY rating DESC`;
  return rows as Router[];
}

export async function getRouterBySlug(slug: string, locale?: string): Promise<Router | undefined> {
  const sql = getSQL();
  if (locale && locale !== "en") {
    const rows = await sql`
      SELECT r.*,
        COALESCE(t.description, r.description) AS description,
        COALESCE(t.features, r.features) AS features
      FROM routers r
      LEFT JOIN router_translations t ON t.router_id = r.id AND t.locale = ${locale}
      WHERE r.slug = ${slug}
      LIMIT 1
    `;
    return rows[0] as Router | undefined;
  }
  const rows = await sql`SELECT * FROM routers WHERE slug = ${slug} LIMIT 1`;
  return rows[0] as Router | undefined;
}

export async function getUITranslations(locale: string): Promise<UITranslations> {
  if (locale === "en") return {};
  const sql = getSQL();
  const rows = await sql`SELECT key, value FROM ui_translations WHERE locale = ${locale}`;
  const map: UITranslations = {};
  for (const row of rows) {
    map[row.key] = row.value;
  }
  return map;
}
