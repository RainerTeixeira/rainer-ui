import data from './ThemeToggle.json';

export default function ThemeToggleMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
