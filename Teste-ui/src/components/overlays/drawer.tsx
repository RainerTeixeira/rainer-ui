import data from './drawer.json';

export default function DrawerMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
