/**
 * Venmiga SDK Types
 * Use these types when building apps for VenmigaOS.
 */

export interface VenmigaTheme {
  mode: 'dark' | 'light';
  primaryColor: string;
  glassBlur: string;
}

export interface VenmigaStorage {
  get(key: string): Promise<string | null>;
  set(key: string, value: string): Promise<void>;
}

export interface VenmigaModel<T = Record<string, unknown>> {
  create(data: T): Promise<T>;
  findMany(where?: Partial<T>, limit?: number): Promise<T[]>;
  findFirst(where?: Partial<T>): Promise<T | null>;
}

export interface VenmigaDb {
  query<T = Record<string, unknown>>(sql: string, params?: unknown[]): Promise<T[]>;
  execute(sql: string, params?: unknown[]): Promise<void>;
  model<T = Record<string, unknown>>(tableName: string): VenmigaModel<T>;
}

export interface VenmigaSDK {
  notify(title: string, message?: string): Promise<void>;
  storage: VenmigaStorage;
  db: VenmigaDb;
  getTheme(): Promise<VenmigaTheme>;
}

declare global {
  interface Window {
    Venmiga?: VenmigaSDK;
    __VENMIGA_APP_ID__?: string;
  }
}
