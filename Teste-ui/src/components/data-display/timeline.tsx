import data from './timeline.json';

export default function TimelineMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
