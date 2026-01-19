import data from './aspect-ratio.json';

export default function AspectRatioMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
