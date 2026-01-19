import data from './form.json';

export default function FormMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
