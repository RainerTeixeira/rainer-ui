import data from './input.json';

export default function InputMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
