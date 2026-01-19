import data from './scroll-area.json';

export default function ScrollAreaMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
