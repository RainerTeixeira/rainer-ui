const data = {}
export default function AlertMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
