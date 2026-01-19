import data from './stats-overview.json';

export default function StatsOverviewMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
