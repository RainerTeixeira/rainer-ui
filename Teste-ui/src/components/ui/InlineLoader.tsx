import data from './InlineLoader.json';

export default function InlineLoaderMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
