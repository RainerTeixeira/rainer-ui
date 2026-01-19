import data from './masonry.json';

export default function MasonryMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
