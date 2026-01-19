import data from './menu.json';

export default function MenuMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
