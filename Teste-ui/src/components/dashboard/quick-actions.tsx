import data from './quick-actions.json';

export default function QuickActionsMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
