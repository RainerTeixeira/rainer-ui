const data = {}
export default function PanelMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
