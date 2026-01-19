import data from './input.json';

export default function InputUiMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
