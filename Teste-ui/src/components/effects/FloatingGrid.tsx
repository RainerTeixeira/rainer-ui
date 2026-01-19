import data from './FloatingGrid.json';

export default function FloatingGridMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
