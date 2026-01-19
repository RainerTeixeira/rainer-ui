import data from './alert.json';

export default function AlertMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
