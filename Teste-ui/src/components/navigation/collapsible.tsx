const data = {}
export default function CollapsibleMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
