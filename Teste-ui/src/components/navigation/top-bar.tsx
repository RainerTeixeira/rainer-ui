import data from './top-bar.json';

export default function TopBarMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
