import data from './fab.json';

export default function FabMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
