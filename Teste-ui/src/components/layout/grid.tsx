import data from './grid.json';

export default function GridMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
