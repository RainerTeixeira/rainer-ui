import data from './flex.json';

export default function FlexMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
