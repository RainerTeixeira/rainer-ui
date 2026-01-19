import data from './kpi.json';

export default function KpiMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
