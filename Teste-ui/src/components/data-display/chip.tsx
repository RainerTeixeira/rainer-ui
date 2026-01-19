import data from './chip.json';

export default function ChipMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
