import data from './empty-state.json';

export default function EmptyStateMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
