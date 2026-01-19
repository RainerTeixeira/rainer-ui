import data from './button.json';

export default function ButtonMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
