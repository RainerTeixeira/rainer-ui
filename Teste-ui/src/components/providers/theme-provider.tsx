import data from './theme-provider.json';

export default function ThemeProviderMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
