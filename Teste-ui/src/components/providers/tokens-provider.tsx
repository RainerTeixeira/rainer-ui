import data from './tokens-provider.json';

export default function TokensProviderMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
