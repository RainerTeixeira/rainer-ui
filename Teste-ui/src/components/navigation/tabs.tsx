import data from './tabs.json';

export default function TabsMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
