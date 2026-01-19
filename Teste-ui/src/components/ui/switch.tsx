import data from './switch.json';

export default function SwitchMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
