import data from './CelestialBackground.json';

export default function CelestialBackgroundMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
