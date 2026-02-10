/**
 * Venmiga manifest schema and validation
 */

export interface VenmigaManifest {
  id: string;
  slug: string;
  name: string;
  version: string;
  description?: string;
  category?: string;
  icon?: string;
  main: string;
  framework?: 'vanilla' | 'react' | 'vue';
  schemaVersion?: number;
  migrations?: string[];
  permissions?: ('notifications' | 'storage' | 'database' | 'network')[];
  author?: string;
  price?: number;
}

/** Minimal required manifest fields for validation */
export const VenmigaManifestSchema = {
  required: ['id', 'slug', 'name', 'version', 'main'] as const,
  optional: [
    'description',
    'category',
    'icon',
    'framework',
    'schemaVersion',
    'migrations',
    'permissions',
    'author',
    'price',
  ] as const,
};

export function validateManifest(obj: unknown): obj is VenmigaManifest {
  if (!obj || typeof obj !== 'object') return false;
  const m = obj as Record<string, unknown>;
  return (
    typeof m.id === 'string' &&
    typeof m.slug === 'string' &&
    typeof m.name === 'string' &&
    typeof m.version === 'string' &&
    typeof m.main === 'string'
  );
}
