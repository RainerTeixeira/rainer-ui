import data from './sonner.json';

export default function SonnerMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
