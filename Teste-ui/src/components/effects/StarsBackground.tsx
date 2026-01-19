import data from './StarsBackground.json';

export default function StarsBackgroundMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
