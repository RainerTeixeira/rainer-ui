import data from './radio-group.json';

export default function RadioGroupMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
