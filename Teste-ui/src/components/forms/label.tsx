import data from './label.json';

export default function LabelMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
