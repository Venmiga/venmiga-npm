/**
 * venmiga-sdk
 * SDK types and utilities for building VenmigaOS apps (.vpk)
 *
 * Import this module to augment window.Venmiga with TypeScript types.
 */
export type {
  VenmigaTheme,
  VenmigaStorage,
  VenmigaModel,
  VenmigaDb,
  VenmigaSDK,
} from './types';

export { VenmigaManifestSchema, type VenmigaManifest } from './manifest';
