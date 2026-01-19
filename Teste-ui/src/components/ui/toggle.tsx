import data from './toggle.json';

export default function ToggleMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
