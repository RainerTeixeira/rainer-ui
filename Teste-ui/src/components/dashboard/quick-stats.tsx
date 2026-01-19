import data from './quick-stats.json';

export default function QuickStatsMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
