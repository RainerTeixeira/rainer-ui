import data from './panel.json';

export default function PanelMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
