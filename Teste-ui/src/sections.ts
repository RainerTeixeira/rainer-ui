export const componentSections = [
  'accessibility',
  'compliance',
  'content',
  'dashboard',
  'data-display',
  'development',
  'effects',
  'feedback',
  'forms',
  'infrastructure',
  'layout',
  'navigation',
  'overlays',
  'providers',
  'pwa',
  'social',
  'ui',
  'utilities',
].map((folder) => ({
  id: folder,
  label: folder
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase()),
}));
