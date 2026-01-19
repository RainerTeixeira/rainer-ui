import data from './help-center.json';

export default function HelpCenterMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
