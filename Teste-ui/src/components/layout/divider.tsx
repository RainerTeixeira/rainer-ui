import data from './divider.json';

export default function DividerMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
