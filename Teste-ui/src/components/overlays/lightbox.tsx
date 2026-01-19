import data from './lightbox.json';

export default function LightboxMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
