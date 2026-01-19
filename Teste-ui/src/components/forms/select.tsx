import data from './select.json';

export default function SelectMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
