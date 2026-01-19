import data from './TokensDemo.json';

export default function TokensDemoMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
