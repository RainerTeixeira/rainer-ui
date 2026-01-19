import data from './analytics-overview.json';

export default function AnalyticsOverviewMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
