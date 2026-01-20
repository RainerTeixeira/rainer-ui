const data = {}
export default function TimelineMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
