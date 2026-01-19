import data from './stats-cards.json';

export default function StatsCardsMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
